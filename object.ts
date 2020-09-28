const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Steveen',
    age: 23,
    hobbies: ['Sport', 'Cooking', 'Coding'],
    role: [2, 'author']
};

person.role = [0, 'admin'];

let favoriteActivities: string[];
favoriteActivities = ['Sport'];

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
} 
