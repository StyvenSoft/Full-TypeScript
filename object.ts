const person: {
    name: string;
    age: number;
    hobbies: any
} = {
    name: 'Steveen',
    age: 23,
    hobbies: ['Sport', 'Cooking', 'Coding']
};

let favoriteActivities: string[];
favoriteActivities = ['Sport'];

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
} 
