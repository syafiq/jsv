const getStoredPrivateAttributes = (model) => union(
  strapi?.config?.get('api.responses.privateAttributes', []) ?? [],
  getOr([], 'options.privateAttributes', model)
);