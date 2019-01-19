var ajax;

if (window.XMLHttpRequest) {
	//for IE, Chrome, Safari and Firefox
	ajax = new XMLHttpRequest();
}
else {
	//for IE 6 and IE 5
	ajax = new ActiveXObject("Microsoft.XMLHTTP");
}

ajax.onreadystatechange = function() {
	
	if (ajax.readyState == 4 && ajax.status == 200) {
		document.getElementById("myFiv").innerHTML = ajax.responseText;
	}
}
ajax.open("GET","mypage.html", true);
ajax.send();

//als function

function newAjax() {
var ajax;
if (window.XMLHttpRequest) {
	ajax = new XMLHttpRequest();	
}
else {
	ajax = new ActiveXObject("Microsoft.XMLHTTP");
}
return ajax;
}

<!DOCTYPE html>
<head>
<script>
function newAjax() {
var ajax;
if (window.XMLHttpRequest) {
	ajax = new XMLHttpRequest();	
}
else {
	ajax = new ActiveXObject("Microsoft.XMLHTTP");
}
return ajax;
}

function LoadMe(){
	var ajaxHandler = newAjax();
	ajaxHandler.onreadystatechange=function(){
		if(ajaxHandler.readyState==4 && ajaxHandler.status == 200){
			document.getElementById("loadMe").innerHTML = ajaxHandler.responseText;
		}
	}
	ajaxHandler.open("GET", "mypage.html", true);
	ajaxHandler.send();
}
</script>
</head>
<body>
<div id=''loadMe'>&nbsp;</div> //empty space
<button onclick=''LoadMe();'>Ajax my page</button>
</body>
</html>