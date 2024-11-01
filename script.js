document.getElementById("send").addEventListener("click", sendmail);

function sendmail(event) {
    
   
    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };
    emailjs.send("service_b1o6tjr","template_52icps8",params)
        .then(function(res) {
            alert("Success! " + res.status);
        })
        .catch(function(error) {
            alert("Failed to send. Error: " + error);
        });
}

console.log("hello");