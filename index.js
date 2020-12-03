import express from 'express';
import jsonServer from 'json-server';
import jsonGraphqlExpress from 'json-graphql-server';
import db from './db.json';

const server = express();

const PORT = 2020;

server.use('/graphql', jsonGraphqlExpress(db));

//use the direct file to allow for persistant data
server.use('/api', jsonServer.router('db.json'));

server.listen(PORT, () => {
  console.log('JSON server started on port 2020..');
  console.log(`   * REST api available at /api`);
  console.log(`   * GraphQL available at /graphql`);
});
