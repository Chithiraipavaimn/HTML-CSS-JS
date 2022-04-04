document.getElementById("submit").addEventListener("click",insertString);
function insertString()
 {
	var str1=t1.value;
	var str2=t3.value;
	var position=t2.value;
	if(position=='')
	{
		t4.value=str2+" "+str1;
	}
	else
	{
	t4.value=[str1.slice(0, position), str2, str1.slice(position)].join(' ');
	}
}