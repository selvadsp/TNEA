const form = document.getElementById('form');

const maxFileSize = 2 * 1024 * 1024;


// Show error function
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// Show success function
function showSuccess(input) {
    formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Email Validation function

function checkEmail(input){
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is Required');
    }
}

// Check Photo size validation
function validateField(input){
    if (input.type === 'file' && input.files.length > 0 && input.files[0].size > maxFileSize){
        showError(input, 'Files must be less than 2MB');
    }
}
//check required function
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is Required`);
        } else {
            showSuccess(input);
        }
    });
}

// get fieldName function
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([fullname, email, fathername, mothername, dob, register, phone, schoolname, 
        address, hscmark, sslcmark, religion, community, caste, photo, hscsheet, sslcsheet, 
        signature, 
    ]);
    checkEmail(email);
   
   
});