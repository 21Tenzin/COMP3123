//console.log("Hello");
var prompt=require("prompt-sync")({sigint:true});

//var msg=prompt("input your name : ");
//console.log("Hi : ", msg);
//---------------------------------------------------------

/*var x=4+5;
console.log(x);
var a = 5;
var b = 6;
console.log(b-a);
console.log(a*b);
console.log(a/b);
console.log(Math.pow(a, b));*/

//---------------------------------------------------

/*var m=prompt("input your mark: ");
m=parseInt(m);

// Switch case
switch(m)
{
    case 75:
        console.log("Very good");
        break;
    case 60:
    case 50:
        console.log("Pass");
        break;
    default:
        console.log("invalid");
        break

}*/

/*IF statement
if(m>=0 && m<=100)
{
    if(m>=75)
    {console.log("Very good");}
    else if (m>=50)
    {console.log("Pass");}
    else
    {console.log("fail");}
}else
{console.log("invalid value")}*/

//-------------------------------------------------

/*for (var i=1;i<=5;i++)
{
    console.log(" i: ", i);
}

var j=5;
while (j>=1)
{
    console.log(" j: ",j);
    j--;
}*/

/*var myCars=["BMW", "Mazda", "Ford"];
for(var i=0;i<myCars.length;i++)
{
    if(myCars[i]=="Mazda")
    {break;}
    console.log(myCars[i]);
}*/

//---------------------------------------------------------------
/*function myfunc1()
{console.log("Hello from myfunc1");}

//myfunc1();

function myfunc2()
{return "Hello from myfunc2";}

var v=myfunc2();
console.log(v);

function myfunc3(a,b)
{
    return a+b;
}

var v2 = myfunc3(5,6);
console.log(v2);*/

///-----------------------------------------------------

/*var s1 = "Tenzin";
console.log(s1.length);

for (var i=0;i<s1.length;i++)
    {console.log(s1.charAt(i));}*/

var str = "How are you doing?";
//let part1= str.slice(4, 8);
//console.log(part1);

//let part2 = str.substr(4,8)
//console.log(part2);

/*var strArr=str.split(" ");
console.log(strArr.length);
for (var i=0;i<strArr.length;i++)
{
    console.log(strArr[i]);
}*/


var strUpper =str.toUpperCase();
console.log(strUpper);

var strlower =str.toLowerCase();
console.log(strlower);