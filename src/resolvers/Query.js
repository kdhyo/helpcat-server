function hello(_, { name }) {
  return `Hello ${name || "World"}`;
}

async function userAll(parent, args, context, info) {
  try {
    const users = await context.prisma.user.findMany({});
    return users;
  } catch (error) {
    return new Error(error);
  }
}

export { hello, userAll };
