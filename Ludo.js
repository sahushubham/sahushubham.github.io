var p=document.getElementsByTagName("p");
var cr1,cr2,cb1,cb2,check1,check2,check3,check4,count=0;
cr1=cr2=-1;
cb1=cb2=-3;
check1=check2=check3=check4=0;
var l=document.getElementsByClassName("locker");
var button= document.getElementsByClassName("player");
var roll=document.getElementsByClassName("playerb");
var sb="TURN: Player B";
var sr="TURN: Player A";
var add=0;
var temp;
function locker_red(add){
    
}
roll[0].onclick =function move_red()
{
    if(add===0)
    {
        add=Math.round(Math.random()*5)+1;
        button[1].innerHTML=add;
        temp=add;
    }
    if(count%2==0)
    {
        button[0].setAttribute("style","background: rgb(255, 63, 63)");
        button[0].innerHTML=sr;
        if(cr1===-1||cr2===-1)
        {
            if(cr1==-1&&add==6)
            {
                cr1=0;
                p[cr1].setAttribute("style","background:red");
                add=0;
            }
            if(cr2==-1&&add==6)
            {
                cr2=0;
                p[cr2].setAttribute("style","background:red");
                add=0;
            }
            if(cb1===cr1||cb1===cr2)
            {
                cb1=-3;
                check3=0;
            }
            if(cb2===cr1||cb2===cr2)
            {
                cb2=-3;
                check4=0;
            }
            if(cr1===-1&&cr2===-1)
            {
                add=0;
                count++;
            }

        }
        p[cr1].onclick=function()
        {
            if(cr1!==cr2)
            p[cr1].setAttribute("style","background:white");
            if((cr1+add)<=28)
            {
                cr1+=add;
                p[cr1].setAttribute("style","background:red");
                if(add!=6)
                count++;
                add=0;
            }                
            if(cb1===cr1)
            {
                cb1=-3;
                check3=0;
                if(temp!=6)
                count--;
            }
            if(cb2===cr1)
            {
                cb2=-3;
                check4=0;
                if(cb1!==cb2&&temp!=6)
                count--;
            }
            if(cr1==-1&&cr2==-1)
            add=0;       
        };
        p[cr2].onclick=function()
        { 
            if(cr1!==cr2)
            p[cr2].setAttribute("style","background:white");
            if((cr2+add)<=28)
            {
                cr2+=add;
                p[cr2].setAttribute("style","background:red");
                if(add!=6)
                count++;
                add=0;
            }
            if(cb1===cr2)
            {
                cb1=-3;
                check3=0;
                if(temp!=6)
                count--;
            }
            if(cb2===cr2)
            {
                cb2=-3;
                check4=0;
                if(temp!=6&&cb1!=cb2)
                count--;
            }
        };
        if((cr1+add)>28&&(cr2+add)>28)
        {
            add=0;
            count++;
        }
    }
    else
    {
        button[0].innerHTML=sb;
        button[0].setAttribute("style","background: rgb(63, 63, 255)");
        if(cb1===-3||cb2===-3)
        {
            if(cb1===-3&&add===6)
            {
                cb1=14;
                p[cb1].setAttribute("style","background:blue");
                add=0;
            }
            if(cb2===-3&&add===6)
            {
                cb2=14;
                p[cb2].setAttribute("style","background:skyblue");
                add=0;
            }
            if(cb1===cr1||cb2===cr1)
            cr1=-1;
            if(cr2===cb1||cr2===cb2)
            cr2=-1;
            if(cb1===-3&&cb2===-3)
            {
                add=0;
                count++;
            }
        }
        p[cb1].onclick=function()
        {
            if(cb1!==cb2)
            p[cb1].setAttribute("style","background:white");
            cb1+=add;
            if(cb1>27)
            {
                cb1-=28;
                check3=1;
            }
            p[cb1].setAttribute("style","background:blue");
            add=0;
            if(temp!=6)
            count++;
            if(cr1===cb1)
            {
                cr1=-1;
                if(temp!=6)
                count--;
            }
            if(cr2===cb1)
            {
                cr2=-1;
                if(temp!=6&&cr1!=cr2)
                count--;  
            }          
        };
        p[cb2].onclick=function()
        { 
            if(cb1!==cb2)
            p[cb2].setAttribute("style","background:white");
            cb2+=add;
            if(cb2>27)
            {
                cb2-=28;
                check4=1;
            }
            p[cb2].setAttribute("style","background:skyblue");
            add=0;
            if(temp!=6)
            count++;
            if(cr1===cb2)
            {
                cr1=-1;
                if(temp!=6)
                count--;
            };
            if(cr2===cb2)
            {
                cr2=-1;
                if(temp!=6&&cr1!=cr2)
                count--;  
            } 
        };
        if(count3===1&&count4===1)
        {
            if((cb1+add)>14&&(cb2+add)>14)
            {
                add=0;
                count++;
            }
        }
    }
    if(cr1===28&&cr2===28)
    button[0].innerHTML="A Wins";
    if(cb1===14&&count3===1)
    cb1=-2;
    if(cb2===14&&count4===1)
    cb2=-2;
    if(cb1===-2&&cb2===-2)
    button[0].innerHTML="B wins";
};
