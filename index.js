class LoginValidator {
    validate(email, password) {
        switch (true) {
            case !email.includes('@'):
                throw new Error('Invalid email format.');
            case password.length < 6:
                throw new Error('Password must be at least 6 characters long.');
            default:
                return 'Login successful!';
        }
    }
}

class ResultDisplay {
    static displayMessage(message, isSuccess) {
        const resultElement = document.getElementById('result');
        resultElement.textContent = message;
        resultElement.className = isSuccess ? 'success' : 'error';
    }
}

    let emailInput = document.getElementById('emailInput');
    let passwordValue = document.getElementById('passwordValue');

document.getElementById('formId').addEventListener('submit', function (event) {
    event.preventDefault();  

    try {
        const validator = new LoginValidator();
        const validationResult = validator.validate(emailInput.value, passwordValue.value);

        ResultDisplay.displayMessage(validationResult, true);  
    } catch (error) {
        ResultDisplay.displayMessage(`Error: ${error.message}`, false);  
    }
    
    emailInput.value = '';
    passwordValue.value = '';    
});
