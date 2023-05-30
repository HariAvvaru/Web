function sendEmail(){
    var params={
        name: document.getElementById("nam").value,
        email_id: document.getElementById("mal").value,
        subject: document.getElementById("sub").value,
        message: document.getElementById("comment").value
    };

    const serviceID = "service_cwb1mpn";
    const templateID = "template_rzkf42p";

    emailjs.send(serviceID,templateID,params)
    .then(
        res=>{
            document.getElementById("nam").value="";
            document.getElementById("mal").value="";
            document.getElementById("sub").value="";
            document.getElementById("comment").value="";
            alert("Message sent successfully")
            }
        )
    .catch((err)=>console.log(err));
}
