const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolvers");
const typeDefs = require("./types");

init();

async function init() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await server.listen({
    port: process.env.PORT || 4000,
  });
  console.log(`Server running at ${url}`);
}
