var center=document.getElementById("center");
var left=document.getElementById("left");
var middle=document.getElementById("middle");
var right=document.getElementById("right");
var attempt=document.getElementById("attempt");
var start=document.getElementById("start");
var l_num=document.getElementById("l_num");
var m_num=document.getElementById("m_num");
var r_num=document.getElementById("r_num");
var correct_attempt=document.getElementById("correct_attempt");
var wrong_attempt=document.getElementById("wrong_attempt");
var c=0,w=0;
start.onclick=function()
{
	left.setAttribute("style","border:0px solid #5cb85c");
	middle.setAttribute("style","border:0px solid #5cb85c");
	right.setAttribute("style","border:0px solid #5cb85c");
	if(c+w>=10)
	{
		if(c<=3)
			center.innerHTML="Bad Luck";
		else if(c<=6)
			center.innerHTML="Good Luck";
		else
			center.innerHTML="Extremely Lucky";
		start.innerHTML="Refresh Browser"
	}
	else
	{
		left.setAttribute("class", "flip-card-again-again");
		middle.setAttribute("class", "flip-card-again-again");
		right.setAttribute("class", "flip-card-again-again");
		var i;
		
		var random=0,rand3=0; 
		var l=0,m=0,r=0,l_check=0,m_check=0,r_check=0;
		random=Math.round(Math.random()*99);
		rand3=Math.round(Math.random()*2);
		switch(rand3)
		{
			case 0:
			l=random;
			m=Math.round(Math.random()*99);
			r=Math.round(Math.random()*99);
			break;
			case 1:
			l=Math.round(Math.random()*99);
			m=random;
			r=Math.round(Math.random()*99);
			break;
			default:
			l=Math.round(Math.random()*99);
			m=Math.round(Math.random()*99);
			r=random;
		}
		center.innerHTML=random;
		center.setAttribute("style","font-size: 40px; font-weight:700")
		l_num.innerHTML=l;
		m_num.innerHTML=m;
		r_num.innerHTML=r;
		function myFunction(v)
		{
			v.setAttribute("class", "flip-card-again");
			// v.setAttribute("style","position: relative");
			// v.setAttribute("style","width: 100%");
			// v.setAttribute("style","height: 100%");
			// v.setAttribute("style","text-align: center");
			// v.setAttribute("style","transition: transform 0.8s");
			// v.setAttribute("style","transform-style: preserve-3d");
			// v.setAttribute("style","transform: rotateY(180deg)");
		}
		
		left.onclick=function()
		{
			myFunction(left);
			if(m_check===0&&r_check===0)
			{
				if(l===random)
				{
					c++;
					left.setAttribute("style","border:3px solid #5cb85c");
				}
				else
				{
					w++;
					left.setAttribute("style","border:3px solid #d9534f");
				}
				l_check=1;
				correct_attempt.innerHTML="CORRECT ATTEMPT:" +c;
				wrong_attempt.innerHTML="WRONG ATTEMPT:" +w;
			}
		}
		

		
		middle.onclick=function()
		{
			myFunction(middle); 
			if(l_check===0&&r_check===0)
			{
				if(m===random)
				{
					c++;
					middle.setAttribute("style","border:3px solid #5cb85c");
				}
				else
				{
					w++;
					middle.setAttribute("style","border:3px solid #d9534f");
				}
				m_check=1;
				correct_attempt.innerHTML="CORRECT ATTEMPT:" +c;
				wrong_attempt.innerHTML="WRONG ATTEMPT:" +w;
			}
		}

		
		right.onclick=function()
		{
			myFunction(right);
			if(m_check===0&&l_check===0)
			{
				if(r===random)
				{
					c++;
					right.setAttribute("style","border:3px solid #5cb85c");
				}
				else
				{
					w++;
					right.setAttribute("style","border:3px solid #d9534f");
				}
				r_check=1;
				correct_attempt.innerHTML="CORRECT ATTEMPT:" +c;
				wrong_attempt.innerHTML="WRONG ATTEMPT:" +w;
			}
		}
		start.innerHTML="ATTEMPT AGAIN"
		var total= c+w+1;
		attempt.innerHTML="ATTEMPTS: "+ total + "/10";
	}

}
	
