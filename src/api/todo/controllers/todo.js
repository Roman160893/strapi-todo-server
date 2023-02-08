"use strict";

const { sanitizedEntity } = require("@strapi/strapi");

/**
 * todo controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::todo.todo", ({ strapi }) => ({
//   async create(ctx) {
//     try {
//       let entity;
//       const todo = ctx.request.body.data;
//       todo.user = ctx.state.user;
//       entity = await strapi.service("api::todo.todo").todo.find(todo);
//       return sanitizedEntity(entity, { model: strapi.models.todo });
//     } catch (err) {
//       console.log(err);
//     }
//   },
// }));

module.exports = createCoreController("api::todo.todo");
