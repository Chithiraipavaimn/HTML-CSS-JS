document.getElementById('submit').addEventListener("click",remove);
function remove()
{
	var str=document.getElementById("t1").value;
	t2.value=str.replace(/ /g, "");
}