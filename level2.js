let typeChecker = (...args) => {
  let ages = 0;
  args.forEach((item) => {
    if (typeof item !== 'string') {
      console.log('This is not a string');
    } else if (typeof JSON.parse(item) === 'object') {
      let object = JSON.parse(item);
      if (object.age) {
        ages += Number(object.age);
      }
    }
  });
  console.log(ages);
};

typeChecker('{"age":"30"}', '{"age":"30"}');

let arr = [{ name: 'Diego', lastName: 'Ortega' }];

arr.map((item) => {
  let fullName = item.name + ' ' + item.lastName;
  arr.splice(0, 1, fullName);
});

console.log(arr);

var sortArray = [
  30, 5, 5, 18, 43, 16, 21, 16, 24, 4, 38, 3, 18, 19, 18, 42, 6, 35, 38, 43,
];
let evenArray = [];
let oddArray = [];

sortArray.map((item) => {
  if (item % 2 == 0) {
    evenArray.push(item);
  } else {
    oddArray.push(item);
  }
});

evenArray.sort((a, b) => {
  return a - b;
});

oddArray.sort((a, b) => {
  return a - b;
});

let sortedArray = evenArray.concat(oddArray);

console.log(sortedArray);
