function toggle_about(){
	var about = document.getElementById('dasbinich')
	if (about.style.display == 'none') {
		about.style.display = 'block'
	} else {
		about.style.display = 'none'
	}
}
function toggle_hobbies(){
	var hobbies = document.getElementById('hobbies')
	if (hobbies.style.display == 'none') {
		hobbies.style.display = 'block',
		about.style.display = 'none',
		vita.style.display = 'none',
		arbeiten.style.display = 'none',
		kontakt.style.display = 'none'
	} else {
		hobbies.style.display = 'none'
	}
}
function toggle_vita(){
	var vita = document.getElementById('vita')
	if (vita.style.display == 'none') {
		vita.style.display = 'block'
	} else {
		vita.style.display = 'none'
	}
}
function toggle_arbeiten(){
	var arbeiten = document.getElementById('arbeiten')
	if (arbeiten.style.display == 'none') {
		arbeiten.style.display = 'block'
	} else {
		arbeiten.style.display = 'none'
	}
}
function toggle_kontakt(){
	var kontakt = document.getElementById('kontakt')
	if (kontakt.style.display == 'none') {
		kontakt.style.display = 'block'
	} else {
		kontakt.style.display = 'none'
	}
}