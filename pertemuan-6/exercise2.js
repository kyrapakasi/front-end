//ubah atau modifikasi exercise 1
//menggunakan

//1. IIFE
// const bmiFunction = (function() {
//     return function(berat, tinggi) {
//         const bmi = berat / (tinggi * tinggi);
//         return bmi;
//     };
// })();

// const bmiValue = bmiFunction(70, 1.75); 
// console.log('Calculated BMI:', bmiValue);

//2. Callback Function
function calculateBMI(berat, tinggi, callback) {
    const bmi = weight / (tinggi * tinggi);
    callback(bmi);
}

calculateBMI(70, 1.75, function(bmiValue) {
    console.log('Calculated BMI:', bmiValue);
});