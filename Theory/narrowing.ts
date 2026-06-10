function printId1(id: number | string) {
  console.log(id.toUpperCase());
  // Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'.
}

// Решение данной проблемы заключается в сужении (narrowing) объединения. Например, TS знает, что только для string оператор typeof возвращает 'string':

function printId2(id: number | string) {
  if (typeof id === 'string') {
    // В этой ветке `id` имеет тип 'string'
    console.log(id.toUpperCase());
  } else {
    // А здесь `id` имеет тип 'number'
    console.log(id);
  }
}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Здесь `x` - это 'string[]'
    console.log('Привет, ' + x.join(' и '));
  } else {
    // Здесь `x` - 'string'
    console.log('Добро пожаловать, одинокий странник ' + x);
  }
}

// Array, string имеют общий метод slice()

function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
