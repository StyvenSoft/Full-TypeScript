"use strict";
var userAdmin = "Steveen Echeverri";
var logget;
console.log('Sending data...');
console.log(userAdmin);
function sendAnalytics(data) {
    console.log(data);
    logget = true;
}
;
sendAnalytics('The data');
