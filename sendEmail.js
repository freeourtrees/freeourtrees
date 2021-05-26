function sendEmail() {
    const email = document.getElementById('email').value
    var templateParams = {
        reciever_email: email,
    };
    
    emailjs.send('service_8svcg4a', 'template_3khf6gn', templateParams)
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        }); 
}
