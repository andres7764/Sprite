window.onload = function()
{
	 document.onkeyup = muestraInformacion; 
     document.onkeypress = muestraInformacion; 
  	 document.onkeydown = muestraInformacion; 
}
function muestraInformacion(elEvento)
{
 console.log
 var mov = ["sprite-1", "sprite-2", "sprite-3", "sprite-4"];
 var evento = window.event || elEvento;
 evento = evento.keyCode;
 console.log(evento);
 switch(evento){
  case 37:
    div("monacho").setAttribute("class", "li " + mov[0]);
  break;
  case 38:
  div("monacho").setAttribute("class", "li " + mov[1]);
  break;
  case 39:
  div("monacho").setAttribute("class", "li " + mov[2]);
  break;
  case 40:
  div("monacho").setAttribute("class", "li " + mov[3]);
  break;
 } 
}	

function div(div)
{
	return document.getElementById(div);
}
