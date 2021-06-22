//A java script program used to support a form validation.

function validat_form(){
	/* 
	Description: This is a function which is used to Validate a user inputs 
	variables:  first_name,last_name, facilitator
	returns:boolean true or false 
	*/

	var first_name = documnet.getElementById("firstName").value;
	var last_name = documnet.getElementById("lastName").value;
	var facilitator = documnet.getElementById("facilitator").value;
	var letters = /^[A-Za-z]+$/;


	if((first_name.length <= 2 && first_name.match(letters)) || (last_name.length <=2 && last_name.match(letters))){
		return true;
	}else{
		return false;
	}

	if(facilitator == Laura || facilitator== Fazil || Harsh){
		return true;

	}else{
		return false;
	}
	// to Vlidate numbers 
	
	var invalidChars = /[^0-9]/gi
  	if(invalidChars.test(ob.value)) {
            ob.value = ob.value.replace(invalidChars,"");
      }
	var lblError = document.getElementById("lblError");

	//Get the date from the TextBox.
	var dateString = document.getElementById("txtDate").value;
	var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

	//Check whether valid dd/MM/yyyy Date Format.
	if (regex.test(dateString)) {
	    var parts = dateString.split("/");
	    var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
	    var dtCurrent = new Date();
	    lblError.innerHTML = "Eligibility 18 years ONLY."
	    if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
	        return false;
	    }

	    if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

	        //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
	        if (dtCurrent.getMonth() < dtDOB.getMonth()) {
	            return false;
	        }
	        if (dtCurrent.getMonth() == dtDOB.getMonth()) {
	            //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
	            if (dtCurrent.getDate() < dtDOB.getDate()) {
	                return false;
	            }
	        }
	    }
	    lblError.innerHTML = "";
	    return true;
	} else {
	    lblError.innerHTML = "Enter date in dd/MM/yyyy format ONLY."
	    return false;
		}

}

validat_form();

