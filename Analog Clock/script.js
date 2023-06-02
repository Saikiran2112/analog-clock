setInterval(()=>
{
  var d=new Date();
  var h=d.getHours();
  var m=d.getMinutes();
  var s=d.getSeconds();
  var time=h + ":" + m + ":" + s;
  document.getElementById("time").innerHTML=time;

},1000)

















setInterval(()=>
{
  var a=new Date();
  var hour=a.getHours();
  var minute=a.getMinutes();
  var second=a.getSeconds();
  var hrotation=30*(hour)+minute/2;
  var mrotation=6*(minute);
  var srotation=6*(second);
  hours.style.transform=`rotate(${hrotation}deg)`
  minutes.style.transform=`rotate(${mrotation}deg)`
  seconds.style.transform=`rotate(${srotation}deg)`


},1000)
