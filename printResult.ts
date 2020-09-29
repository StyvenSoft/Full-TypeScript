function added(n1: number, n2: number) {
    return n1 + n2;
}

function printResults(num: number): void {
    console.log('Result: ' + num);
}

function addHandle(n1: number, n2: number, callBack: (num: number) => void) {
    const result = n1 + n2;
    callBack(result);
}

printResults(added(5, 15));

let combineValues: Function;
combineValues = added;

console.log(added(8, 9));

addHandle(10, 20, (result) => {
    console.log(result);
})


