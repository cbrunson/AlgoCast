// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function parseString(str) {
    let out = {};

    for(let char of str.replace(/[^\w]/g,'').toLowerCase()) {
        out[char] = out[char] + 1 || 1;
    }

    return out;
}

function anagrams(stringA, stringB) {
    const parsedOne = parseString(stringA);
    const parsedTwo = parseString(stringA);

    if(Object.keys(parsedOne).length !== Object.keys(parsedTwo).length) {
        return false;
    }
    
    for(let char in parsedOne) {
        if (parsedOne[char] !== parsedTwo[char]) {
            return false;
        }
    }

    return true;
}

module.exports = anagrams;