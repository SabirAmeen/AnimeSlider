var a=[document.getElementById("first"),
document.getElementById("second"),
document.getElementById("third"),
document.getElementById("fourth")];
var main=document.getElementById("main");
function prevv()
{	a[0].className=" ";
	a[0].className="first";
	a[1].className=" ";
	a[2].className=" ";
	a[3].className=" ";
	a[0].addEventListener("animationend",function(){a[1].className="first"});
	a[1].addEventListener("animationend",function(){a[2].className="first"});
	a[2].addEventListener("animationend",function(){a[3].className="first"});

}
function nextt()
{	a[3].className=" ";
	a[3].className="front";
	a[0].className=" ";
	a[1].className=" ";
	a[2].className=" ";
	a[3].addEventListener("animationend",function(){a[2].className="front"});
	a[2].addEventListener("animationend",function(){a[1].className="front"});
	a[1].addEventListener("animationend",function(){a[0].className="front"});

}