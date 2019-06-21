import { gql } from 'apollo-server';

const bookTypeDef = gql`
  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: Author
  }
`;

export default bookTypeDef;
