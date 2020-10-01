const userAdmin = "Steveen Echeverri";
let logget: boolean;

console.log('Sending data...');

console.log(userAdmin);

function sendAnalytics(data: string) {
    console.log(data);
    logget = true;
};

sendAnalytics('The data');