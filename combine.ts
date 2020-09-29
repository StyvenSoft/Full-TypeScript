type Combinable = number | string

function combine(
    input1: Combinable, 
    input2: Combinable,
    resultConvert: string
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString;
    } if(resultConvert === 'as-number') {
        return +result; // parsfloat(result)
    } else {
        return result.toString();
    }
    
}

const combineAge = combine(30, 26, 'as-number');
console.log(combineAge);

const combineStringAges = combine('30', '26', 'as-number')
console.log(combineStringAges);


const combineName = combine('Max', 'Lina', 'as-text');
console.log(combineName);

// tsc combine.ts

