export default {
  Query: {
    me: (_, {room}, { request, isAuthenticated, prisma }) => {
      isAuthenticated(request.res.req);
      
      return await prisma.message.findMany({where:{room}});
    },
  },
};
