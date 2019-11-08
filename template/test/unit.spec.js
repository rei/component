import { expect } from 'chai';

describe('Example unit test', () => {
  function double(x) {
    return x * 2;
  }

  it('should double the input', () => {
    expect(double(2)).to.equal(4);
  });

});
