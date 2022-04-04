document.getElementById("submit").addEventListener("click",getmonth);
function getmonth()
 {
 	var monthlist=["January","February","March","April","May","June","July","August","September","October","November","December"];
	var dt=new Date(date.value);
	t1.value=monthlist[dt.getMonth()];
	var days= new Date(dt.getFullYear(), dt.getMonth()+1, 0);
	t2.value=days.getDate();

}