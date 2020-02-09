export const people = [
  {
    id: "1",
    name: "Booski",
    age: 28,
    gender: "male"
  },
  {
    id: "2",
    name: "ad",
    age: 28,
    gender: "female"
  },
  {
    id: "3",
    name: "JD",
    age: 31,
    gender: "male"
  },
  {
    id: "4",
    name: "pk",
    age: 14,
    gender: "female"
  },
  {
    id: "5",
    name: "BC",
    age: 64,
    gender: "male"
  },
  {
    id: "6",
    name: "Jordan",
    age: 31,
    gender: "male"
  },
  {
    id: "7",
    name: "BI",
    age: 23,
    gender: "female"
  }
];

export const getById = id => {
  const filteredPeoples = people.filter(person => person.id === String(id));
  return filteredPeoples[0];
};

export const getMovies = () => movies;

export const getMovieById = id => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id != id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

let movies = [
  {
    id: 0,
    name: "Titanic",
    score: 8
  },
  {
    id: 1,
    name: "Full Metal Jacket",
    score: 7
  },
  {
    id: 2,
    name: "전우치",
    score: 6
  },
  {
    id: 3,
    name: "Logan",
    score: 5
  }
];

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };

  movies.push(newMovie);
  return newMovie;
};
