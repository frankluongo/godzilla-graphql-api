const { Kind } = require("graphql/language");

const dateScalar = {
  name: "Date",
  description: "Date formatted in Milliseconds",
  parseValue,
  serialize,
  parseLiteral,
};

// Value from the client
function parseValue(value) {
  return new Date(value);
}
// Value sent to the client
function serialize(value) {
  return value.getTime();
}
// Wrapper for everything
function parseLiteral(ast) {
  if (ast.kind !== Kind.INT) return null;
  return new Date(ast.value);
}

module.exports = dateScalar;
