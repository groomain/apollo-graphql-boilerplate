import { gql } from 'apollo-server';

const authorTypeDef = gql`
  type Author {
    name: String
  }
  
  type AuthorConnection {
    books: [Book]
  }
`;

export default authorTypeDef;
