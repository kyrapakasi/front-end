//rest parameter & spread operator

//menggunakan tanda yang sama ...

//rest parameter (sisa)
// const func1 = (param1,param2,param3) => {
//     console.log(param1,param2,param3);
// };

// func1 ("A","B","C");

// //DENGAN REST PARAMETER (tipe array)
// const func2 = (...params) => {
//     console.log(params);
// }

// func2("A","B","3");

// const func3 = (param1,param2, ...params) => {
//     console.log(param1,param2);
//     console.log
// }

// //mini exercise
// //ubah dengan menggunakan rest parameter

// const penjumlahan = (...params)=>{
//     let hasil = 0;
//     arr.forEach((item)=>(hasil+=item));
//     return hasil;
// };

// console.log(penjumlahan(1,2,3,4,5));

//2. Spread operator
let numbers = [1,2,3,4,5];
console.log(numbers);
console.log(...numbers);

///saat duplikasi array
let numbers2 =[...numbers];
console.log(numbers2);