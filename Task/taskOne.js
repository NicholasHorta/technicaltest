const arr = [null, 1, undefined, 0, false, [], {}, NaN, 'Kevin']

// function takes a single parameter: ARRAY
const removeFalsyValuesResult = (arrayArg) => {

    // Use the FILTER method on the ARRAY to return items conditionally. 
    return arrayArg.filter(item => {
        // IF item !== false (item IS a truthy value) ruturn that item
        if (item !== false) return item
    });
    // Returned as an Array
}
removeFalsyValuesResult(arr)