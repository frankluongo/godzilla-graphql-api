require("dotenv").config({
  path: "../.env",
});
const { ApolloServer } = require("apollo-server");
const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/types");

const dbConnect = require("./data");
const { context } = require("./config");

init();

async function init() {
  dbConnect();
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
