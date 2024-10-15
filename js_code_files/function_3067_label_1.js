      window.fetch = function() {
        return originalFetch.apply(this, arguments).then(function(response) {
          handleResponseHeaders(response.headers.get.bind(response.headers));
          return response;
        });
      };