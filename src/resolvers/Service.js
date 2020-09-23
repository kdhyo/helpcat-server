function reqUser(parent, args, context) {
  return context.prisma.service.findOne({ where: { id: parent.id } }).reqUser();
}

module.exports = {
  reqUser,
};
