export const addNumber = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
  };
  
  const phi = 3.14;
  
  export const calculateArea = ({ radius, power = 2 }) => {
    return phi * Math.pow(radius, power);
  };