export default {
  Query: {
    me: (_, __, { request, isAuthenticated }) => {
      return (user = isAuthenticated(request.res.req));
    },
  },
};
