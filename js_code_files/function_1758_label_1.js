RestWrite.prototype.runBeforeSaveTrigger = function () {
  if (this.response || this.runOptions.many) {
    return;
  }

  // Avoid doing any setup for triggers if there is no 'beforeSave' trigger for this class.
  if (
    !triggers.triggerExists(this.className, triggers.Types.beforeSave, this.config.applicationId)
  ) {
    return Promise.resolve();
  }

  const { originalObject, updatedObject } = this.buildParseObjects();
  const identifier = updatedObject._getStateIdentifier();
  const stateController = Parse.CoreManager.getObjectStateController();
  const [pending] = stateController.getPendingOps(identifier);
  this.pendingOps = {
    operations: { ...pending },
    identifier,
  };

  return Promise.resolve()
    .then(() => {
      // Before calling the trigger, validate the permissions for the save operation
      let databasePromise = null;
      if (this.query) {
        // Validate for updating
        databasePromise = this.config.database.update(
          this.className,
          this.query,
          this.data,
          this.runOptions,
          true,
          true
        );
      } else {
        // Validate for creating
        databasePromise = this.config.database.create(
          this.className,
          this.data,
          this.runOptions,
          true
        );
      }
      // In the case that there is no permission for the operation, it throws an error
      return databasePromise.then(result => {
        if (!result || result.length <= 0) {
          throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, 'Object not found.');
        }
      });
    })
    .then(() => {
      return triggers.maybeRunTrigger(
        triggers.Types.beforeSave,
        this.auth,
        updatedObject,
        originalObject,
        this.config,
        this.context
      );
    })
    .then(response => {
      if (response && response.object) {
        this.storage.fieldsChangedByTrigger = _.reduce(
          response.object,
          (result, value, key) => {
            if (!_.isEqual(this.data[key], value)) {
              result.push(key);
            }
            return result;
          },
          []
        );
        this.data = response.object;
        // We should delete the objectId for an update write
        if (this.query && this.query.objectId) {
          delete this.data.objectId;
        }
      }
      this.checkProhibitedKeywords(this.data);
    });
};