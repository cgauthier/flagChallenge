window.onload = init;

function init() {

	var str = "aHR0cHM6Ly90bnM0bHBnbXppaXlwbnh4emVsNXNzNW55dTBuZnRvbC5sYW1iZGEtdXJsLnVzLWVhc3QtMS5vbi5hd3MvcmFtcC1jaGFsbGVuZ2UtaW5zdHJ1Y3Rpb25zLw==";

	var decodedStr = atob(str)
	
	console.log(decodedStr);
	
	var h2Str = document.getElementById("h2Str");
	
	var link = document.createElement('a');
	link.setAttribute("href", decodedStr);
	link.setAttribute("target", "_blank");
	var linkText = document.createTextNode(decodedStr);
	link.appendChild(linkText);
	h2Str.appendChild(link);
	
	var uls = document.getElementsByTagName('ul');
	
	var charsArr = [];
	
	var x, l = uls.length;
	var ul;
	var li;
	var div;
	var span;
	var dataTag;
	var dataId;
	var dataClass;
	var value;
	
	for(x = 0; x < l; x++) {
		ul = uls[x];
		dataTag = ul.getAttribute("data-tag");
		if(dataTag.includes("75")) {
			li = ul.getElementsByTagName("li");
			dataId = li[0].getAttribute("data-id");
			if(dataId.startsWith("98")) {
				div = li[0].getElementsByTagName("div");
				dataClass = div[0].getAttribute("data-class");
				if(dataClass.endsWith("35")) {
					span = div[0].getElementsByTagName("span");
					value = span[0].getAttribute("value");
					charsArr.push(value);
				}
			}
		}	
	}
	
	var linkToStep2 = charsArr.join("");
	var h3Str = document.getElementById("h3Str");
	
	link = document.createElement('a');
	link.setAttribute("href", linkToStep2);
	link.setAttribute("target", "_blank");
	linkText = document.createTextNode(linkToStep2);
	link.appendChild(linkText);
	h3Str.appendChild(link);
	
	
}