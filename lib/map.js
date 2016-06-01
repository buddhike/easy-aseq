export default async (seq, iterator) => {
  const pending = seq.map(iterator);
  const results = [];
  for (let p in pending) {
    const t = pending[p];
    results.push(t && t.then ? await t : t);
  }
  return results;
}
