import { isAuthenticated } from "../config/middlewares";

async function userAll(parent, args, context, info) {
  const users = await context.prisma.user.findMany({});
  return users;
}

async function user(parent, args, { request }, info) {
  try {
    const user = isAuthenticated(request.res.req);
    return user;
  } catch (error) {
    return new Error(error);
  }
}

async function serviceAll(parent, args, context, info) {
  const services = context.prisma.service.findMany();
  return services;
}

module.exports = {
  userAll,
  user,
  serviceAll,
};
