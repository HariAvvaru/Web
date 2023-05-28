function sendMail(){
    var tempParams = {
        from_name: document.getElementById("nam").value,
        email_id: document.getElementById("mal").value,
        subject_sender: document.getElementById("sub").value,
        message: document.getElementById("comment").value,
    };
    emailjs.send('{{service_id}}', '{{template_id}}', tempParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}