function toggle_about() {
 if(document.getElementById('dasbinich').style.visibility=='hidden') {
  document.getElementById('dasbinich').style.visibility='visible';
  document.getElementById('hobbies').style.visibility='hidden';
  document.getElementById('vita').style.visibility='hidden';
  document.getElementById('arbeiten').style.visibility='hidden';
  document.getElementById('kontakt').style.visibility='hidden';
  document.getElementById('dasbinich').style.height='100%';
  document.getElementById('hobbies').style.height='0px';
  document.getElementById('vita').style.height='0px';
  document.getElementById('arbeiten').style.height='0px';
  document.getElementById('kontakt').style.height='0px';
}
}
function toggle_hobbies() {
 if(document.getElementById('hobbies').style.visibility=='hidden') {
  document.getElementById('dasbinich').style.visibility='hidden';
  document.getElementById('hobbies').style.visibility='visible';
  document.getElementById('vita').style.visibility='hidden';
  document.getElementById('arbeiten').style.visibility='hidden';
  document.getElementById('kontakt').style.visibility='hidden';
  document.getElementById('dasbinich').style.height='0px';
  document.getElementById('hobbies').style.height='100%';
  document.getElementById('vita').style.height='0px';
  document.getElementById('arbeiten').style.height='0px';
  document.getElementById('kontakt').style.height='0px';
 }
}
function toggle_vita() {
 if(document.getElementById('vita').style.visibility=='hidden') {
  document.getElementById('dasbinich').style.visibility='hidden';
  document.getElementById('hobbies').style.visibility='hidden';
  document.getElementById('vita').style.visibility='visible';
  document.getElementById('arbeiten').style.visibility='hidden';
  document.getElementById('kontakt').style.visibility='hidden';
  document.getElementById('dasbinich').style.height='0px';
  document.getElementById('hobbies').style.height='0px';
  document.getElementById('vita').style.height='100%';
  document.getElementById('arbeiten').style.height='0px';
  document.getElementById('kontakt').style.height='0px';
 }
} 
function toggle_arbeiten() {
 if(document.getElementById('arbeiten').style.visibility=='hidden') {
  document.getElementById('dasbinich').style.visibility='hidden';
  document.getElementById('hobbies').style.visibility='hidden';
  document.getElementById('vita').style.visibility='hidden';
  document.getElementById('arbeiten').style.visibility='visible';
  document.getElementById('kontakt').style.visibility='hidden';
  document.getElementById('dasbinich').style.height='0px';
  document.getElementById('hobbies').style.height='0px';
  document.getElementById('vita').style.height='0px';
  document.getElementById('arbeiten').style.height='100%';
  document.getElementById('kontakt').style.height='0px';
 }
} 
function toggle_kontakt() {
 if(document.getElementById('kontakt').style.visibility=='hidden') {
  document.getElementById('dasbinich').style.visibility='hidden';
  document.getElementById('hobbies').style.visibility='hidden';
  document.getElementById('vita').style.visibility='hidden';
  document.getElementById('arbeiten').style.visibility='hidden';
  document.getElementById('kontakt').style.visibility='visible';
  document.getElementById('dasbinich').style.height='0px';
  document.getElementById('hobbies').style.height='0px';
  document.getElementById('vita').style.height='0px';
  document.getElementById('arbeiten').style.height='0px';
  document.getElementById('kontakt').style.height='100%';
 }
} 