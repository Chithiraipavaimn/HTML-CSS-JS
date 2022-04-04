document.getElementById("submit").addEventListener("click",days);
function days()
 {
	var dt1=new Date(date1.value);
	var dt2=new Date(date2.value);
	var Difference_In_Time=Math.abs(dt1.getTime()-dt2.getTime());
	var Difference_In_Days=Difference_In_Time/(1000*3600*24);
	t1.value=Difference_In_Days;
}
