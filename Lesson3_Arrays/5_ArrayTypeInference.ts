let tuple: [number, number, number] = [1, 2, 3];
let concatResult = tuple.concat([4, 5, 6]); // concatResult has the value [1,2,3,4,5,6].

console.log(concatResult);

// Don't change this part:
let dogTup: [string, string, string, string] = ['dog', 'brown fur', 'curly tail', 'sad eyes'];

// Your code goes here:
let myArr = dogTup.concat(dogTup);
myArr[50] = 'not a dog';
