import { GraphQLServer, PubSub } from "graphql-yoga";
import { PrismaClient } from "@prisma/client";
import logger from "morgan";
import cors from "cors";
import "./config/env";
import "./config/passport";
import schema from "./config/schema";
import { authenticateJwt } from "./config/passport";
import { isAuthenticated } from "./config/middlewares";

const PORT = process.env.PORT || 4000;

const prisma = new PrismaClient();
const pubsub = new PubSub();

const server = new GraphQLServer({
  schema,
  context: (request) => {
    return {
      ...request,
      prisma,
      isAuthenticated,
      pubsub,
    };
  },
});

server.express.use(cors());
server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () => console.log(`🚀 Server is running on localhost:${PORT}`));
