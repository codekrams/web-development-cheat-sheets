<!DOCTYPE html>
<html>
  <head>
	<title>Website title</title>
	<link rel="stylesheet" type="text/css" href="style.css" />
	<link href="favicon.ico" rel="icon" type="image/x-icon" />
	<script src="js/myJavaScript.js"></script>
	<style> ....</style>
	<meta name="description" content="This will describe how or what my site is used for" />
	<meta name="keywords" content="learn, html, javascript" />
	<meta http-equiv="refresh" content="5" />
	<meta http-equiv="refresh" content="0; URL=redirectpage.html " />
	
	<script type="text/javasript">
		function allowDrop(e) {
		e.preventDefault();
		}
		
		function drag(e){
		e.dataTransfer.setData("Text", e.target.id);
		}
		function drop(e){
		e.preventDefault();
		d=e.dataTransfer.getData("Text");
		e.target.appendChild(document.getElementById(d));
		}		
	</script>
	
	<script>
		if(typeof(Storage)!=="undefined"){
		alert('Accepted');
		}
		else {
		alert('No localStorage accepted');
		}
	</script>
	
	//to use local storage:
	<script>
		localStorage.myName = "John Doe";
	</script>
	
	//to access local storage
	<script>
		alert(localStorage.myName);
	</script>
	
		//to use session storage:
	<script>
		sessionStorage.myName = "John Doe";
	</script>
	
	//to access session storage
	<script>
		alert(sessionStorage.myName);
	</script>
	
	
  </head>

  <body>
  <img draggable="true" id="DragMe" scr="google.png" ondragstart="drag(event)" width"300" height"80"/>
  <div ondrop="drop(event)" ondragover="allowDrop(event)" id="dropzone"> </div>
  <header>
  ....
  </header>
    <h1>hello world</h1> 
  <p> 
    <b>
      <i>
        <u>Hello world again</u>
      </i>
    </b> 
  </p>
  
  <ul type="square">
	<li>first item</li>
	<li>second item</li>
	<li>third item</li>
  </ul>
  
  <ol type="a">
	<li>first item</li>
	<li>second item</li>
	<li>third item</li>
  </ol>
  
    <ol type="1" start="2">
	<li>first item</li>
	<li>second item</li>
	<li>third item</li>
  </ol>
  
  <dl>
	<dt>Title</dt>
		<dd>Definition goes here</dd>
	<dt>Second Title</dt>
		<dd>Second Definition</dd>	
  </dl>
  
  <table width="50%" border="1" bordercolor="#f00" cellspacing="5" cellpadding="10" >
	<tr>
		<th>1 First name</th>
		<th>2 Last name</th>
		<th>3 Age</th>	
	</tr>
	<tr>
		<td colspan="2">Jane</td>
		<td rowspan="2">36</td>	
	</tr>
		<tr>
		<td>John</td>
		<td>Doe</td>

	</tr>
 
  </table>
  
  <input type="text" name="Textbox" />
  <input type="password" name="Password" />
  
  <select name="gender">
	<option value="NA" disabled="disabled" selected="selected">Select Gender</option>
	<option value="male">Male</option>
	<option value="female">Female</option>
  </select>
  
  <textarea name="biography" rows="5" cols="60">Add a biography</textarea>
  
  <input type="radio" name="radio" id="rd1" value="rad1">
  <input type="radio" name="radio" id="rd2" value="rad2">
  <input type="radio" name="radio" id="rd3" value="rad3">
  
  <input type="checkbox" name="checkbox" value="checkbox1">
  <input type="checkbox" name="checkbox" value="checkbox2" checked="checked">
  
  <button type="button">Button</button>
  <input type="button" value="Button"/>
  
  <button type="reset">ResetButton</button>
  <input type="reset" value="ResetButton"/>
  
  <button type="submit">SubmitButton</button>
  <input type="submit" value="SubmitButton"/>
  
  <form method="post" action="mypage.html">
	<input type="text" name="Textbox" />
	<input type="submit" value="SubmitButton"/>
	<input type="reset" value="ResetButton"/>
  </form>
  
  <iframe src="http://udemy.com/" frameborder="0" height="200" width="90%" scrolling="no"></iframe>
  
  <section> </section>
  <nav> Navigation </nav>
  <area> </area>
  <article> </article> 
  
  <footer>
  ....
  </footer>
  
  </body>
  <video autoplay="autoplay" controls="controls" loop="loop">
	<source src="jvideos.mp4" type="video/mp4"/>
	<source src="jvideos.ogg" type="video/ogg"/>
	<source src="jvideos.webm" type="video/webm"/>
	Your browser does not support this video type.
  </video>
  
 <audio autoplay="autoplay" controls="controls" loop="loop">
	<source src="music.ogg" type="audio/mp4"/>
	<source src="music.mp3" type="audio/mp3"/>
	<source src="music.wav" type="audio/wav"/>
	Your browser does not support this video type.
  </audio>
  
  <p id="coords"></p>
  <button onclick="getMyPosition()">Find me!</button> //onlick ruft die Funktion in einem Javascript Script auf

  
  
  
    </body>

  
  
</html>