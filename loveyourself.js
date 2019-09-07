function about() {
	document.getElementById("hide").classList.toggle("show");
	document.getElementById("hide2").classList.toggle("show");
	document.getElementById("hide3").classList.toggle("show");
	document.getElementById("hide4").classList.toggle("show");
	document.getElementById("video").classList.remove("show"); 
	document.getElementById("music").classList.remove("show");
	document.getElementById("tour").classList.remove("show");
	document.getElementById("album").classList.remove("show");
}
function video() {
	document.getElementById("video").classList.toggle("show");
	document.getElementById("hide").classList.remove("show");
	document.getElementById("hide2").classList.remove("show");
	document.getElementById("hide3").classList.remove("show");
	document.getElementById("hide4").classList.remove("show");
	document.getElementById("music").classList.remove("show");
	document.getElementById("tour").classList.remove("show");
	document.getElementById("album").classList.remove("show");
}
function music() {
	document.getElementById("music").classList.toggle("show");
	document.getElementById("hide").classList.remove("show");
	document.getElementById("hide2").classList.remove("show");
	document.getElementById("hide3").classList.remove("show");
	document.getElementById("hide4").classList.remove("show");
	document.getElementById("video").classList.remove("show");
	document.getElementById("tour").classList.remove("show");
	document.getElementById("album").classList.remove("show");
}
function tour() {
	document.getElementById("tour").classList.toggle("show");
	document.getElementById("hide").classList.remove("show");
	document.getElementById("hide2").classList.remove("show");
	document.getElementById("hide3").classList.remove("show");
	document.getElementById("hide4").classList.remove("show");
	document.getElementById("video").classList.remove("show");
	document.getElementById("music").classList.remove("show");
	document.getElementById("album").classList.remove("show");
}
function track() {
	document.getElementById("hide").classList.remove("show");
	document.getElementById("hide2").classList.remove("show");
	document.getElementById("hide3").classList.remove("show");
	document.getElementById("hide4").classList.remove("show");
	document.getElementById("video").classList.remove("show");
	document.getElementById("music").classList.remove("show");
	document.getElementById("tour").classList.remove("show");
	document.getElementById("album").classList.toggle("show");	
}