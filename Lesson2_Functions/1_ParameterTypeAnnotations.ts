function greet(name: string) {
    console.log(`Hello, ${name}!`);
}

greet('Katz'); // Prints: Hello, Katz 

function printKeyValue(key: string, value) {
    console.log(`${key}: ${value}`);
}

printKeyValue('Courage', 1337); // Prints: Courage: 1337
printKeyValue('Mood', 'scared'); // Prints: Mood: scared


function triple(value: number) {
    return value * 3;
}

function greetTripled(greeting: string, value: number) {
    console.log(`${greeting}, ${triple(value)}`!);
}

greetTripled('Hiya', 5);

// Hiya, 15