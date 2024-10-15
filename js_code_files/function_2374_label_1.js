    window.XMLHttpRequest.prototype.open = function() {
      this.addEventListener('load', function() {
        handleResponseHeaders(this.getResponseHeader.bind(this));
      });
      return originalOpen.apply(this, arguments);
    };