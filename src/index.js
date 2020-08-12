const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolvers");
const typeDefs = require("./types");

const { context } = require("./config");

init();

async function init() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // introspection: true,
    // playground: true
    context,
  });
  const { url } = await server.listen({
    port: process.env.PORT || 4000,
  });
  console.log(`Server running at ${url}`);
}
