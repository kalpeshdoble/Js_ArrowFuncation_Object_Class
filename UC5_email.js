function isValidEmail(email) {
    const emailPattern = /^abc([._+,-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;
    return emailPattern.test(email);
}

// Example Test Cases:
console.log(isValidEmail("abc@bridgelabz.co"));        
console.log(isValidEmail("abc@bridgelabz.co.in"));      
console.log(isValidEmail("abc.xyz@bridgelabz.co"));    
console.log(isValidEmail("abc-xyz@bridgelabz.co.in"));   

console.log(isValidEmail("abc@bridgelabz.co.1n"));     
console.log(isValidEmail("abc@bridgelabz-co.in"));     
