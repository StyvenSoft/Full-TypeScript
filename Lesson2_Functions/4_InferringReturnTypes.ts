function createGreeting(name: string) {
    return `Hello, ${name}!`;
}

const myGreeting = createGreeting('Aisle Nevertell');


function ouncesToCups(ounces: number) {
    return `${ounces / 16} cups`;
}

const liquidAmount = ouncesToCups(3);

function getRandomNumber() {
    return Math.random();
}

let myVar = getRandomNumber();