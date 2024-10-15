    function sign(options, secret) {
      var isEcdsa = options.algorithm && options.algorithm.indexOf('ES') === 0;
      jwt.sign({foo: 123}, secret || (isEcdsa ? cert_ecdsa_priv : cert_rsa_priv), options);
    }