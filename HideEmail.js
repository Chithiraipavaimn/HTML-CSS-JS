document.getElementById('b1').addEventListener("click",HideEmail);
function HideEmail()
{
   var x = document.getElementById('t1').value;
   var split1= x.split("@");
   var part1 = split1[0];
   var part2 = split1[1];
   part1 = part1.substring(0,3);
   t2.value = (part1+"...@"+part2);
}