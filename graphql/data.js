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
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
