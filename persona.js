function about() {
	document.getElementById("hide").classList.toggle("show");
	document.getElementById("video").classList.remove("show"); 
	document.getElementById("music").classList.remove("show");
	document.getElementById("tour").classList.remove("show");
	document.getElementById("album").classList.remove("show");
}
function video() {
	document.getElementById("video").classList.toggle("show");
	document.getElementById("hide").classList.remove("show");
	document.getElementById("music").classList.remove("show");
	document.getElementById("tour").classList.remove("show");
	document.getElementById("album").classList.remove("show");
}
function music() {
	document.getElementById("music").classList.toggle("show");
	document.getElementById("hide").classList.remove("show");
	document.getElementById("video").classList.remove("show");
	document.getElementById("tour").classList.remove("show");
	document.getElementById("album").classList.remove("show");
}
function tour() {
	document.getElementById("tour").classList.toggle("show");
	document.getElementById("hide").classList.remove("show");
	document.getElementById("video").classList.remove("show");
	document.getElementById("music").classList.remove("show");
	document.getElementById("album").classList.remove("show");
}
function track() {
	document.getElementById("hide").classList.remove("show");
	document.getElementById("video").classList.remove("show");
	document.getElementById("music").classList.remove("show");
	document.getElementById("tour").classList.remove("show");
	document.getElementById("album").classList.toggle("show");	
}