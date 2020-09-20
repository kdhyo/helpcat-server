import { GraphQLServer } from "graphql-yoga";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import logger from "morgan";
import "./config/env";
import "./config/passport";
import { authenticateJwt } from "./config/passport";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import { isAuthenticated } from "./config/middlewares";

const PORT = process.env.PORT || 4000;

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
      isAuthenticated,
    };
  },
});

server.express.use(cors());
server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () => console.log(`🚀 Server is running on localhost:${PORT}`));
