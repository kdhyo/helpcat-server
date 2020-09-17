import { GraphQLServer } from "graphql-yoga";
import { PrismaClient } from "@prisma/client";
import passport from "passport";
import cors from "cors";
import logger from "morgan"
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";

const PORT = process.envPORT || 4000;

const resolvers = {
  Query,
  Mutation,
};

const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: (request) => {
    return {
      ...request,
      prisma,
    };
  },
});

server.express.use(cors());
server.express.use(logger("dev"));

server.start({port: PORT}, () => console.log(`🚀 Server is running on localhost:${PORT}`));
