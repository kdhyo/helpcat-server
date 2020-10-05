import { GraphQLServer, PubSub } from "graphql-yoga";
import { PrismaClient } from "@prisma/client";
import logger from "morgan";
import cors from "cors";
import "./config/env";
import "./config/passport";
import schema from "./config/schema";
import { authenticateJwt } from "./config/passport";
import { isAuthenticated } from "./config/middlewares";
import { uploadMiddleware, uploadController } from "./config/upload";

const port = process.env.PORT || 4000;
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

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
server.express.use(cors(corsOptions));

server.express.use(logger("dev"));
server.express.use(authenticateJwt);
server.express.post("/api/upload", uploadMiddleware, uploadController);

server.start({ port }, () => console.log(`🚀 Server is running on localhost:${port}`));
