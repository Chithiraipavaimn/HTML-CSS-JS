document.getElementById('submit').addEventListener("click",length);
function length()
{
	var x=document.getElementById("t1").value;
	var y=s1.value;
	var z=s2.value;
	if(y=="Kilometer" && z=="Centimeter")
	{
		t2.value=x*100000
	}
	else if(y=="Kilometer" && z=="Meter")
	{
		t2.value=x*1000;
	}
	else if(y=="Kilometer" && z=="Mile")
	{
		t2.value=x/1.609;
	}
	else if(y=="Centimeter" && z=="Kilometer")
	{
		t2.value=x/100000;
	}
	else if(y=="Centimeter" && z=="Meter")
	{
		t2.value=x/100;
	}
	else if(y=="Centimeter" && z=="Mile")
	{
		t2.value=x/160934;
	}
	else if(y=="Meter" && z=="Kilometer")
	{
		t2.value=x/1000;
	}
	else if(y=="Meter" && z=="Centimeter")
	{
		t2.value=x*100;
	}
	else if(y=="Meter" && z=="Mile")
	{
		t2.value=x/1609;
	}
	else if(y=="Mile" && z=="Kilometer")
	{
		t2.value=x*1.609;
	}
	else if(y=="Mile" && z=="Centimeter")
	{
		t2.value=x*160934;
	}
	else if(y=="Mile" && z=="Meter")
	{
		t2.value=x*1609;
	}
	else
	{
		t2.value="InValid Choice";
	}
}
