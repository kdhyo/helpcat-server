export default {
  Subscription: {
    newMessage: {
      subscribe: (_, args, { pubsub, prisma }) => {
        const { roomId } = args;
        return pubsub.asyncIterator(`NEW_MESSAGE${roomId}`);
      },
      resolve: (payload, args, context) => {
        console.log(args, context);
        return payload;
      },
    },
  },
};
