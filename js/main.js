// array
var iceCream = [
    'Cookie Dough', ' Neapolitan', ' Chocolate Chip',
    ' Vanilla Bean'
];

// presidents

var presidents = [

        {firstName: 'Donald', lastName: 'Trump', termLength: 'TBD', party: 'Republican', yearsOfPresidency: '2017-'},
        {firstName: 'Barack', lastName: 'Obama', termLength: '2', party: 'Democratic', yearsOfPresidency: '2009-2017'},
        {firstName: 'George', lastName: 'W. Bush', termLength: '2', party: 'Republican', yearsOfPresidency: '2001-2009'},
        {firstName: 'Bill', lastName: 'Clinton', termLength: '2', party: 'Democratic', yearsOfPresidency: '1993-2001'},
        {firstName: 'George', lastName: 'H.W. Bush', termLength: '1', party: 'Republican', yearsOfPresidency: '1989-1993'}

];


console.log(presidents[2].firstName + ' ' + presidents[2].lastName);

// functions
function howdy() {
    return 'Brianne Barta says hello!';
}

howdy();
console.log(howdy());

var numba = function (string) {

    if (string.length < 7) {
        console.log('What a short little word!');
    } else if (string.length > 7) {
        console.log("I'm sorry but that's too many to count!");
    } else {
        console.log('7, what a perfect choice');
    }
};

console.log(numba('7'));
console.log(numba('seventy'));
console.log(numba('university'));
