document.getElementById("submit").addEventListener("click",checkBlank);
function checkBlank()
 {
	if(t1.value=="")
	{
		t2.value="Blank";
	}
	else
	{
		t2.value="Not Blank";
	}
}