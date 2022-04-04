document.getElementById("submit").addEventListener("click",addMinutes);
function addMinutes()
{
	var dt=new Date(dt1.value);
	var min=t1.value;
	var minutesAdded=dt.getTime()+ (min*60000);
	var dateConvert = new Date(minutesAdded)
	t2.value=dateConvert;

}