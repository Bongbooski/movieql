import { getMovies } from "./data";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating)
  }
};

export default resolvers;
