	//Validtion Code For Inputs

    var email = document.forms['form']['email'];
    var email1 = document.forms['form']['email1'];
    var password = document.forms['form']['password'];
    var cpassword = document.forms['form']['cpassword'];
    
    var email_error = document.getElementById('email_error');
    var email_error1 = document.getElementById('email_error1');
    var pass_error = document.getElementById('pass_error');
    var cpass_error = document.getElementById('cpass_error');
    
    email.addEventListener('textInput', email_Verify);
    email1.addEventListener('textInput', email_Verify1);
    password.addEventListener('textInput', pass_Verify);
    cpassword.addEventListener('textInput', cpass_Verify);
    
    function validated(){
        if (email.value.length <= 9) {
            email.style.border = "1px solid red";
            email_error.style.display = "block";
            email.focus();
            return false;
        }
        if (email1.value.length <= 9) {
            email1.style.border = "1px solid red";
            email_error1.style.display = "block";
            email1.focus();
            return false;
        }
        if (password.value != cpassword.value ) {
            cpassword.style.border = "1px solid red";
            cpass_error.style.display = "block";
            cpassword.focus();
            return false;
        }
    
    }
    function email_Verify(){
        if (email.value.length >= 6) {
            email.style.border = "1px solid silver";
            email_error.style.display = "none";
            return true;
        }
    }
    function email_Verify1(){
        if (email1.value.length >= 6) {
            email1.style.border = "1px solid silver";
            email_error1.style.display = "none";
            return true;
        }
    }
    function pass_Verify(){
        if (password.value.length >= 6) {
            password.style.border = "1px solid silver";
            pass_error.style.display = "none";
            return true;
        }
    }
    function cpass_Verify(){
        if (cpassword.value.length >= 6) {
            cpassword.style.border = "1px solid silver";
            cpass_error.style.display = "none";
            return true;
        }
    }
    
    