export default {
  Query: {
    me: (_, __, { request, isAuthenticated }) => {
      const user = isAuthenticated(request.res.req);
      return user;
    },
  },
};
