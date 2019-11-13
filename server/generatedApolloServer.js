const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql` 

type people {
  name: String
  mass: Int
}

type Query {
  getAllpeople: [people]
  getpeopleById(id: ID!): people
}

type Mutation {
  addpeople(name: String, mass: Int, ): Boolean
  updatepeople(name: String, mass: Int, ): Boolean
  deletepeople(id: ID): Boolean
}

`;

const resolvers = {
};

const port = process.env.PORT || 4000; // defaults to port 4000
const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server listening at ${url}`);
});
