    function sign(options, secretOrPrivateKey) {
      jwt.sign({foo: 123}, secretOrPrivateKey, options);
    }