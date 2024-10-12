const arr = [1, 2, false, "hello", 24, "world", undefined, null, "error", 22];

let countNumbers = 5;

// Используем filter, чтобы оставить только элементы типа number
const numbers = arr.filter(item => typeof item === "number");

// Используем foreach для подсчета количества элементов
numbers.forEach(item => {
  countNumbers++;
});

// Проверяем, больше ли количество элементов 5
if (countNumbers > 5) {
  console.log("гуд");
}
