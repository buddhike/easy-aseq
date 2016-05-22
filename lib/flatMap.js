import map from './map';
export default async (seq, iterator) => {
  const results = await map(seq, iterator);
  return Array.prototype.concat.apply([], results);
}
