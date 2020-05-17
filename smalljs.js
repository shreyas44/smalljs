const int = val => parseInt(val); // converts input to integer
const float = val => parseFloat(val); // converts input to float
const str = val => toString(val); // converts input to string
const len = val => val.length // gets length of input, string or array
const getIndex = (item, index) => item.search(index); // get index of item in array
const lower = val => val.toLowerCase(); // converts string to lower case
const upper = val => val.toUpperCase(); // converts string to upper case
const strip = val => val.trim(); // strips the string of spaces in the beginning and end of the string
const round = (val, digits = 0) => val.toFixed(digits) // round the input
const isArray = val => val instanceof Array // checks if value is an array
const isNum = val => typeof val == 'number' // checks if value is a number
const isStr = val => typeof val == 'string' // checks if value is a string
const remUndefined = val => val.filter((value, index, array) => value != "undefined") // removes all undefined objects from an array
const pop = (val, index) => val.splice(index, 1) // remove item from array
const sorted = (val, reverse = false) => !reverse ? val.sort((a, b) => a - b) : val.sort((a, b) => b - a) // sort items in array
const max = val => Math.max(...val) // get max value in an array
const min = val => Math.min(...val) // get min value in an array
const sum = val => val.reduce((total, value) => total + value, 0) //get sum of all values in an array
const mean = val => sum(val) / len(val) // get mean value of items in the array
