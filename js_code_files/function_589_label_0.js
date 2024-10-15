          objectId: this.objectId(),
        },
      },
    });
    promise = query.execute().then(results => {
      results.results.forEach(session =>
        this.config.cacheController.user.del(session.sessionToken)
      );
    });
  }

  return promise
    .then(() => {
      // Transform the password
      if (this.data.password === undefined) {
        // ignore only if undefined. should proceed if empty ('')
        return Promise.resolve();
      }

      if (this.query) {
        this.storage['clearSessions'] = true;
        // Generate a new session only if the user requested
        if (!this.auth.isMaster && !this.auth.isMaintenance) {
          this.storage['generateNewSession'] = true;
        }
      }

      return this._validatePasswordPolicy().then(() => {
        return passwordCrypto.hash(this.data.password).then(hashedPassword => {
          this.data._hashed_password = hashedPassword;
          delete this.data.password;
        });
      });
    })
    .then(() => {
      return this._validateUserName();
    })
    .then(() => {
      return this._validateEmail();
    });
};