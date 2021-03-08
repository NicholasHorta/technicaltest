let arr1 = [1, 2, 3, 4, 5, 9, 8, 7]
let arr2 = [2, 3, 4, 5, '12', 'five', 'seven', 8, 9, 's']

// function takes two parameter: ARRAY, ARRAY
const mergeAndRemoveDuplicates = (arrayArgOne, arrayArgTwo) => {
    // Within the Set method, we pass in both arrays as parameters using the spread method resulting in a combined array of the two parameters
    // Set methods result is then spread into an array
    let newArray = [...new Set([...arrayArgOne, ...arrayArgTwo])];
    // Result is a new array with no duplicates
    return newArray
}


// ADDITIONAL - If for some reason the arrays contained TYPEOF string

// Function could take the resulting array as a parameter and check if the String can be converted to Number type or the result is NAN
const stringIssuesHandler = (arrayParam) => {
    // Create an empty array, which will be populated conditionally
    let resultsArray = [];
    // Loop through the array parameter passed in
    for (let i = 0; i <= arrayParam.length; i++) {
        //  If a String item cannot be implicitly converted to Number and results as NAN, skip item and continue the loop
        if (isNaN(arrayParam[i] / 1)) {
            continue
        }
        else {
            // If successful, implicitly convert to Number utilizing a mathematical process
            resultsArray.push(arrayParam[i] / 1)
        }
    }
    return resultsArray
}


stringIssuesHandler(mergeAndRemoveDuplicates(arr1, arr2))

