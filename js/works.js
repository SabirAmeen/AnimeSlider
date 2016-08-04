function myFunction() {
    var img1=document.getElementById("i1");
var img2=document.getElementById("i2");
var img3=document.getElementById("i3");
var img4=document.getElementById("i4");
var con=document.getElementById("js");
var url = "https://api.myjson.com/bins/2xzgv";
var Httpreq = new XMLHttpRequest(); // a new request
Httpreq.open("GET",url,false);
Httpreq.send();
var myArr = JSON.parse(Httpreq.responseText);
     var len=myArr.length;
    img1.src=myArr.link[0].url;
        img2.src=myArr.link[1].url;
        img3.src=myArr.link[2].url;
        var output = ""; // initialize it outside the loop
var i=3
while(i<len)
{
    output += '<li><img src= "'+myArr.link[i]+'" alt ="'+this.name+'"></li>';

}
$('#im').append(output);
            
   			
}	
