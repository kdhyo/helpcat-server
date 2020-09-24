import { isAuthenticated } from "../config/middlewares";

async function userAll(parent, args, context, info) {
  try {
    const users = await context.prisma.user.findMany({});
    return users;
  } catch (error) {
    return new Error(error);
  }
}

async function user(parent, args, { request }, info) {
  try {
    const user = isAuthenticated(request.res.req);
    return user;
  } catch (error) {
    return new Error(error);
  }
}

module.exports = {
  userAll,
  user,
};
