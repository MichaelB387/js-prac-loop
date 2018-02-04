var html = '';
var red;
var green;
var blue;
var rgbColor;
var i =0

function random() {
    red = Math.floor(Math.random() * 256 );
    green = Math.floor(Math.random() * 256 );
    blue = Math.floor(Math.random() * 256 );
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    html += '<div style="background-color:' + rgbColor + '"></div>';
}

for (i = 0; i < 100; i++) { 
    random()
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    html += '<div style="background-color:' + rgbColor + '"></div>';
}




document.write(html);