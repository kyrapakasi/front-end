import { yearUntilRetirement } from './ageCalculator.js';
import { addNumber, calculateArea } from './mathOperations.js';
import { makeAjaxRequest } from './ajaxRequest.js';

yearUntilRetirement({ year: 1987, firstName: 'John' });

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

const area21 = calculateArea({ radius: 21 });
const area7 = calculateArea({ radius: 7 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

makeAjaxRequest('www.google.com');