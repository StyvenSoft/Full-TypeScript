function greet(name?: string) {
    console.log(`Hello, ${name || 'Anonymous'}!`);
}

greet(); // Prints: Hello, Anonymous!

function proclaim(status?: string) {
    console.log(`I'm ${status || 'not ready...'}`);
}

proclaim();
proclaim('ready?');
proclaim('ready!');

// I'm not ready...
// I'm ready?
// I'm ready!