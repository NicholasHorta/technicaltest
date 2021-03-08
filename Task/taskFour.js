const str = `lorem ipsum dolor sit amet consectetur lorem ipsum et mihi quoniam et adipiscing elit. sed quoniam et advesperascit et mihi ad villam revertendum est nunc quidem hactenus ex rebus enim timiditas non ex vocabulis nascitur. nummus in croesi divitiis obscuratur pars est tamen divitiarum. nam quibus rebus efficiuntur voluptates eae non sunt in potestate sapientis. hoc mihi cum tuo fratre convenit. qui ita affectus beatum esse numquam probabis duo reges constructio interrete. de hominibus dici non necesse est. eam si varietatem diceres intellegerem ut etiam non dicente te intellego parvi enim primo ortu sic iacent tamquam omnino sine animo sint. ea possunt paria non esse. quamquam tu hanc copiosiorem etiam soles dicere. de quibus cupio scire. `

// function takes one parameter: STRING
const returnLengthOfFiveLargestWords = (strParam) => {
    // Split the string into an array to perform array methods on each item within the string and store it in a new variable
    let splitStringIntoArray = strParam.split(' ');

    // Using the resulting array, we sort the arrays strings using each items length on which result is less and store it in a new variable as an array of numbers
    let stringLengthArray = splitStringIntoArray.map(str => {
        return str.length;
    })
    // Using the array of string lengths, we return the array of numbers in ascending order
    let acsendingStringLengthArray = stringLengthArray.sort((a, b) => {
        return a - b;
    });
    // returned array of sorted text from less to greater is then spliced into a new array, 5 places ahead of the 5th largest number
    return acsendingStringLengthArray.splice(-5, 5);
}

returnLengthOfFiveLargestWords(text)