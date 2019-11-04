var color1=document.querySelector(".color1");
var css=document.querySelector("h3");

var color2=document.querySelector(".color2");

var body=document.getElementById("gradient");
// body.style.background = "red";

function set_gradient(){
	body.style.background = 
	    "linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";
		css.textContent = body.style.background + ";";
}
color1.addEventListener("input", set_gradient); 
color2.addEventListener("input", set_gradient);