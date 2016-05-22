import flatMap from '../lib/flatMap';

describe('flat-map', () => {
  describe('iterator returning scalar values', () => {
    it('should return list of scalar values', async () => {
      const r = await flatMap([1], async i => i);
      r.should.eql([1]);
    });
  });

  describe('iterator returning arrays', () => {
    it('should return a combined array of all arrays', async () => {
      const r = await flatMap([1,2], async i => [i * 2, i * 3]);
      r.should.eql([2, 3, 4, 6]);
    });
  })
});
