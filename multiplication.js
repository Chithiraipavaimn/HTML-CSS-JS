document.getElementById('submit').addEventListener("click",multiplication);
function multiplication()
{
	var table_no=document.getElementById("t1").value;
	var table_range=document.getElementById("t2").value;
	for(i=1;i<=table_range;i++)
	{
		var j=i*table_no;
		document.write(i+"*"+table_no+"="+j+"<br>");
	}	
}