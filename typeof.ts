let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Stev';

if (typeof userInput === 'string') {
    userName = userInput;
}

function generateErr(message: string, code: number) {
    throw { message: message, errorCode: code };
}

generateErr('An error ocurred!', 500);