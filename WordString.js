document.getElementById('button').addEventListener("click",stringWword);
document.getElementById('b1').addEventListener("click",specificChar);
document.getElementById('b2').addEventListener("click",firstUpper);
function stringWword()
{
  var x = document.getElementById('t1').value;
  t2.value = x.trim().split(" ");	
}
function specificChar()
{
	var y = document.getElementById('t1').value;
	if((t3.value)>0)
	{
		t4.value = y.slice(0,t3.value);
	}
}
function firstUpper() 
{
	var x = t1.value.toLowerCase().split(" ");
	var y = x.length;
	for(var i=0;i<y;i++)
	{
      x[i] = x[i].charAt(0).toUpperCase()+x[i].slice(1);
	}
	t5.value = x.join(' ');
}