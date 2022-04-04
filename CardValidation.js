document.getElementById("submit").addEventListener("click",validateCard);
function validateCard()
 {
 	let regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
 	if(regexp.test(t1.value))
 	{
 		t2.value="Valid";
 	}
 	else
 	{
 		alert("Please enter valid card number......");
 		t2.value="Not Valid";
 	}		
 }