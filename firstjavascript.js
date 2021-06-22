//A java script program used to welcome user and provide a matimatical support.

alert("Welcome to Yohan's biography page")
var name = window.prompt("What is ur name - Please provide your first name");
alert("Welcome " + name + "!");

//var provide_number1 = window.prompt("Please provide number1");
//var provide_number2 = window.prompt("Please provide number 2");



function add_two_numbers2(provide_number1, provide_number2){
	/* 
	Description: This is a function which is used to calculate two numbers 
	variables:  int number 1, int number 2
	returns: an alert 
	*/
	
	do {

		var total = parseInt(provide_number1) + parseInt(provide_number2);
		alert ("The sum of your two number is " +  total);
		if (total > 10){
			alert("That is a big number");
		}else if(total <=10){
			alert("That is a small number");
		}
		var continue_add_flag = window.prompt("Would you like to continue adding two nubers? yes or no");
		//============= A code to used to Normalize data - by changing all of the user inputs to lower characters ===//
		var continue_add_flag = continue_add_flag.toLowerCase();

		if (continue_add_flag == "yes"){
			var provide_number1 = window.prompt("Please provide number1");
			var provide_number2 = window.prompt("Please provide number 2");

		}else{
			alert("Thank you for using the program!!")
		}
		
	}while(continue_add_flag == "yes");

	return alert;

}

add_two_numbers2(provide_number1, provide_number2);
