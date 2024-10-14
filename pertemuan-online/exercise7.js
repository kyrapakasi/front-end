// //Destructuring 

// //array dan object
// //array
// const colors = ['merah', 'hijau', 'biru'];
// const [color1, color2, color3] = colors;

// console.log(color1); // merah
// console.log(color2); // hijau
// console.log(color3); // biru

// //object
// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
//   };
//   const {name, age, city} = person;
  
//   console.log(name); // John
//   console.log(age);  // 30
//   console.log(city); // New York

// //dengan mengambil sebagian item
// //array
// const numbers = [1, 2, 3, 4, 5];
// const [first, , third] = numbers;

// console.log(first);  // 1
// console.log(third);  // 3

// //object
// const car = {
//     brand: 'Toyota',
//     model: 'Corolla',
//     year: 2022,
//     color: 'silver'
//   };
//   const {brand, model} = car;
  
//   console.log(brand);  // Toyota
//   console.log(model);  // Corolla

// //dengan menggunakan default value
// //array
// const fruits = ['apel', 'pisang'];
// const [fruit1, fruit2, fruit3 = 'jeruk'] = fruits;

// console.log(fruit1);  // apel
// console.log(fruit2);  // pisang
// console.log(fruit3);  // jeruk

// //object
// const settings = {
//     theme: 'dark',
//     fontSize: 16
//   };
//   const {theme, fontSize, language = 'en'} = settings;
  
//   console.log(theme);     // dark
//   console.log(fontSize);  // 16
//   console.log(language);  // en

// //dengan menggunakan rest operator
// //array
// const numbers = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = numbers;

// console.log(first);   // 1
// console.log(second);  // 2
// console.log(rest);    // [3, 4, 5]

// //object
// const person = {
//     name: 'Alice',
//     age: 28,
//     city: 'London',
//     country: 'UK',
//     occupation: 'Engineer'
//   };
//   const {name, age, ...otherInfo} = person;
  
//   console.log(name);       // Alice
//   console.log(age);        // 28
// //   console.log(otherInfo);  // {city: 'London', country: 'UK', occupation: 'Engineer'}?


//ubah exercise6 menjadi destructuring
const calculateAge = birthYear => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });

const addNumber = (...numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0);
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

const phi = 3.14;

const calculateArea = ({ radius, power = 2 }) => {
  return phi * Math.pow(radius, power);
};

const area21 = calculateArea({ radius: 21 });
const area7 = calculateArea({ radius: 7 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

const makeAjaxRequest = (url, method = 'GET') => {
  console.log(url, method);
};

makeAjaxRequest('www.google.com');