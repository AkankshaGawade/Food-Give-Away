<script>
 
  var email="someone@example.com";
  var password="password";
  
  //Create User with Email and Password
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
  
</script>