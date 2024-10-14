let kay = {
    firstName: 'Kyra',
    weight: 45,
    height: 1.40,
  
    calculateBMI: function() {
      this.BMI = this.weight / (this.height * this.height);
      return this.getBMICategory();
    },
  
    getBMICategory: function() {
      if (this.BMI < 16.0) {
        return 'Severely Underweight';
      } else if (this.BMI >= 16.0 && this.BMI < 18.5) {
        return 'Underweight';
      } else if (this.BMI >= 18.5 && this.BMI < 25.0) {
        return 'Normal';
      } else if (this.BMI >= 25.0 && this.BMI < 30.0) {
        return 'Overweight';
      } else if (this.BMI >= 30.0 && this.BMI < 35.0) {
        return 'Moderately Obese';
      } else if (this.BMI >= 35.0 && this.BMI < 40.0) {
        return 'Severely Obese';
      } else {
        return 'Morbidly Obese';
      }
    }
  };
  
  const hasil = kay.calculateBMI();
  console.log(`Nama: ${kay.firstName}`);
  console.log(`BMI: ${kay.BMI.toFixed(2)}`);
  console.log(`Kategori: ${hasil}`);