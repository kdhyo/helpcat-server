async function userAll(parent, args, context, info) {
  const users = await context.prisma.user.findMany({});
  return users;
}

async function serviceAll(parent, args, context, info) {
  const services = context.prisma.service.findMany();
  return services;
}

module.exports = {
  userAll,
  user,
  serviceAll,
};
