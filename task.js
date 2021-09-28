//import node mudule FS to read and write file.
let fs = require('fs');

//red file from same path and stor in variable
let dataText = fs.readFileSync('data.txt', 'utf8')

//convert string into Array
let arr = dataText.split(",");

//this function take an Array and sort the given array into ASC  order list
// not changing the origenal array
function writeReadBubbleToFile(array) {
    const newArray = array.slice();
    for (let i = 0; i < newArray.length - 1; i++) {
        for (let j = 0; j < newArray.length - 1; j++) {
            if (newArray[j] > newArray[j + 1]) {
                const temp = newArray[j];
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = temp;
            }
        }

    }
    return newArray;
}
//this functon from nide mudule to write new text file with the result of ASC order for the given Function(writeReadBubbleToFile(arr))
fs.writeFileSync('output.txt', writeReadBubbleToFile(arr).toString());
//printing the ASC order for givrn array
console.log(writeReadBubbleToFile(arr))
// print oreginal array
console.log(arr);



//.................

// this section to log the array value in ASC and then in DESC order 


let numbers = [5, 8, 0, 1, 9, 11, 15, 16];

// print oreginal Array
console.log("Original numbers list: ", numbers)

// function take the array as params and cheke for the ASC or DESC order 
//loop throw each number and compare to another numbers and SWIPE the number as ASC or DESC.
//we first chake with if statment for the ASC order list in the array.
//another chake with else if statment for the DESC order list in the array.
//Big O ->  O(n^2).
function theBubbleSort(array, sort) {
    const newArray = array.slice();
    for (let i = 0; i < newArray.length - 1; i++) {
        for (let j = 0; j < newArray.length - 1; j++) {
            //chaking for the order list DESC or ASC.
            if (sort == "ASC") {
                if (newArray[j] > newArray[j + 1]) {
                    const temp = newArray[j];
                    //swipe the small numbers to the buger one , in each loop.
                    newArray[j] = newArray[j + 1];
                    newArray[j + 1] = temp;
                }

            } else if (sort == "DES") {
                if (newArray[j] < newArray[j + 1]) {
                    const temp = newArray[j];
                    newArray[j] = newArray[j + 1];
                    newArray[j + 1] = temp;
                }

            }
        }

    }
    return newArray;
}

//we gave this argument to teall the function in what order should retern the order.
//here is ASC param for ASC.
//print the list after sorting
console.log("numbers list After sorting: ", theBubbleSort(numbers, 'ASC'))


//we gave this argument to teal the function in what order should retern the order be charge.
//here is ASC param for DESC.
//print the list after DESC sorting

console.log("numbers list After Desc sorting: ", theBubbleSort(numbers, 'DES'))