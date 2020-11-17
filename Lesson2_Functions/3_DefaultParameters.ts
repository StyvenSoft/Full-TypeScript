function greetTwo(name = 'Anonymous') {
    console.log(`Hello, ${name}!`);
}


function proclaimTwo(status = 'not ready...', repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
        console.log(`I'm ${status}`);
    }
}

proclaimTwo();
proclaimTwo('ready?');
proclaimTwo('ready!', 3);

// I'm not ready...
// I'm ready?
// I'm ready!
// I'm ready!
// I'm ready!