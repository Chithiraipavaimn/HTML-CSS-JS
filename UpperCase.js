document.getElementById("submit").addEventListener("click",checkUppercase);
function checkUppercase()
 {
 	let regexp = /^[A-Z]/;
 	if(regexp.test(t1.value))
 	{
 		t2.value="Valid";
 	}
 	else
 	{
 		alert("Please enter your First letter in Uppercase......");
 		t2.value="Not Valid";
 	}		
 }