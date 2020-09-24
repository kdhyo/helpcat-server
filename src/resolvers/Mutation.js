import { isAuthenticated } from "../config/middlewares";
import {
  signup,
  login,
  UserDelete,
  updatePassword,
  validateEmail,
} from "./auth";

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
    return service;
  } catch (error) {
    return new Error(error);
  }
}

// 서비스 글 삭제
async function serviceDelete(parent, args, { request, prisma }, info) {
  try {
    const user = isAuthenticated(request.res.req);
    const userId = user.id;
    const { id } = args;

    // 존재하는 게시글인지 확인.
    const service = await prisma.service.findOne({
      where: {
        id,
      },
    });
    if (!service) return new Error("게시글이 존재하지 않습니다.");

    //게시글 아이디와 로그인된 아이디가 같은지 확인
    if (service.reqUserId === userId) {
      await prisma.service.delete({
        where: { id },
      });
      return true;
    } else {
      return new Error("게시글 작성자가 아닙니다.");
    }
  } catch (error) {
    return new Error(error);
  }
}

// 서비스 글 수정
async function editService(parent, args, { request, prisma }, info) {
  try {
    const user = isAuthenticated(request.res.req);
    const userId = user.id;
    const { id, title, contents, address, price, startAt, endAt } = args;

    // 존재하는 게시글인지 확인.
    const service = await prisma.service.findOne({
      where: {
        id,
      },
    });
    if (!service) return new Error("게시글이 존재하지 않습니다.");

    //게시글 아이디와 로그인된 아이디가 같은지 확인
    if (service.reqUserId === userId) {
      await prisma.service.update({
        where: { id },
        data: {
          title,
          contents,
          address,
          price,
          startAt,
          endAt,
        },
      });
      return true;
    } else {
      return new Error("게시글 작성자가 아닙니다.");
    }
  } catch (error) {
    return new Error(error);
  }
}

module.exports = {
  signup,
  login,
  UserDelete,
  updatePassword,
  validateEmail,
  serviceUproad,
  serviceDelete,
  editService,
};
