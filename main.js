var RegRef=firebase.database().ref().child("Users");

document.getElementById('Register').addEventListener('submit',submitForm);

function submitForm(e){
	
	e.preventDefault();
	
	var first_name=getInputVal('first_name');
	var last_name=getInputVal('last_name');
	var email=getInputVal('email');
	var phone=getInputVal('phone');
	var uname=getInputVal('uname');
	var pass=getInputVal('pass');
	var cpass=getInputVal('cpass');
	
	saveForm(first_name,last_name,email,phone,uname,pass,cpass);
	document.getElementById('Register').reset();
	
}

function getInputVal(id){
	return document.getElementById(id).value;
}

function saveForm(first_name,last_name,email,phone,uname,pass,cpass){
	var NewRef=RegRef.push();
	NewRef.set({
		first_name:first_name,
		last_name:last_name,
		email:email,
		phone:phone,
		uname:uname,
		pass:pass,
		cpass:cpass
	});
}