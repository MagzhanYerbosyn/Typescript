function firstElement<Type>(arr: Type[]): Type {
  return arr[0];
}

// `s` имеет тип `string`
const s = firstElement(['a', 'b', 'c']);
// `n` имеет тип `number`
const n = firstElement([1, 2, 3]);
