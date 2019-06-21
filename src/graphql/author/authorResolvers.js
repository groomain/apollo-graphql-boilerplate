import Author from './Author';

const authorResolvers = {
  Query: {
    authors: () => Author.all(),
  },
};

export default authorResolvers;
