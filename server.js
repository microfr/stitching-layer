const express = require("express");
const schema = require("./apollo/schema");
const next = require("next");
const { ApolloServer } = require("apollo-server-express");

const isDev = process.env.NODE_ENV !== "production";
const nextApp = next({ isDev });
const handle = nextApp.getRequestHandler();
const app = express();
const getUser = (token) => require('./apollo/schema/stubs').users.find(u => u.id === token)

nextApp
  .prepare()
  .then(() => {
    const server = new ApolloServer({
      ...schema, 
      context: ({ req }) => {
        try {
          const token = req.headers.authorization || '';
          const user = getUser(token);
          return { user, token };
        } catch(err) {
          console.error(err)
          return null
        }
      }
    });
    server.applyMiddleware({ app, cors: true });

    app
      .get("*", (req, res) => {
        return handle(req, res);
      })
      .listen({ port: 4000 }, () =>
        console.log(
          `🚀 GraphQL Playground ready at http://localhost:4000${server.graphqlPath}\n`,
          `🎷 UI ready at http://localhost:4000`
        )
      );
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
