const username = document.getElementById('name');
const emailItem = document.getElementById('email');
const pass = document.getElementById('pass');
const cnfpass = document.getElementById('cnfpass');


document.getElementById('regFormId').addEventListener('submit', (e)=>{
    e.preventDefault();

    let password = pass.value;
    let cnfpassword = cnfpass.value;
    let uname = username.value;
    let email = emailItem.value;

    if(password === cnfpassword){
        localStorage.setItem("uname", uname);
        localStorage.setItem("emailAddress", email);
        localStorage.setItem("password", password);
        alert('password confirm');
    }else{
        alert('wrong password');
    }

})
