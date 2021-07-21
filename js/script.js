const person = {
  name: "Alice",
  lastName: "Parker",
  student: "True"
};

console.log(person.student);

console.log(person.lastName);

console.log(person.name);

person.totalSteps = 200;

person.walk = function (steps) {
  person.totalSteps += steps;
};

person.walk(250);

console.log(person.totalSteps);
