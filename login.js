var login = prompt("Enter the login:", "");
if (login == null) window.location = "wrong.html";
else if (login.toLowerCase() == "spitarm")
window.location = "password.html";
else if (login.toLowerCase() == "alex")
window.location = "alexpass.html"
else window.location = "wrong.html";