pimcore.helpers.sanitizeUrlSlug = function (slug) {
    return slug.replace(/[^a-z0-9-_+/]/gi, '');
};