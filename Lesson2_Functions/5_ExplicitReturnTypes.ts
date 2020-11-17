function createGreetingTwo(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    }

    return "undefined";
};

const createArrowGreeting = (user?: string): string => {
    if (user) {
        return `Welcome, ${user}!`;
    }
 
    return "undefined";
};