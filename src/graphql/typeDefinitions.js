import { gql } from 'apollo-server';
import book from "./book";
import author from "./author";

const queryTypes = gql`
  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
    authors: [Author]
  }
`;


const globalQuery = [book.typeDef, author.typeDef, queryTypes];

export default globalQuery;
