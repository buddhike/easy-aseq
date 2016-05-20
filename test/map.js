import map from '../lib/map';

describe('map', () => {
  describe('an empty array', () => {
    it('should return an empty array', async () => {
      const r = await map([], async () => {});
      r.length.should.equal(0);
    });
  });
});
