import map from '../lib/map';

describe('map', () => {
  describe('an empty array', () => {
    it('should return an empty array', async () => {
      const r = await map([], async () => {});
      r.length.should.equal(0);
    });
  });

  describe('non async map', () => {
    it('should return the mapped value', async () => {
      const r = await map([1], i => i);
      r.should.eql([1]);
    });
  });

  describe('an async map', () => {
    it('should return the mapped value', async () => {
      const r = await map([1], async i => i);
      r.should.eql([1]);
    });
  });
});
