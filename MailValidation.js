document.getElementById("submit").addEventListener("click",validateMail);
function validateMail()
 {
	let pattern=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.)[a-zA-Z]{1,3}/;
	if(pattern.test(t1.value))
	{
		t2.value="Valid";
	}
	else
	{
		alert("Please Enter a valid Mail id........");
		t2.value="Not Valid";
	}
}
