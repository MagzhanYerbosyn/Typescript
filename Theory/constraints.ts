// Ограничения (constraints)

function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// Типом `longerArr` является `number[]`
const longerArr = longest([1, 2], [1, 2, 3]);

// Типом `longerStr` является `string`
const longerStr = longest('alice', 'bob');

// Ошибка! У чисел нет свойства `length`
const notOK = longest(10, 100);

// Argument of type 'number' is not assignable to parameter of type '{ length: number }'.
// Аргумент типа 'number' не может быть присвоен параметру типа '{ length: number; }'

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

const arr1 = combine([1, 2, 3], ['привет']);
// Type 'string' is not assignable to type 'number'.

const arr2 = combine<string | number>([1, 2, 3], ['привет']);
