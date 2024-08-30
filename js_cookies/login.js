document.getElementById('formId').addEventListener('submit', function(e){
    e.preventDefault();
    let correctUname = "surajKedar";
    let correctPass = "Kedar@321";

    let uname = document.getElementById('username').value;
    let pass = document.getElementById('pass').value;
    
    if(uname === correctUname && pass === correctPass){
        document.cookie = "loggedIn = ture; path =/"
        window.location.href = "cookies.html"
        alert('user login successfully')
    }else{
        alert('wrong...')
    }
    
})