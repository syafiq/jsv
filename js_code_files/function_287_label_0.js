        topic: function() {
          const jar = new tough.CookieJar(undefined, {
            rejectPublicSuffixes: false
          });
          // try to pollute the prototype
          jar.setCookieSync(
            "Slonser=polluted; Domain=__proto__; Path=/notauth",
            "https://__proto__/admin"
          );
          jar.setCookieSync(
            "Auth=Lol; Domain=google.com; Path=/notauth",
            "https://google.com/"
          );
          this.callback();
        },