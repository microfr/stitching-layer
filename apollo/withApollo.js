const { ApolloClient, InMemoryCache } = require("apollo-boost");
const { withApollo } = require("next-with-apollo");
const { createHttpLink } = require("apollo-link-http");
const fetch = require("isomorphic-unfetch");

// Update the GraphQL endpoint to any instance of GraphQL that you like
const GRAPHQL_URL = "http://localhost:4000/graphql";

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_URL
});

module.exports = withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: link,
      cache: new InMemoryCache().restore(initialState || {})
    })
);
