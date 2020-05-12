// Just a noob ;)
// Date:10-05-2020;

// define colours
var colors = ["#1B9CFC","#55E6C1","#FEA47F","#ff3838","#AA00FF","#64B5F6","#009688","#FFEB3B","#e67e22","#fd79a8","#009688","#8d6e63","#BDBDBD","#607D8B","#34495e","#ecf0f1",];
	for (let index = 0; index < colors.length; index++) {
         const a = document.querySelector('ul');
         const b = document.createElement('li');
         b.innerText = colors[index];
         b.style.backgroundColor = colors[index];
	a.appendChild(b);  
        b.addEventListener('click', function(e){
        	// copy to Clipboard
                // document.execCommand('copy')
	})
      }