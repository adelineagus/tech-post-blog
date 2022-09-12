const signupForm= async(event)=>{
    event.preventDefault();
    
    //grab user input on email
    const email= document.querySelector('#email_signup').value.trim();
    //grab user input on password
    const password= document.querySelector('#password_signup').value.trim();

    if(email && password){
        const response= await fetch('/api/users/',{
            method: 'POST',
            body:JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
        });

        //when response is ok, redirect to dashboard page
        if(response.ok){
            document.location.replace('/dashboard');
        } else{
            alert(response.statusText);
        }
    }
};

document.querySelector('#signup_form').addEventListener('submit', signupForm);