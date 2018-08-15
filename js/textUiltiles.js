const expect = require('chai').expect;

// expect(true).to.be.true;

const titleCase = str => {
    return str.split(' ').reduce((prev, curr) => {
        return (prev + " " + curr[0].toUpperCase() + curr.substring(1)).trim()
    }, "");
}

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('t')).to.equal('T');
expect(titleCase('coke')).to.equal('Coke');

expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');