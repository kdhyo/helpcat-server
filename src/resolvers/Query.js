function hello(_, { name }) {
  return `Hello ${name || "World"}`;
}

module.exports = {
  hello,
};
