function clicked() {

	var user = document.getElementById('username');
	var pass = document.getElementById('password');

	var coruser = "CaspXD";
	var corpass = "monkeys9v";


	if(user.value == coruser) {

		if(pass.value == corpass) {

			window.alert("You are logged in as " + user.value);
			window.open("https://caspadminhvdcvhgdecdevdyhevcghdceghdcgecdgecdectdghyecgcdegdce.ga");

		} else {

			window.alert("Incorrect username or password!");

		}

	} else {

			window.alert("Incorrect username or password!");

	}

}
