function isValidEmail(email) {
    const emailPattern = /^abc@bridgelabz\.co\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Example Test Cases:
console.log(isValidEmail("abc@bridgelabz.co.in")); 
console.log(isValidEmail("abc@bridgelabz.co.us"));
console.log(isValidEmail("abc@bridgelabz.co.uk")); 
console.log(isValidEmail("abc@bridgelabz.co"));  
console.log(isValidEmail("abc@bridgelabz.com"));   
console.log(isValidEmail("abc@bridgelabz.in"));    
console.log(isValidEmail("abc@xyz.co.in"));        
