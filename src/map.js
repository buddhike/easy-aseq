export default async (seq, iterator) => {
  const pending = seq.map(iterator);
  const results = [];
  for (let p in pending) {
    results.push(await pending[p]);
  }
  return results;
}
