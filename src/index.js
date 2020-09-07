import { GraphQLServer } from "graphql-yoga";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const typeDefs = `
type Query {
  hello(name: String) : String!
}
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`,
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log(`Server is running on 🚀 localhost:4000`));
