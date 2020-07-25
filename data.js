var contactRef = firebase.database().ref().child("contactform"); 

document.getElementById("contactf").addEventListener("submit",submitform);

function submitform(e){
	e.preventDefault();

	var Name= getInputVal("name");
	var Gender= getRadioVal("gender");
	var Phoneno= getInputVal("phonenumber");
	var Email= getInputVal("email");
	var Message= getInputVal("message");

function getRadioVal(id){
    var x;
    if(gender[0].checked)
    {
         x= gender[0].value;
        return x;
    }
    else if(gender[1].checked)
    {
        x = gender[1].value;
        return x;
    }

}

function getInputVal(id){
	 return document.getElementById(id).value;
}
	saveForm(Name,Gender,Phoneno,Email,Message);

	document.getElementById("contactf").reset();


function saveForm(Name,Gender,Phoneno,Email,Message){

	var newContactRef = contactRef.push();
	newContactRef.set({

		Name : Name,
		Gender : Gender,
		phonenumber : Phoneno,
		Email : Email,
		Message : Message
	});
}
}