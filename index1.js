/*var firebaseConfig = {
    apiKey: "AIzaSyAwM9iFaeDVtxMIo8yukv5KeNdFlX1qviU",
    authDomain: "food-details-b64d4.firebaseapp.com",
    projectId: "food-details-b64d4",
    storageBucket: "food-details-b64d4.appspot.com",
    messagingSenderId: "439365195900",
    appId: "1:439365195900:web:1d79eb35c1769bb1ff11f9",
    measurementId: "G-G8PL8X4E6V"
  };*/
  var firebaseConfig = {
    apiKey: "AIzaSyAUm4b3FR7W5-D1-CCorUarsG80RRu8kN8",
    authDomain: "fooddonation1-9e1bc.firebaseapp.com",
    databaseURL: "https://fooddonation1-9e1bc-default-rtdb.firebaseio.com",
    projectId: "fooddonation1-9e1bc",
    storageBucket: "fooddonation1-9e1bc.appspot.com",
    messagingSenderId: "86553733793",
    appId: "1:86553733793:web:ea8b65fb274bd1bb6ddee0",
    measurementId: "G-L218GG326Z"
};
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



  var con=firebase.database().ref('details');

  document.getElementById('AddDetails').addEventListener('submit',e=>{

	e.preventDefault();

	var userInfo=con.push();
	userInfo.set({
		name:getId("name"),
		phone:getId("phone"),
		foodType:getId("foodType"),
		dishName:getId("dishName"),
		Quantity:getId("Quantity"),
		CookedDate:getId("CookedDate"),
		Location:getId("Location")
	});
	alert("sent");
	console.log("sent");
	document.getElementById("AddDetails").reset();
  });
  function getId(id){
	  return document.getElementById(id).value;
  }