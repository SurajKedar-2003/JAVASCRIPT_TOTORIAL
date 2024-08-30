document.getElementById('loginForm').addEventListener('submit', (e)=>{
    e.preventDefault();

    let email = document.getElementById('email');
    let pass = document.getElementById('pass');

    let correctEmail = localStorage.getItem('emailAddress');
    let correctPass = localStorage.getItem('password');

    if(correctEmail === email.value && correctPass === pass.value){
        window.location.href = 'success.html'
        alert('login successful');
    }else{
        alert('invalid credintials')
    }
})