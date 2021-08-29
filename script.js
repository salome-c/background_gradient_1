var getWindowSize = (function() {
var de = document.documentElement,
	root = de && de.clientHeight === 0;
function isDocumentElementHeightOff () { 
	var d = document,
		div = d.createElement('div');
	div.style.height = "2500px";
	d.body.insertBefore(div, d.body.firstChild);
	var r = d.documentElement.clientHeight > 2400;
	d.body.removeChild(div);
	return r;
}
if (typeof document.clientWidth == "number") {
	return function () {
		return { width: document.clientWidth, height: document.clientHeight };
	};
} else if (root || isDocumentElementHeightOff()) {
	var b = document.body;
	return function () {
		return { width: b.clientWidth, height: b.clientHeight };
	};
} else {
	return function () {
		return { width: de.clientWidth, height: de.clientHeight };
	};
}
})();
window.onload = function() {
	this.addEventListener('mousemove', function(e) {
		var x = Math.round( e.clientX / getWindowSize().width * 100);
		var y = Math.round( e.clientY / getWindowSize().height * 100);
		document.getElementsByTagName('body')[0].style.background = 'radial-gradient(at ' + x + '% ' + y + '%, #B1D4E0, #373741)';
	});
};