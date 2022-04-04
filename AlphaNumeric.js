document.getElementById("submit").addEventListener("click",alphaNumeric);
function alphaNumeric()
 {
	let pattern=/^[A-Za-z0-9]+$/;
	if(pattern.test(t1.value))
	{
		t2.value="Its alphaNumeric";
	}
	else
	{
		t2.value="Not alphaNumeric";
	}
}
