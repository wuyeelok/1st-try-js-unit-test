const expect = require('chai').expect;

// expect(true).to.be.true;

const titleCase = str => {
    const wordsArray = str.split(' ');
    const titleCaseArray = wordsArray.map(word => {
        return word[0].toUpperCase() + word.substring(1);
    });
    const titleCaseString = titleCaseArray.join(' ');
    return titleCaseString;
}

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('t')).to.equal('T');
expect(titleCase('coke')).to.equal('Coke');

expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');