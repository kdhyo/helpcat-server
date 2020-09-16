import { GraphQLServer } from "graphql-yoga";
import { PrismaClient } from "@prisma/client";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import typeDefs from "./schema.graphql";

const prisma = new PrismaClient();

const resolvers = {
  Query,
  Mutation,
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: (request) => {
    return {
      ...request,
      prisma,
    };
  },
});

server.start(() => console.log(`🚀 Server is running on localhost:4000`));
