window.onload = function(){

    const fullName = document.getElementsByClassName("fullName")[0];
    const password = document.getElementsByClassName("pass")[0];
    const phone = document.getElementsByClassName("phone")[0];

    const regex_fullName = new RegExp(/([a-zA-z]+\s+.*)/);
    const regex_password = new RegExp(/^(?=.*\d)[A-Za-z\d]{6,}$/);
    const regex_pele = new RegExp(/^\d{9,10}$/);
    //var flag = false;

    // validate full name input
    fullName.addEventListener('blur', (e) => {
        const error_msg = document.getElementsByClassName("msg")[0];
        const value = e.target.value;

        if (!regex_fullName.test(value)) {
            error_msg.textContent = 'only charachters, at least one whitespace';
            //flag = false;
        } else {
            error_msg.textContent = '';
            //flag = true;
        }
    });

    // validate password input
    password.addEventListener('blur', (e) => {
        const error_msg = document.getElementsByClassName("msg")[1];
        const value = e.target.value;

        if (!regex_password.test(value)) {
            error_msg.textContent = 'minimum 7 characters, at least one number';
            //flag = false;
        } else {
            error_msg.textContent = '';
            //flag = true;
        }    
    });

    // validate phone input
    phone.addEventListener('blur', (e) => {
        const error_msg = document.getElementsByClassName("msg")[2];
        const value = e.target.value;
    
        if (!regex_pele.test(value)) {
            error_msg.textContent = 'only 9 or 10 numbers';
            //flag = false;
        } else {
            error_msg.textContent = '';
            //flag = true;
        }
    });

    //check validation (fullName, password, phone)inputs is valid, and remove disabled button to submit. 
    // if(flag){
    //     document.getElementsByClassName("send")[0].classList.remove("disabled");
    // }

}