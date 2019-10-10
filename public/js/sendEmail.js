function sendMail(contactForm) {
	emailjs.send("gmail", "mattdrapweb", {
		"from_name": contactForm.name.value,
		"from_email": contactForm.email.value,
		"project_request": contactForm.message.value
	})
	.then(
		funtcion(response) {
			console.log("SUCCESS", response);
		},
		funtcion(error) {
			console.log("FAILED", error);
		});
}
