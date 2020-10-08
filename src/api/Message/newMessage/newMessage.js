import { withFilter } from "graphql-yoga";
export default {
  Subscription: {
    newMessage: {
      subscribe: withFilter(
        (_, __, { pubsub }) => pubsub.asyncIterator("NEW_MESSAGE"),
        (payload, args) => payload.roomId === args.roomId
      ),
    },
  },
};
