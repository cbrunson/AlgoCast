// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let str = "";

    //console.log(n)

    for(let i = 0; i < n; i++) {
        for(let x = 0; x < n; x++) {
            x <= i ? str += '#': str += ' ';
        }

        console.log(str);
        str = '';
    }

}

//steps(5);

module.exports = steps;
