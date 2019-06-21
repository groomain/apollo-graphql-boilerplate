import book from './book';
import author from './author';

const globalResolvers = [book.resolvers, author.resolvers];

export default globalResolvers;
