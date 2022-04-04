document.getElementById('button').addEventListener("click",AsciiHexa);
function AsciiHexa()
{
  var x = document.getElementById('t1').value;
  var code = [];
  for(i=0;i<x.length;i++)
  {
     var y= Number(x.charCodeAt(i)).toString(16);
     code.push(y);
  }
  t2.value = code.join(' ');
}