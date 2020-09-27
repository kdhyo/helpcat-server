export default {
  Mutation: {
    addService: async (parent, args, { request, prisma, pubsub, isAuthenticated }, info) => {
      const user = isAuthenticated(request.res.req);
      const userId = user.id;
      try {
        const service = await prisma.service.create({
          data: {
            ...args,
            reqUser: { connect: { id: userId } },
          },
        });
        pubsub.publish("NEW_SERVICE", service);

        return true;
      } catch (error) {
        return new Error(error);
      }
    },
  },
};
