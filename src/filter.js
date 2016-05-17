export default async (seq, iterator) => {
  const filtered = [];

  const pending = seq.map(i => {
    return {item: i, promise: iterator(i)}
  });

  for (let i in pending) {
    const p = pending[i];
    const r = await (p.promise);
    if (r) {
      filtered.push(p.item);
    }
  }

  return filtered;
}
