export default {
  Mutation: {
    sendMessage: async (_, args, { request, isAuthenticated, prisma, pubsub }) => {
      const user = isAuthenticated(request.res.req);
      const { room, message, to } = args;

      try {
        const sendMessage = await prisma.message.create({
          data: {
            text: message,
            fromTouser: {
              connect: { id: user.id },
            },
            toTouser: {
              connect: { id: to },
            },
            messageToroom: {
              connect: { id: room },
            },
          },
        });
        pubsub.publish(`NEW_MESSAGE${room}`, sendMessage);

        return sendMessage;
      } catch (error) {
        return error;
      }
    },
  },
};
