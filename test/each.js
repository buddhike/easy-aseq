import sinon from 'sinon';
import each from '../lib/each';
import Q from 'q';

describe('each function', () => {
  let iterator = sinon.spy();

  beforeEach(() => {
    iterator = sinon.spy();
  })

  describe('empty seq', () => {
    it('should not invoke the iterator', async() => {
      await each([], iterator);

      iterator
      .neverCalledWith(sinon.match.any, sinon.match.any)
      .should
      .be
      .true;
    });
  });

  describe('seq', () => {
    it('should invoke the iterator', async () => {
      await each([1], iterator);

      iterator
      .calledWith(1, sinon.match.any)
      .should
      .be
      .true;
    });

    it('should pass the index to interator', async () => {
      await each([1], iterator);

      iterator
      .calledWith(1, 0)
      .should
      .be
      .true;
    });
  });

  describe('async iterator', () => {
    let deferred;

    beforeEach(() => {
      iterator = sinon.stub();
      deferred = Q.defer();
      iterator.returns(deferred.promise);
    });

    it('should await for it', async () => {
      const r = each([], iterator);
      console.log(r); // eslint-disable-line
      deferred.resolve();
      await r;
    });
  });
});
