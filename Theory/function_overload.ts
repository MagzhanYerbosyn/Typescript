// Перегрузка функции (function overload)

// В TS такую функцию можно реализовать с помощью сигнатур перегрузки (overload signatures). Для этого перед телом функции указывается несколько ее сигнатур:

function makeDate(timestamp: number): Date;
function makeDate(d: number, m: number, y: number): Date;
function makeDate(dOrTimestamp: number, m?: number, y?: number): Date {
  if (m !== undefined && y !== undefined) {
    return new Date(y, m, dOrTimestamp);
  } else {
    return new Date(dOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);
// No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
// Нет перегрузки, принимающей 2 аргумента, но существуют перегрузки, ожидающие получения 1 или 3 аргумента
