var i = 1;
function timedCount() {
    
    postMessage("images/image" + i + ".PNG");
    i++;
    setTimeout("timedCount()",3000);
    if (i == 6){
    	i = 1;
    }
}

timedCount();

