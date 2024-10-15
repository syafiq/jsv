      window.fetch = function() {
        // Inject the form token.
        let modifiedArguments = arguments;
        // Make sure this is really safe in case this should be called in some unexpected situation.
        const formToken = document?.documentElement?.dataset?.xwikiFormToken;
        if (formToken) {
          let request = null;
          // Convert the arguments to a request, as Request expects the same arguments as fetch() but provides
          // convenient ways to modify the headers (and fetch accepts a request as parameter).
          if (arguments.length === 1 && arguments[0] instanceof Request) {
            request = arguments[0];
          } else if (arguments.length) {
            request = new Request(...arguments);
          }
          // Only handle expected cases and same-origin requests to prevent leaking the token to third-parties,
          // leave the arguments alone otherwise.
          if (request !== null && window.location.origin === (new URL(request.url, window.location.href).origin)) {
            request.headers.append("XWiki-Form-Token", formToken);
            modifiedArguments = [request];
          }
        }
        return originalFetch.apply(this, modifiedArguments).then(function(response) {
          handleResponseHeaders(response.headers.get.bind(response.headers));
          return response;
        });
      };