var firebaseConfig = {
    apiKey: "AIzaSyACvY1C5IN0WaWWq0rP51VkW1kwZSuWIaQ",
    authDomain: "food-donation-6b1f5.firebaseapp.com",
    projectId: "food-donation-6b1f5",
    storageBucket: "food-donation-6b1f5.appspot.com",
    messagingSenderId: "78044804111",
    appId: "1:78044804111:web:46924b59507a4ff5f99f7a",
    measurementId: "G-VRB8TKYVEL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  $("#btn-signIn").click(function(){

       var email=$("#email").val();
	   var password=$("#password").val();
	   
	   if(email!="" && password!=""){
           var result=firebase.auth().signInWithEmailAndPassword(email,password);

		   result.catch(function(error){
                var errorCode=error.code;
				var errorMessage=error.Message;

				console.log(errorCode);
				console.log(errorMessage);
				window.alert("Please enter correct password.!");
		   });
	   }
	   else{
		   window.alert("Please fill out the form!");
	   }

  });

  $("#btn-signup").click(function(){

	var email=$("#email").val();
	var password=$("#password").val();
	var cpassword=$("#cpassword").val();
	
	if(email!="" && password!="" && cpassword!=""){
		var result=firebase.auth().createUserWithEmailAndPassword(email,password);

		result.catch(function(error){
			 var errorCode=error.code;
			 var errorMessage=error.Message;

			 console.log(errorCode);
			 console.log(errorMessage);
			 window.alert("Registered Successfully!");
		});
	}
	else{
		window.alert("Please fill out the form!");
	}

});


$("#btn-resetPassword").click(function(){
	var auth=firebase.auth();
	var email=$("#email").val();

	if(email!=""){
        auth.sendPasswordResetEmail(email).then(function()
		{
			window.alert("Email has sent to your emai!");
		})
		.catch(function() 
		{
			 var errorCode=error.code;
			 var errorMessage=error.Message;

			 console.log(errorCode);
			 console.log(errorMessage);
			 window.alert("Please enter correct email address!!");
		});
	}
	else{
		window.error("Please fill out the form!");
	}
});