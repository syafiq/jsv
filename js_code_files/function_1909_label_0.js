  model() {
    return this.store
      .findAll("pending-post", {
        username: this.username,
      })
      .then((pendingPosts) => {
        for (let pendingPost of pendingPosts.content) {
          pendingPost.title = emojiUnescape(
            escapeExpression(pendingPost.title)
          );
        }

        return pendingPosts;
      });
  },