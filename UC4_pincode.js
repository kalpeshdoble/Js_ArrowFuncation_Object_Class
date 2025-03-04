function isValidPinCode(pin) {
    const pinCodePattern = /^[1-9][0-9]{2}\s?[0-9]{3}$/; 
    return pinCodePattern.test(pin);
}

// Example Test Cases:
console.log(isValidPinCode("400088"));   
console.log(isValidPinCode("400 088")); 
console.log(isValidPinCode("040088"));  
console.log(isValidPinCode("4008A8"));   
console.log(isValidPinCode("A400088"));  
console.log(isValidPinCode("400088B")); 
console.log(isValidPinCode("400088#"));  
console.log(isValidPinCode("400  088")); 
console.log(isValidPinCode("40088"));    
console.log(isValidPinCode("4000887")); 
console.log(isValidPinCode("400 0887")); 
