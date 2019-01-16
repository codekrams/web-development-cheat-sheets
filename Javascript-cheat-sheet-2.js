<!DOCTYPE html>
<html>
  <head>
	<title>Website title</title>
	</head>

<body>

<script>
	document.write("Hello World");
	confirm("Do you want to leave?"); //OK means true, Cancel means false
	prompt("text", "default value");
	var VarName = "Value";
	alert("You are leavin");
	window.location = "http://google.com/;
	window.open("URL", "_blank", "width", "replace-yes-no");
	<a href="javascript: void(0);">Empty Link </a>;
	variable.length; //for strings, counting characters incl. spaces
	variable.toUpperCase();
	variable.toLowerCase();
	switch (variable) {
		case "x":
		code;
		break;
		case "y":
		code;
		break;
	};
	function functionName() 
	{

	}
	//events
	<button type='button' onclick='functionName()'> Click me! </button>
	onmousedown; //example
	onkeydown; //example
	
	//getElementById
	document.getElementById(); 
	<body>
		<input type='text' id='MyID' value='Value' />
		<script>
			var MyID= document.getElementById('MyID');
			MyID.value = "JS put this value in here";
		//.innerHTLM changes the HTML syntax, change the wording 
		function $ (id)
		{
			return document.getElementById(id);
		}
		</script>
	</body>
	
	//unescape
	document.write(unescape(string));
	
	//array
	var variable = new Array();
	variable[0] = "Input";
	variable[1] = "Input2";
	variable[2] = "Input3";
	var variable = new Array("Input","Input2","Input3");
	var variable = ["Input","Input2","Input3"];
	
	var friendFeed = new Array("Feed 1", "Feed 2", "Feed 3");
	
	for(index in friendFeed) {
		document.write(firendFeed[index] + " <hr (>");
		if (index == 1) {
			break;
		}
	}
	
	//Skippen a loop cycle:
	continue;
	
	//split(seperator, limit), will split your string into an array
	
	var myString= "The quick brown fox jumps over the lazy dog";
	var iAmSplit = myString.split(" ");
	for (index in iAmSplit) {
		document.write(iAmSplit[index] + ", ");
	}
	
	//Substring
	myString.substr(starting character, lenght to extract);
	
	//throw: defines a custom error name, can be accessed in the catch section, so you know, where the error ocurred
	
	//Date and Time
	var d = new Date();
	document.write(d.getDay()); //getting the current day (from 0 to 6, Sun-Sat)
	
	var day = d.getDay();
	var WeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	document.write(WeekDays[day]);
	
	var d = new Date().getDay();
	var d = new Date().getDate();
	var d = new Date().getFullYear();
	
	Math.round();
	Math.floor();
	Math....
	
	//Regular Expression
	var MyRegExp = new RegExp(pattern, modifier);
	var MyRegExp = /pattern/modifier;
	
	var myExp = /myword/g;
	var test = myExp.test("My sentence with myword"); //test=true
	
	string.replace("string or RegExp", "replacement");
	sring.test();
	string.match(variable); //always needs a global modifier "g", witihoput it, it will only find the first one
	
	//find out what browser the user uses
	navigator.appCodeName
	
	//setInterval & setTimeout
	var variabel = setInterval(function, millisecond delay); //clearInterval(variable);
	var delayedAlert = setTimeout(function() {alert("Delayed");}, 5000); //delays normal code with the specified time set

	//Creating own objects:
	var MyWallet = {
		cards: 
		{
			visa: 1,
			mastercard: 1,
			amex: 0,
			debit: 1
		},
		cash:
		{
			Canadian: 1500,
			Euros: "sadly not"
		}
		id: "yes"	
	}
	//to access:
	MyWallet.cards.visa;
</script>

</body>

</html>