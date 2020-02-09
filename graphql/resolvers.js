import { getMovies, getMovieById, addMovie, deleteMovie } from "./data";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    // person: (_, args) => getById(id)
    movie: (_, { id }) => getMovieById(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
};

export default resolvers;
