const colorsArray1 = ['yellow', 'red', 'blue', 'orange'];
const colorsArray2 = ['blue', 'green', 'white', 'yellow'];

// concatenate both arrays and sort them alphabetically
const colorsArray = colorsArray1.concat(colorsArray2).sort();

// new array empty array to push only unique values
let noRepeat = [];
for (let i = 0; i < colorsArray.length; i++) {
    
    // if current color is different than next index on array, push it to noRepeat array
    if (colorsArray[i] !== colorsArray[i + 1]){
        noRepeat.push(colorsArray[i])
    }
}

console.log(noRepeat)