export default {
  Subscription: {
    newService: {
      subscribe: (_, __, { pubsub }) => {
        return pubsub.asyncIterator("NEW_SERVICE");
      },
      resolve: (payload) => {
        return payload;
      },
    },
  },
};
