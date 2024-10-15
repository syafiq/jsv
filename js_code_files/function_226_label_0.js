    save: function (callback) {
      if (this.loading) {
        return;
      }

      this.loading = true;
      this.$spinner.removeClass('hidden');

      var formData = Garnish.getPostData(this.$form),
        data = $.extend({enabled: 1}, formData, this.params);

      Craft.postActionRequest(
        'entries/save-entry',
        data,
        (response, textStatus) => {
          this.loading = false;
          this.$spinner.addClass('hidden');

          if (this.$errorList) {
            this.$errorList.children().remove();
          }

          if (textStatus === 'success') {
            if (response.success) {
              Craft.cp.displayNotice(Craft.t('app', 'Entry saved.'));
              callback(response);
            } else {
              Craft.cp.displayError(Craft.t('app', 'Couldn’t save entry.'));

              if (response.errors) {
                if (!this.$errorList) {
                  this.$errorList = $('<ul class="errors"/>').insertAfter(
                    this.$form
                  );
                }

                for (var attribute in response.errors) {
                  if (!response.errors.hasOwnProperty(attribute)) {
                    continue;
                  }

                  for (var i = 0; i < response.errors[attribute].length; i++) {
                    var error = response.errors[attribute][i];
                    $('<li/>', {
                      text: error,
                    }).appendTo(this.$errorList);
                  }
                }
              }
            }
          }
        }
      );
    },