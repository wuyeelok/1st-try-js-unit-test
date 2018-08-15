const expect = require('chai').expect;

// expect(true).to.be.true;

const titleCase = str => str;

expect(titleCase('the great mouse detective')).to.be.a('string');