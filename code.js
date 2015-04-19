var canvas = document.getElementById("itme")

canvas.width = (window.innerWidth / 6);
canvas.height = (document.getElementsByTagName('header')[0].offsetHeight 
/ 6);

var ctx = canvas.getContext('2d');

var image = ctx.createImageData(canvas.width, canvas.height);
var data = image.data;

var height = 0;

var fn = 'perlin'

function drawFrame() {
	var start = Date.now();
	var cWidth = canvas.width;
	var cHeight = canvas.height;

	var max = -Infinity, min = Infinity;
	var noisefn = fn === 'simplex' ? noise.simplex3 : noise.perlin3;

	for (var x = 0; x < cWidth; x++) {
		for (var y = 0; y < cHeight; y++) {
			var value = noisefn(x / 48, y / 48, height);

			if (max < value) max = value;
			if (min > value) min = value;

			value = (1 + value) * 1.5 * 155;

			var cell = (x + y * cWidth) * 4;
			data[cell] = data[cell + 1] = data[cell + 2] = 
value;
data[cell + 3] = 100; // alpha.
}
}

var end = Date.now();

ctx.fillColor = 'black';
ctx.fillRect(0, 0, 100, 100);
ctx.putImageData(image, 0, 0);

height += 0.01;
requestAnimationFrame(drawFrame);
}
requestAnimationFrame(drawFrame);
