/**
  * Returns the sum of two numbers.
  *
  * @param x - The first input number
  * @param y - The second input number
  * @returns The sum of `x` and `y`
  *
  */
function getSum(x: number, y: number): number {
    return x + y;
}


/**
* Prints the provided string parameters in the order:
* first, second, second, first, second, first, first
* 
* @param fruit1 - The first string input
* @param fruit2 - The second string input
* @returns No return value
*
*/
function makeFruitSaladTwo(fruit1: string, fruit2: string): void {
    let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
    console.log(salad);
}

/**
* Loops the input value number of times logging a 
* string in the format: I'm [status]
*
* @param status - A string input 
* Default value: 'not ready'
* @param repeat - A number value. 
* Default value: 1
* @returns No return value
*
*/
function proclaimThree(status = 'not ready...', repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
        console.log(`I'm ${status}`);
    }
}