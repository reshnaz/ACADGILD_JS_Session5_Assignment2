
//This function is called on click of "Find Result" button form index.html

function findResult(str) {
	var vowels = ["a","e","i","o","u"]; //This array stores all the list of vowels.

	//Check if your input resides in the above array. 
	if (str.length>1||isNaN(Number(str))==0){
		document.getElementById('result').innerHTML="The given string is neither vowel nor consonant"; 
		//Display result in html p tag with id "result"
	}
	else if (vowels.indexOf(str.toLowerCase()) >= 0) {
		document.getElementById('result').innerHTML="The given string is a vowel"; //Display result in html p tag with id "result"
	}
	else{
		document.getElementById('result').innerHTML="The given string is a consonant"; //Display result in html p tag with id "result"
	}
}
