const user = document.getElementById('username')
const number = document.getElementById('phone')
const id = document.getElementById('mail')
const pass1 = document.getElementById('password')
const pass2 = document.getElementById('password2')
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var strongRegex = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
function register()
{
    if(user.value !== "" && number.value !== "" && id.value !== "" && pass1.value !== "" && pass2.value !== "")
    {
        if(user.value.length > 5 && number.value.length == 10 && pass1.value.length >7)
        {
            if(pass1.value == pass2.value)
            {
                alert("sign up successful");
            }
            else
            {
                document.getElementById("password2").style.backgroundColor="rgba(255, 0, 0, 0.253)";
                document.getElementById("password2").innerHTML="Password Doesn't Match";
                alert("Password Doesn't Match");
            }
        }
        else if(user.value.length<5)
        {
            alert("Use valid Username greater than 5 characters");
        }
        else if(number.value.length !== 10)
        {
            alert("Enter valid mobile number");
        }
        else
        {
            if(pass1.value.length >7)
            {
                alert("Enter valid email id");
            }
            else
            {
                alert("Enter Strong password");
            }
        }
        
        
    }
    
    else
    {
        alert("Please Fill The Details.....!!");
    }
}