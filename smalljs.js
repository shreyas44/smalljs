const int = val => parseInt(val);
const float = val => parseFloat(val);
const str = val => toString(val);
const len = val => val.length
const getIndex = (item, index) => item.search(index);
const lower = val => val.toLowerCase();
const upper = val => val.toUpperCase();
const strip = val => val.trim();
const round = (val, digits = 0) => val.toFixed(digits)
const isArray = val => val instanceof Array
const isNum = val => typeof val == 'number'
const isStr = val => typeof val == 'string'
const remUndefined = val => val.filter((value, index, array) => value != "undefined")
const pop = (val, index) => val.splice(index, 1)
const sorted = (val, reverse = false) => !reverse ? val.sort((a, b) => a - b) : val.sort((a, b) => b - a)
const max = val => Math.max(...val)
const min = val => Math.min(...val)
const sum = val => val.reduce((total, value) => total + value, 0)
const mean = val => sum(val) / len(val)




//create your own sort function where you can provide a key
