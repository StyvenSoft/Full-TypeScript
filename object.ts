enum Role { ADMIN, READ_ONLY, AUTHOR }

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
    profile: any
} = {
    name: 'Steveen',
    age: 23,
    hobbies: ['Sport', 'Cooking', 'Coding'],
    role: [2, 'author'],
    profile: Role.ADMIN
};

person.role = [0, 'admin'];

let favoriteActivities: string[];
favoriteActivities = ['Sport'];

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
} 

if(person.profile === Role.AUTHOR) {
    console.log('Is Author');
}