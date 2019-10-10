// emailjs service //
function sendMail(contactForm) { 
emailjs.send('gmail', 'mattdrapweb', {
		"from_name": contactForm.name.value,
		"from_email": contactForm.email.value,
		"project_request": contactForm.message.value
	})
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}    