function isValidPinCode(pin) {
    const pinCodePattern = /^[1-9][0-9]{5}$/; // Ensures exactly 6 digits, no letters/special characters at start or end
    return pinCodePattern.test(pin);
}

// Example Test Cases:
console.log(isValidPinCode("400088"));  
console.log(isValidPinCode("040088"));
console.log(isValidPinCode("4008A8"));  
console.log(isValidPinCode("A400088")); 
console.log(isValidPinCode("400088B")); 
console.log(isValidPinCode("400088#")); 
console.log(isValidPinCode("4000887")); 
console.log(isValidPinCode("40088"));   
