import { isAuthenticated } from "../config/middlewares";
import { signup, login, UserDelete, updatePassword } from "./auth";

// 서비스 글 생성
async function serviceUproad(parent, args, { request, prisma, pubsub }, info) {
  try {
    const user = isAuthenticated(request.res.req);
    const userId = user.id;

    const service = await prisma.service.create({
      data: {
        ...args,
        reqUser: { connect: { id: userId } },
      },
    });

    pubsub.publish("NEW_SERVICE", service);

    console.log(service);
    return service;
  } catch (error) {
    return new Error(error);
  }
}

module.exports = {
  signup,
  login,
  UserDelete,
  updatePassword,
  serviceUproad,
};
