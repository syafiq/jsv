function onKEXPayload(state, payload) {
  // XXX: move this to the Decipher implementations?
  if (payload.length === 0) {
    this._debug && this._debug('Inbound: Skipping empty packet payload');
    return;
  }

  if (this._skipNextInboundPacket) {
    this._skipNextInboundPacket = false;
    return;
  }

  payload = this._packetRW.read.read(payload);

  const type = payload[0];

  if (!this._strictMode) {
    switch (type) {
      case MESSAGE.IGNORE:
      case MESSAGE.UNIMPLEMENTED:
      case MESSAGE.DEBUG:
        if (!MESSAGE_HANDLERS)
          MESSAGE_HANDLERS = require('./handlers.js');
        return MESSAGE_HANDLERS[type](this, payload);
    }
  }

  switch (type) {
    case MESSAGE.DISCONNECT:
      if (!MESSAGE_HANDLERS)
        MESSAGE_HANDLERS = require('./handlers.js');
      return MESSAGE_HANDLERS[type](this, payload);
    case MESSAGE.KEXINIT:
      if (!state.firstPacket) {
        return doFatalError(
          this,
          'Received extra KEXINIT during handshake',
          'handshake',
          DISCONNECT_REASON.KEY_EXCHANGE_FAILED
        );
      }
      state.firstPacket = false;
      return handleKexInit(this, payload);
    default:
      // Ensure packet is either an algorithm negotiation or KEX
      // algorithm-specific packet
      if (type < 20 || type > 49) {
        return doFatalError(
          this,
          `Received unexpected packet type ${type}`,
          'handshake',
          DISCONNECT_REASON.KEY_EXCHANGE_FAILED
        );
      }
  }

  return this._kex.parse(payload);
}