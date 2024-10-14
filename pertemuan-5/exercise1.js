
function calculateBMI(berat, tinggi) {
    return berat / (tinggi * tinggi);
}

const bmiValue = calculateBMI(70, 1.75); 
console.log('Calculated BMI:', bmiValue);