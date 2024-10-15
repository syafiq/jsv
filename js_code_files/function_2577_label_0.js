function handleKexInit(self, payload) {
  /*
    byte         SSH_MSG_KEXINIT
    byte[16]     cookie (random bytes)
    name-list    kex_algorithms
    name-list    server_host_key_algorithms
    name-list    encryption_algorithms_client_to_server
    name-list    encryption_algorithms_server_to_client
    name-list    mac_algorithms_client_to_server
    name-list    mac_algorithms_server_to_client
    name-list    compression_algorithms_client_to_server
    name-list    compression_algorithms_server_to_client
    name-list    languages_client_to_server
    name-list    languages_server_to_client
    boolean      first_kex_packet_follows
    uint32       0 (reserved for future extension)
  */
  const init = {
    kex: undefined,
    serverHostKey: undefined,
    cs: {
      cipher: undefined,
      mac: undefined,
      compress: undefined,
      lang: undefined,
    },
    sc: {
      cipher: undefined,
      mac: undefined,
      compress: undefined,
      lang: undefined,
    },
  };

  bufferParser.init(payload, 17);

  if ((init.kex = bufferParser.readList()) === undefined
      || (init.serverHostKey = bufferParser.readList()) === undefined
      || (init.cs.cipher = bufferParser.readList()) === undefined
      || (init.sc.cipher = bufferParser.readList()) === undefined
      || (init.cs.mac = bufferParser.readList()) === undefined
      || (init.sc.mac = bufferParser.readList()) === undefined
      || (init.cs.compress = bufferParser.readList()) === undefined
      || (init.sc.compress = bufferParser.readList()) === undefined
      || (init.cs.lang = bufferParser.readList()) === undefined
      || (init.sc.lang = bufferParser.readList()) === undefined) {
    bufferParser.clear();
    return doFatalError(
      self,
      'Received malformed KEXINIT',
      'handshake',
      DISCONNECT_REASON.KEY_EXCHANGE_FAILED
    );
  }

  const pos = bufferParser.pos();
  const firstFollows = (pos < payload.length && payload[pos] === 1);
  bufferParser.clear();

  const local = self._offer;
  const remote = init;

  let localKex = local.lists.kex.array;
  if (self._compatFlags & COMPAT.BAD_DHGEX) {
    let found = false;
    for (let i = 0; i < localKex.length; ++i) {
      if (localKex[i].indexOf('group-exchange') !== -1) {
        if (!found) {
          found = true;
          // Copy array lazily
          localKex = localKex.slice();
        }
        localKex.splice(i--, 1);
      }
    }
  }

  let clientList;
  let serverList;
  let i;
  const debug = self._debug;

  debug && debug('Inbound: Handshake in progress');

  // Key exchange method =======================================================
  debug && debug(`Handshake: (local) KEX method: ${localKex}`);
  debug && debug(`Handshake: (remote) KEX method: ${remote.kex}`);
  let remoteExtInfoEnabled;
  if (self._server) {
    serverList = localKex;
    clientList = remote.kex;
    remoteExtInfoEnabled = (clientList.indexOf('ext-info-c') !== -1);
  } else {
    serverList = remote.kex;
    clientList = localKex;
    remoteExtInfoEnabled = (serverList.indexOf('ext-info-s') !== -1);
  }
  if (self._strictMode === undefined) {
    if (self._server) {
      self._strictMode =
        (clientList.indexOf('kex-strict-c-v00@openssh.com') !== -1);
    } else {
      self._strictMode =
        (serverList.indexOf('kex-strict-s-v00@openssh.com') !== -1);
    }
    // Note: We check for seqno of 1 instead of 0 since we increment before
    //       calling the packet handler
    if (self._strictMode) {
      debug && debug('Handshake: strict KEX mode enabled');
      if (self._decipher.inSeqno !== 1) {
        if (debug)
          debug('Handshake: KEXINIT not first packet in strict KEX mode');
        return doFatalError(
          self,
          'Handshake failed: KEXINIT not first packet in strict KEX mode',
          'handshake',
          DISCONNECT_REASON.KEY_EXCHANGE_FAILED
        );
      }
    }
  }
  // Check for agreeable key exchange algorithm
  for (i = 0;
       i < clientList.length && serverList.indexOf(clientList[i]) === -1;
       ++i);
  if (i === clientList.length) {
    // No suitable match found!
    debug && debug('Handshake: no matching key exchange algorithm');
    return doFatalError(
      self,
      'Handshake failed: no matching key exchange algorithm',
      'handshake',
      DISCONNECT_REASON.KEY_EXCHANGE_FAILED
    );
  }
  init.kex = clientList[i];
  debug && debug(`Handshake: KEX algorithm: ${clientList[i]}`);
  if (firstFollows && (!remote.kex.length || clientList[i] !== remote.kex[0])) {
    // Ignore next inbound packet, it was a wrong first guess at KEX algorithm
    self._skipNextInboundPacket = true;
  }


  // Server host key format ====================================================
  const localSrvHostKey = local.lists.serverHostKey.array;
  debug && debug(`Handshake: (local) Host key format: ${localSrvHostKey}`);
  debug && debug(
    `Handshake: (remote) Host key format: ${remote.serverHostKey}`
  );
  if (self._server) {
    serverList = localSrvHostKey;
    clientList = remote.serverHostKey;
  } else {
    serverList = remote.serverHostKey;
    clientList = localSrvHostKey;
  }
  // Check for agreeable server host key format
  for (i = 0;
       i < clientList.length && serverList.indexOf(clientList[i]) === -1;
       ++i);
  if (i === clientList.length) {
    // No suitable match found!
    debug && debug('Handshake: No matching host key format');
    return doFatalError(
      self,
      'Handshake failed: no matching host key format',
      'handshake',
      DISCONNECT_REASON.KEY_EXCHANGE_FAILED
    );
  }
  init.serverHostKey = clientList[i];
  debug && debug(`Handshake: Host key format: ${clientList[i]}`);


  // Client->Server cipher =====================================================
  const localCSCipher = local.lists.cs.cipher.array;
  debug && debug(`Handshake: (local) C->S cipher: ${localCSCipher}`);
  debug && debug(`Handshake: (remote) C->S cipher: ${remote.cs.cipher}`);
  if (self._server) {
    serverList = localCSCipher;
    clientList = remote.cs.cipher;
  } else {
    serverList = remote.cs.cipher;
    clientList = localCSCipher;
  }
  // Check for agreeable client->server cipher
  for (i = 0;
       i < clientList.length && serverList.indexOf(clientList[i]) === -1;
       ++i);
  if (i === clientList.length) {
    // No suitable match found!
    debug && debug('Handshake: No matching C->S cipher');
    return doFatalError(
      self,
      'Handshake failed: no matching C->S cipher',
      'handshake',
      DISCONNECT_REASON.KEY_EXCHANGE_FAILED
    );
  }
  init.cs.cipher = clientList[i];
  debug && debug(`Handshake: C->S Cipher: ${clientList[i]}`);


  // Server->Client cipher =====================================================
  const localSCCipher = local.lists.sc.cipher.array;
  debug && debug(`Handshake: (local) S->C cipher: ${localSCCipher}`);
  debug && debug(`Handshake: (remote) S->C cipher: ${remote.sc.cipher}`);
  if (self._server) {
    serverList = localSCCipher;
    clientList = remote.sc.cipher;
  } else {
    serverList = remote.sc.cipher;
    clientList = localSCCipher;
  }
  // Check for agreeable server->client cipher
  for (i = 0;
       i < clientList.length && serverList.indexOf(clientList[i]) === -1;
       ++i);
  if (i === clientList.length) {
    // No suitable match found!
    debug && debug('Handshake: No matching S->C cipher');
    return doFatalError(
      self,
      'Handshake failed: no matching S->C cipher',
      'handshake',
      DISCONNECT_REASON.KEY_EXCHANGE_FAILED
    );
  }
  init.sc.cipher = clientList[i];
  debug && debug(`Handshake: S->C cipher: ${clientList[i]}`);


  // Client->Server MAC ========================================================
  const localCSMAC = local.lists.cs.mac.array;
  debug && debug(`Handshake: (local) C->S MAC: ${localCSMAC}`);
  debug && debug(`Handshake: (remote) C->S MAC: ${remote.cs.mac}`);
  if (CIPHER_INFO[init.cs.cipher].authLen > 0) {
    init.cs.mac = '';
    debug && debug('Handshake: C->S MAC: <implicit>');
  } else {
    if (self._server) {
      serverList = localCSMAC;
      clientList = remote.cs.mac;
    } else {
      serverList = remote.cs.mac;
      clientList = localCSMAC;
    }
    // Check for agreeable client->server hmac algorithm
    for (i = 0;
         i < clientList.length && serverList.indexOf(clientList[i]) === -1;
         ++i);
    if (i === clientList.length) {
      // No suitable match found!
      debug && debug('Handshake: No matching C->S MAC');
      return doFatalError(
        self,
        'Handshake failed: no matching C->S MAC',
        'handshake',
        DISCONNECT_REASON.KEY_EXCHANGE_FAILED
      );
    }
    init.cs.mac = clientList[i];
    debug && debug(`Handshake: C->S MAC: ${clientList[i]}`);
  }


  // Server->Client MAC ========================================================
  const localSCMAC = local.lists.sc.mac.array;
  debug && debug(`Handshake: (local) S->C MAC: ${localSCMAC}`);
  debug && debug(`Handshake: (remote) S->C MAC: ${remote.sc.mac}`);
  if (CIPHER_INFO[init.sc.cipher].authLen > 0) {
    init.sc.mac = '';
    debug && debug('Handshake: S->C MAC: <implicit>');
  } else {
    if (self._server) {
      serverList = localSCMAC;
      clientList = remote.sc.mac;
    } else {
      serverList = remote.sc.mac;
      clientList = localSCMAC;
    }
    // Check for agreeable server->client hmac algorithm
    for (i = 0;
         i < clientList.length && serverList.indexOf(clientList[i]) === -1;
         ++i);
    if (i === clientList.length) {
      // No suitable match found!
      debug && debug('Handshake: No matching S->C MAC');
      return doFatalError(
        self,
        'Handshake failed: no matching S->C MAC',
        'handshake',
        DISCONNECT_REASON.KEY_EXCHANGE_FAILED
      );
    }
    init.sc.mac = clientList[i];
    debug && debug(`Handshake: S->C MAC: ${clientList[i]}`);
  }


  // Client->Server compression ================================================
  const localCSCompress = local.lists.cs.compress.array;
  debug && debug(`Handshake: (local) C->S compression: ${localCSCompress}`);
  debug && debug(`Handshake: (remote) C->S compression: ${remote.cs.compress}`);
  if (self._server) {
    serverList = localCSCompress;
    clientList = remote.cs.compress;
  } else {
    serverList = remote.cs.compress;
    clientList = localCSCompress;
  }
  // Check for agreeable client->server compression algorithm
  for (i = 0;
       i < clientList.length && serverList.indexOf(clientList[i]) === -1;
       ++i);
  if (i === clientList.length) {
    // No suitable match found!
    debug && debug('Handshake: No matching C->S compression');
    return doFatalError(
      self,
      'Handshake failed: no matching C->S compression',
      'handshake',
      DISCONNECT_REASON.KEY_EXCHANGE_FAILED
    );
  }
  init.cs.compress = clientList[i];
  debug && debug(`Handshake: C->S compression: ${clientList[i]}`);


  // Server->Client compression ================================================
  const localSCCompress = local.lists.sc.compress.array;
  debug && debug(`Handshake: (local) S->C compression: ${localSCCompress}`);
  debug && debug(`Handshake: (remote) S->C compression: ${remote.sc.compress}`);
  if (self._server) {
    serverList = localSCCompress;
    clientList = remote.sc.compress;
  } else {
    serverList = remote.sc.compress;
    clientList = localSCCompress;
  }
  // Check for agreeable server->client compression algorithm
  for (i = 0;
       i < clientList.length && serverList.indexOf(clientList[i]) === -1;
       ++i);
  if (i === clientList.length) {
    // No suitable match found!
    debug && debug('Handshake: No matching S->C compression');
    return doFatalError(
      self,
      'Handshake failed: no matching S->C compression',
      'handshake',
      DISCONNECT_REASON.KEY_EXCHANGE_FAILED
    );
  }
  init.sc.compress = clientList[i];
  debug && debug(`Handshake: S->C compression: ${clientList[i]}`);

  init.cs.lang = '';
  init.sc.lang = '';

  // XXX: hack -- find a better way to do this
  if (self._kex) {
    if (!self._kexinit) {
      // We received a rekey request, but we haven't sent a KEXINIT in response
      // yet
      kexinit(self);
    }
    self._decipher._onPayload = onKEXPayload.bind(self, { firstPacket: false });
  }

  self._kex = createKeyExchange(init, self, payload);
  self._kex.remoteExtInfoEnabled = remoteExtInfoEnabled;
  self._kex.start();
}