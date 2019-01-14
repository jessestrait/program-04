


function timeFunction() {
	var newDate = new Date().toLocaleString();
	var dateTime = "Current Date and Time: " + newDate;
	document.getElementById("dateDisplay").innerHTML = dateTime;
	console.log(dateTime);
}

(function () {
    document.getElementById("dateDisplay").style.color = "blue";
})();

function changeColor(color) {
	
	document.getElementById("dateDisplay").style.color = color;

}

function changeColorSelect() {
	
	var options = document.getElementById("selectColorChange").options;
	var id = options[options.selectedIndex].id;
	var value   = options[options.selectedIndex].value;

	console.log(value);
	changeColor(value);
}

function checkCookies() {
	if (navigator.cookieEnabled) {
		document.getElementById("crookies").innerHTML = "Cookies are Enabled";

	} else {
		document.getElementById("crookies").innerHTML = "Cookies are NOT Enabled";
	}
}

function counterRandom() {

	var counter = clickCounter();
	var generate = getRandom();
	document.getElementById("wierdStuff").innerHTML = counter + ". " + "Random Number: " + generate;

	function getRandom(){
		 var rand = Math.floor(Math.random() * 100) + 1;
		 return rand;
	}
	function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
            sessionStorage.clickcount = 1;
        }
        return sessionStorage.clickcount;
    } 
  }
}



function hideLorem() {

	var elements = document.getElementsByClassName("loremClass");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("loremHide");
	}
}

function changeLorem() {
	var elements = document.getElementsByClassName("loremClass");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("loremChange");
	}
}

function displayValues() {
	
	var all = document.documentElement.innerHTML;

	document.getElementById("wierdSt").innerHTML = strip(all);
	
}

function strip(html)
{
   var tmp = document.createElement("DIV");
   tmp.id = "number7";
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

function showHideImage() {

	var x = document.getElementById("imageChange").selectedIndex;
	//console.log(x);

	switch (x) {
		case 1:
			removeImages();
			var image1 = document.getElementById("imageShow1");
			var change1 = document.getElementById("imageChange");
			image1.src = change1.value;
			break;
		case 2:
			removeImages();
			var image2 = document.getElementById("imageShow2");
			var change2 = document.getElementById("imageChange");
			image2.src = change2.value;
			break;
		case 3:
			removeImages();
			var image3 = document.getElementById("imageShow3");
			var change3 = document.getElementById("imageChange");
			image3.src = change3.value;
			break;
		case 4:
			removeImages();
			var image4 = document.getElementById("imageShow4");
			var change4 = document.getElementById("imageChange");
			image4.src = change4.value;
			break;
		case 5:
			removeImages();
			var image5 = document.getElementById("imageShow5");
			var change5 = document.getElementById("imageChange");
			image5.src = change5.value;
			break;
		case 6:
			removeImages();
			var image6 = document.getElementById("imageShow6");
			var change6 = document.getElementById("imageChange");
			image6.src = change6.value;
			break; 
	}
}

function removeImages() {
	var images = document.getElementsByTagName('img');
	var l = images.length;
	for (var i = 0; i < l; i++) {
    	//images[0].parentNode.removeChild(images[0]);
    	images[i].src = "images/default.PNG";
	}
}

function toggleVis(){
	var x = document.getElementById("imageSlideAuto");
    if (x.style.display === "none") {
        x.style.display = "inline";
    } else {
        x.style.display = "none";
    }
}

var mOver = document.getElementById("buttonMouse");

mOver.addEventListener("mouseover", function( event ) {   
    
    event.target.style.backgroundColor = "orange";
    
  }, false);

mOver.addEventListener("mouseout", function( event ) {   
    
    event.target.style.backgroundColor = "#4CAF50";

  }, false);

function resizeFunc() {
	var backgroundColor = '#' + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
	document.body.style.backgroundColor = backgroundColor;
}

function createP() {
	var para = document.createElement("P");
    var t = document.createTextNode("I've just been created!!");
    para.appendChild(t);
    document.getElementById("myDIV").appendChild(para);
}

var mOverP = document.getElementById("myDIV2");
var nodelist = document.getElementsByTagName("P").length;

mOverP.addEventListener("mouseover", function( event ) {   
    
    
    document.getElementById("pElements").innerHTML = nodelist + " paragraph elements on Page.";
    
  }, false);