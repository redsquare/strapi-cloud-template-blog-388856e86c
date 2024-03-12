module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
    // @ts-ignore
    config: {
      contentSecurityPolicy: {
        directives: {
          'img-src': ['*'],
        },
      }
    },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
