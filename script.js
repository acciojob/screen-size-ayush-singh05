//your JS code here. If required.
function updateWindow(){
	const h1 = document.getElementById("sizeInfo");
const width = window.innerWidth;
const height = window.innerHeight;
h1.innerText = `Width: ${width} and Height: ${height} `;
}

window.addEventListener('resize', updateWindow);

// Initial call to set the initial window dimensions
updateWindow();
