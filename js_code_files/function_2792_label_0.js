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