async function newServiceSubscribe(parent, args, context, info) {
  return context.pubsub.asyncIterator("NEW_SERVICE");
  // const service = await context.prisma.service.findMany({});
  // console.log(service);
  // return service;
}

const newService = {
  subscribe: newServiceSubscribe,
  resolve: (payload) => {
    console.log(payload);
    return payload;
  },
};

module.exports = {
  newService,
};
