const users = [
  { id: 1, name: "Juan", age: 21 },
  { id: 2, name: "María", age: 17 },
  { id: 3, name: "Pedro", age: 30 },
  { id: 4, name: "Lucía", age: 25 },
];

function getAdults(usersArr) {
  return usersArr.filter((user) => user.age >= 18);
}

function getNames(usersAdults) {
    return usersAdults.map((user) => user.name)
}

getAdults(users);

getNames(getAdults(users));
