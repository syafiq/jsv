      { curve: 'secp384r1', key: loadKey('secp384r1-private.pem') },
      { curve: 'secp521r1', key: loadKey('secp521r1-private.pem') }
    ];

    describe('when validating keys generated using Elliptic Curves', function () {
      curvesAlgorithms.forEach(function(curveAlgorithm) {
        curvesKeys
          .forEach((curveKeys) => {
            if (curveKeys.curve !== curveAlgorithm.curve) {
              if (ASYMMETRIC_KEY_DETAILS_SUPPORTED) {
                it(`should throw an error when validating an ${curveAlgorithm.algorithm} token for key with curve ${curveKeys.curve}`, function() {
                  expect(() => {
                    validateAsymmetricKey(curveAlgorithm.algorithm, curveKeys.key);
                  }).to.throw(`"alg" parameter "${curveAlgorithm.algorithm}" requires curve "${curveAlgorithm.curve}".`);
                });
              } else {
                it(`should pass the validation for incorrect keys if the Node version does not support checking the key's curve name`, function() {
                  expect(() => {
                    validateAsymmetricKey(curveAlgorithm.algorithm, curveKeys.key);
                  }).not.to.throw();
                });
              }
            } else {
              it(`should accept an ${curveAlgorithm.algorithm} token for key with curve ${curveKeys.curve}`, function() {
                expect(() => {
                  validateAsymmetricKey(curveAlgorithm.algorithm, curveKeys.key);
                }).not.to.throw();
              });
            }
          });
      });
    });
  });

  if (RSA_PSS_KEY_DETAILS_SUPPORTED) {
    describe('RSA-PSS algorithms', function () {
      const key = loadKey('rsa-pss-private.pem');

      it(`it should throw an error when validating a key with wrong RSA-RSS parameters`, function () {
        const algorithm = 'PS512';
        expect(function() {
          validateAsymmetricKey(algorithm, key);
        }).to.throw('Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" PS512')
      });

      it(`it should throw an error when validating a key with invalid salt length`, function () {
        const algorithm = 'PS256';
        const shortSaltKey = loadKey('rsa-pss-invalid-salt-length-private.pem');
        expect(function() {
          validateAsymmetricKey(algorithm, shortSaltKey);
        }).to.throw('Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" PS256.')
      });

      it(`it should pass the validation when the key matches all the requirements for the algorithm`, function () {
        expect(function() {
          const algorithm = 'PS256';
          validateAsymmetricKey(algorithm, key);
        }).not.to.throw()
      });
    });
  }
});