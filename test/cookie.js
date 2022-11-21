var expect = require('chai').expect;
var cookie = require('../');

describe('Cookie', function() {
  it('sets, gets and removes string', function() {
    var value = 'bar';
    var key = 'foo';
    cookie.set(key, value);
    expect(cookie.get(key)).to.equal(value);

    cookie.remove(key);
    expect(cookie.get(key)).to.be.null;
  });
});
