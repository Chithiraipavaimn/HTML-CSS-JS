document.getElementById('b1').addEventListener("click",countString);
function countString()
{
	var result = document.getElementById('t1').value;
	t2.value = result.split(" ").length;
}