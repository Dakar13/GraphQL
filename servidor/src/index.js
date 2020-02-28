import express from "express";
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './data/schema';
import { resolvers } from './data/resolvers';

import { connect } from './database';

const app = express();
connect();

const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({app});

app.listen({port: 4000}, ()=> console.log(` El Servidor se esta ejecutando en http://localhost:4000${server.graphqlPath} `));