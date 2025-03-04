function isValidEmail(email) {
    const emailPattern = /^abc@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Example Test Cases:
console.log(isValidEmail("abc@bridgelabz.co.in")); 
console.log(isValidEmail("abc@xyz.com"));          
console.log(isValidEmail("xyz@bridgelabz.co.in")); 
console.log(isValidEmail("abc.xyz@bridgelabz.in"));
console.log(isValidEmail("abc@bridgelabz"));       
console.log(isValidEmail("abc@.co.in"));           
console.log(isValidEmail("abc@bridgelabz.c"));    
console.log(isValidEmail("abc@bridgelabz..in"));   
console.log(isValidEmail("abc@bridgelabz.com1"));  
console.log(isValidEmail("abc@bridgelabz-.co.in"));
console.log(isValidEmail("abc@-bridgelabz.co.in"));
console.log(isValidEmail("abc@bridgelabz.co.i"));  