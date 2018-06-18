var SUPER_USER = {
	username: "admin",
	password: "admin"
}

function loginButtonClicked() {
	var user = document.getElementById('username');
	var password = document.getElementById('password');

	if (user.value === SUPER_USER.username && password.value === SUPER_USER.password) {
		//relative referencing
		window.location = "xox-page.html";
	} else {
	  window.alert("Incorrect username or password");
	}
	
}

