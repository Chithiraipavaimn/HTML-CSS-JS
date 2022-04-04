document.getElementById('button').addEventListener("click",wordFind)
function wordFind()
{
	var result;
	var x = document.getElementById('t1').value;
	var y=document.getElementById('t2').value;
    var result=x.includes(y);
    t3.value=result;
}