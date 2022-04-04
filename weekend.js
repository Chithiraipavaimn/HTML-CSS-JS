document.getElementById("submit").addEventListener("click",weekEndCheck);
function weekEndCheck()
 {
	var dt=new Date(date.value);
	dayList=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	
	if(dt.getDay()==6 || dt.getDay()==0)
	{
		t1.value="WEEKEND";
	}
	else
	{
		t1.value="Not a WEEKEND";
	}
	t2.value=dayList[dt.getDay()-1];
 }