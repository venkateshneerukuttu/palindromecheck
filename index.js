function checkPalindrome() {
    const inputNumbers = document.getElementById("inputNumbers").value;
    
    if (isPalindrome(inputNumbers)) {
        document.getElementById("output").textContent = "It's a Palindrome!";
    } else {
        document.getElementById("output").textContent = "It's not a Palindrome.";
    }
}

function isPalindrome(input) {
    const cleanedInput = input.replace(/[^0-9]/g, '');
    const reversedInput = cleanedInput.split('').reverse().join('');
    
    return cleanedInput === reversedInput;
}
