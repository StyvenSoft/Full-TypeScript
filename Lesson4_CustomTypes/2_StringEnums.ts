enum DirectionString { North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' }

let petOnSaleTwo = 'chinchilla';
let ordersArrayTwo = [
  ['rat', 2], 
  ['chinchilla', 1], 
  ['hamster', 2], 
  ['chinchilla', 50]
];

// Write your code below:
enum PetString {
  Hamster = 'HAMSTER',
  Rat = 'RAT',
  Chinchilla = 'CHINCHILLA',
  Tarantula = 'TARANTULA'
}

const petOnSaleTStwo : PetString = PetString.Chinchilla;

let ordersArrayTStwo : [PetString, number][] = [
  [PetString.Rat, 2], 
  [PetString.Chinchilla, 1], 
  [PetString.Hamster, 2], 
  [PetString.Chinchilla, 50]
];

ordersArrayTStwo.push([PetString.Hamster, 1]);