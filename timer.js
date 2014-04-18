<body onload="startTime()">
    <div id="timer"></div>
<script>
function startTime()
{
    var ajd = new Date();
    var heures = ajd.getHours();
    var minutes = ajd.getMinutes();
    var secondes = ajd.getSeconds();
    minutes=checkTime(minutes);
    secondes=checkTime(secondes);
    document.getElementById('timer').innerHTML=heures+":"+minutes+":"+secondes;
    t=setTimeout(function(){startTime()},500);
}
function checkTime(i)
{
if (i < 10)
  {
  i="0" + i;
  }
  return i;
}
</script>
</body>
