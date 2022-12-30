/* login form function*/
var login_username="FName@proj.ca";
var login_password="123";

function setCookie(cookieName,cookieValue) {
    var today = new Date();
    var expire = new Date();
    var nbrDays=1;
    expire.setTime(today.getTime() + 3600000*24*nbrDays);
    document.cookie = cookieName+"="+escape(cookieValue)
                      + ";expires="+expire.toGMTString();
}

function login_form()
{
    var v1, v2;

	v1 = document.getElementById("uname").value;
	v2 = document.getElementById("pass").value;
	console.log({v1, v2})
	if ((v1 == login_username) && (v2 ==  login_password))
	{
		alert('Welcome to the psyΨ website')
		setCookie('login', 'true');
		window.location.href ="indexMenu.html";
	}
	else
	{    
	    alert("Invalid UserName and Password(username is FName@proj.ca and password is 123");
		window.location.href ="index.html";
	
	}
}

/* log out function*/
function logOut()
{
	alert('Thank you for visiting our website!');
	document.getElementById("uname").value="";
  	document.getElementById("pass").value="";
	setCookie('login', 'false')
	window.location.href ="index.html";
	$(document).ready(function(){
		$(".login").show(); //show class login
		$(".logout").hide(); //hide class logout
	 });
}

/* create new account function*/ /* error */

var login_uname="admin ";
var login_phone="123456";
var login_pass="123";
var login_email="FName@proj.ca";

function signup_form()
{
    var v1, v2, v3, v4;

    v1 = document.getElementById("uname").value;
	v2 = document.getElementById("phone").value;
	v3 = document.getElementById("pass").value;
	v4 = document.getElementById("email").value;
	if ((v1 == login_uname) && (v2 ==  login_phone) && (v3 ==  login_pass) && (v4 ==  login_email))
	{
		alert('Thank you for create account!')
		window.location.href ="indexMenu.html";
	}
	else
	{    
	    alert("Invalid UserName and Password(username is admin, phone is 123456, email is FName@proj.ca and password is 123");
		window.location.href ="index.html";
	
	}
}



