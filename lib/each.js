import ensure from 'easy-ensure';

export default async (seq, iterator) => {
  ensure(seq, 'seq is required');
  ensure(iterator, 'iterator is required');

  for (let i = 0; i < seq.length; i++) {
    const item = seq[i];
    const r = iterator(item, i);
    if (r && r.then) {
      await r;
    }
  }
}
