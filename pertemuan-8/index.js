// // javaScript object & conditional
// // deklarasi Object
// // object literal
// let john = {
//     firstName: "john",
//     age: 30,
//     isMarried: true,
//     grade: [80,90,100],
//     SayGreetings: function () {
//         console.log("Hello my name is" + this.furstName);
//     },
//     address: {
//         street: "Jl.Arnold Mononutu",
//         city: "Minahasa utara"
//     }
// };
// console.log(john);

// //Mengakses properti dalam object
// //1.Dot notation
// console.log(john.firstName);
// console.log(john.age);
// john.age = 31;
// console.log(john);
// john.job = "Teacher"; //Tambah properti baru
// console.log(john);

// //2.Bracket notation
// console.log(john["isMarried"]);
// john["nationality"]= "Indonesia";
// console.log(john);

// //Object Method
// john.SayGreetings();

// //Object inside object
// console.log(john.address.city);

//Delete property dalam object
// delete john.grade;
// console.log(john);

//JavaScript Conditional
//1. if - else
//jika suhu hari ini lebih dari atau sama dengan 37,
//tampilkan suhu hari ini panas
//juka tidak tampilkan suhu hari ini dingin

// let temp = 30;
// if (temp >=37){
//     console.log("suhu hari ini panas");
// } else {
//     console.log(("suhu hari ini dingin"));
// }
// //2. if - else if - else
// //jika nilai 100 - 80 tampilkan grade A
// //jika nilai 70-79 tampilkan grade B
// //jika nilai 50-69 tampilkan grade C
// //jika nilai dibawah 50 tampilkan grade D

// let grade = 100
// if(grade >= 80 && grade <= 100){
//     console.log("Grade A");
// }else if (grade >= 70 && grade < 80) {
//     console.log("Grade B");
// }else if (grade >= 50 && grade < 70) {
//     console.log("Grade C");
// }else {
//     console.log("Grade D");
// }

// //Switch - case
// // jika angka 1 tampilkan januari
// // jika angka 2 tampilkan februari
// // jika angka 3 tampilkan maret

// let number = 2
// switch (number){
//     case1:
//         console.log("january");
//         break;
//     case2:
//         console.log("februari");
//         break;
// }