export const isAuthenticated = (request) => {
  if (!request.user) {
    throw Error("로그인을 해주시길 바랍니다.");
  }
  return request.user;
};
