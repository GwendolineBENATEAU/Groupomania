'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 * 
 * Creation de la route suivante :
 * "method": "GET",
      "path": "/messages/:id/comments",
      "handler": "message.findComments",
 */

      const { sanitizeEntity } = require('strapi-utils');

      module.exports = {
              
        async findComments(ctx) {
          const { id } = ctx.params;
      
          const entity = await strapi.services.message.findOne({ id });
          //return sanitizeEntity(entity, { model: strapi.models.message });
          return entity.comments;
        },
      };
