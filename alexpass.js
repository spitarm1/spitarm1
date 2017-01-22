var pass = prompt("Enter the password:", "");
if (pass == null) window.location = "wrong.html";
else if (pass.toLowerCase() == "pituh")
window.location = "alex.html"
else window.location = "wrong.html";