<head>
<script type="text/javascript" src="E:/google backup/Takeout/YouTube/history/history.json"></script>
<script type="text/javascript" src="javascrip.js"></script>
var arr = JSON.parse(data);
//arr.length
for(var i = 0; i<; i++){
	var vidId = arr[i].contentDetails.videoId;
	var newTab = window.open('https://www.youtube.com/watch?v='+vidId, '_blank');
	setTimeout(function(){
		newTab.close();
	}, 1000);
	
}
<head>
<body>
</body>