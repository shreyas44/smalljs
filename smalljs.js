export const int = val => parseInt(val); // converts input to integer
export const float = val => parseFloat(val); // converts input to float
export const str = val => toString(val); // converts input to string
export const len = val => val.length // gets length of input, string or array
export const getIndex = (item, index) => item.search(index); // get index of item in array
export const lower = val => val.toLowerCase(); // converts string to lower case
export const upper = val => val.toUpperCase(); // converts string to upper case
export const strip = val => val.trim(); // strips the string of spaces in the beginning and end of the string
export const round = (val, digits = 0) => val.toFixed(digits) // round the input
export const isArray = val => val instanceof Array // checks if value is an array
export const isNum = val => typeof val == 'number' // checks if value is a number
export const isStr = val => typeof val == 'string' // checks if value is a string
export const remUndefined = val => val.filter((value, index, array) => value != "undefined") // removes all undefined objects from an array
export const pop = (val, index) => val.splice(index, 1) // remove item from array
export const sorted = (val, reverse = false) => !reverse ? val.sort((a, b) => a - b) : val.sort((a, b) => b - a) // sort items in array
export const max = val => Math.max(...val) // get max value in an array
export const min = val => Math.min(...val) // get min value in an array
export const sum = val => val.reduce((total, value) => total + value, 0) //get sum of all values in an array
export const mean = val => sum(val) / len(val) // get mean value of items in the array
