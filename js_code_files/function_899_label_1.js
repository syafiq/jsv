RestWrite.prototype.checkProhibitedKeywords = function (data) {
  if (this.config.requestKeywordDenylist) {
    // Scan request data for denied keywords
    for (const keyword of this.config.requestKeywordDenylist) {
      const match = Utils.objectContainsKeyValue(data, keyword.key, keyword.value);
      if (match) {
        throw new Parse.Error(
          Parse.Error.INVALID_KEY_NAME,
          `Prohibited keyword in request data: ${JSON.stringify(keyword)}.`
        );
      }
    }
  }
};