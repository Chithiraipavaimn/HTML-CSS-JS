document.getElementById('b1').addEventListener("click",padding);
function padding()
{
	var str=document.getElementById("t1").value;
	var pos=p1.value;
	var str1;
	if(pos=="Left")
	{
		str1=String(str).padStart(str.length+4,"*");
	}
	else if(pos=="Right")
	{
		str1=String(str).padEnd(str.length+4,"*");
	}
	t3.value=str1;
}