function signup()
{
    var password=document.getElementById("password").value;
    var confirmpassword=document.getElementById("confirmpassword").value;
    if(password==confirmpassword)
    {
        alert("sign up successful");
        return false;
    }
    else
    {
        alert("Password doesnt match");
    }
}