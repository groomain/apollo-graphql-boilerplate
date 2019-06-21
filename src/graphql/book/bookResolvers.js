
import Book from './Book';

const bookResolvers = {
  Query: {
    books: () => Book.all(),
  },
};

export default bookResolvers;
