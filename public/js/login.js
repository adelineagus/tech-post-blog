const loginForm = async(event)=>{
    event.preventDefault();
    //grab user input on email
    const email= document.querySelector('#email_login').value.trim();
    //grab user input on password
    const password= document.querySelector('#password_login').value.trim();

    if(email && password){
        const response= await fetch('/api/users/login',{
            method: 'POST',
            body:JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
        });

        //if respponse is ok, redirect page to dashboard
        if(response.ok){
            document.location.replace('/dashboard');
        } else{
            alert(response.statusText);
        }
    }
};

document.querySelector('#login_form').addEventListener('submit', loginForm);
