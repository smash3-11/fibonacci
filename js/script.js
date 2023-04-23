let num = +prompt("Введите число Фибоначчи:");
let fib = [0, 1];

for (let i = 2; i < num; i++) {
    fib[i] = fib[i-1] + fib[i-2];
}

console.log(fib);


// число Фибоначчи если похож на num

// let num = +prompt("Введите число Фибоначчи:");
// let fib = [0, 1];

// for (let i = 2; i < num; i++) {
//     fib[i] = fib[i-1] + fib[i-2];

//     if (fib[i] >= num) {
//         break; 
//       }
// }
// console.log(fib);