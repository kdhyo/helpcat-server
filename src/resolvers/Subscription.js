function newServiceSubscribe(parent, args, context, info) {
  return context.pubsub.asyncIterator("NEW_SERVICE");
}

const newService = {
  subscribe: newServiceSubscribe,
  resolve: (payload) => {
    return payload;
  },
};

module.exports = {
  newService,
};
