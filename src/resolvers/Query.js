import { isAuthenticated } from "../config/middlewares";

function hello(_, { name }) {
  return `Hello ${name || "World"}`;
}

async function userAll(parent, args, context, info) {
  try {
    const users = await context.prisma.user.findMany({});
    return users;
  } catch (error) {
    return new Error(error);
  }
}

async function user(parent, args, { requset, prisma }, info) {
  try {
    isAuthenticated(requset);
    console.log(requset.user);
    return requset.user;
  } catch (error) {
    return new Error(error);
  }
}

module.exports = {
  hello,
  userAll,
  user,
};
