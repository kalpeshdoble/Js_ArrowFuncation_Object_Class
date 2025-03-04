function isValidEmail(email) {
    const emailPattern = /^abc([._+,-][a-zA-Z0-9]+)?@bridgelabz\.co\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Example Test Cases:
console.log(isValidEmail("abc@bridgelabz.co.in"));        // ✅ true (valid without optional part)
console.log(isValidEmail("abc.xyz@bridgelabz.co.in"));    // ✅ true (valid with optional part)
console.log(isValidEmail("abc-xyz@bridgelabz.co.in"));    // ✅ true (valid with optional part)

console.log(isValidEmail("abc.xyz-123@bridgelabz.co.in"));// ✅ true (valid alphanumeric optional part)
console.log(isValidEmail("abc$xyz@bridgelabz.co.in"));    // ❌ false (invalid special character `$`)
console.log(isValidEmail("abc@xyz.co.in"));              // ❌ false (2nd part must be "bridgelabz")

