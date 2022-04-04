document.getElementById("submit").addEventListener("click",compareDates);
function compareDates()
{
	var dt1=new Date(date1.value);
	var dt2=new Date(date2.value);
if(dt1<dt2)
{
	t1.value="Greatest "+dt2;
}
else if(dt1>dt2)
{
	t1.value="Greatest "+dt1;
}
else
{
	t1.value="Equal";
}
}