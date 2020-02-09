import { people, getById } from "./data";

const resolvers = {
  Query: {
    people: () => people,
    // person: (_, args) => getById(id)
    person: (_, { id }) => getById(id)
  }
};

export default resolvers;
