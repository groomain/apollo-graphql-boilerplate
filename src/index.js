require('core-js/stable');
require('regenerator-runtime/runtime');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer, gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

import typeDefinitions from './graphql/typeDefinitions';
import globalResolvers from './graphql/globalResolvers';

// Initialize your Express app like before
const app = express();

const server = new ApolloServer({
  // These will be defined for both new or existing servers
  typeDefs: typeDefinitions,
  resolvers: globalResolvers,
  dataSources: () => ({}),
  tracing: true,
  cacheControl: {
    defaultMaxAge: 5,
  },
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
