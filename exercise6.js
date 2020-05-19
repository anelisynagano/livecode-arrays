const arr1 = ['tree', 'river', 'mountain', 'ocean'];
const arr2 = ['ocean', 'tree', 'sand', 'mountain'];
let count = 0;

// iterate over first array
for (let i = 0; i < arr1.length; i++) {

    // iterate over second array for each value from arr1
    for (let j = 0; j < arr2.length; j++) {

        // if current value from arr1 is equals to current value from arr2, add one to count
        if (arr1[i] === arr2[j]) {
            count++
        }
    }
}

console.log(count);

