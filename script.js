const passwordField = document.getElementById("password");
const lengthInput = document.getElementById("length");

const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+?><:{}[]";

function generatePassword() {

    const length = parseInt(lengthInput.value);

    // Validate length
    if (isNaN(length)) {
        alert("Please enter the password length.");
        passwordField.value = "";
        return;
    }

    if (length < 4 || length > 30) {
        alert("Password length must be between 4 and 30.");
        passwordField.value = "";
        return;
    }

    let characters = lowerChars;

    if (uppercase.checked) {
        characters += upperChars;
    }

    if (numbers.checked) {
        characters += numberChars;
    }

    if (symbols.checked) {
        characters += symbolChars;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordField.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {

    if (passwordField.value === "") {
        alert("Please generate a password first.");
        return;
    }

    navigator.clipboard.writeText(passwordField.value);

    alert("Password copied successfully!");
});