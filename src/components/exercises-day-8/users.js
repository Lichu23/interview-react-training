const users = [
  { id: 1, name: "Juan", age: 21, country: "Argentina" },
  { id: 2, name: "María", age: 17, country: "Chile" },
  { id: 3, name: "Pedro", age: 30, country: "México" },
  { id: 4, name: "Lucía", age: 25, country: "Argentina" },
];

function getOldest(users) {
  return users
    .filter((user) => user.age > 18)
    .map((user) => `${user.name} (${user.country})`);
}

console.log(getOldest(users));
