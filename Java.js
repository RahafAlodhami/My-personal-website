function validate(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  var text;
  
  if(name.length < 4){
    text = "Please Enter a valid Name";
    error_message.innerHTML = text;
    return false;
  }

  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter a valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 10){
    text = "Please Enter More Than 10 Characters in the Message box";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}
