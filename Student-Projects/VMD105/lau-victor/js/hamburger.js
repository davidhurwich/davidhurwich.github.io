function openNav(ham) {
	
	//display navigation
	var x = document.getElementById("vertical-nav");
	if (x.style.display === "block") {
	x.style.display = "none";
	} else {
	x.style.display = "block";
	}

    //currently not working fix later. use work around
	// change hamburger x
	x.classList.toggle("change");
}