
$(document).ready(metodos2);

function metodos2() {
	$("#Op2").click(prueba2);
 }

 function prueba2(){
 	$("#Op1").attr("class","btn btn-outline-primary btn-md btn-block ");
 	$("#Op3").attr("class","btn btn-outline-primary btn-md btn-block ");
 	$("#Op2").attr("class","btn btn-outline-primary btn-md btn-block active");


	var datos='';
	datos+='';
	$("#grafica").html(datos);

 	var dato='';
 	dato+='<div class="form-group">';
 	dato+='<label>Frequency</label>';
 	dato+='<input type="number" class="form-control" id="IF" placeholder="Initial frequency">';
 	dato+='</div>';
 	dato+='<div class="form-group">';
 	dato+='<input type="number" class="form-control" id="FF" placeholder="Final frequency">';
 	dato+='</div>';
 	dato+='<div class="form-group">';
 	dato+='<label>Unit</label>';
 	dato+='<select id="U" class="form-control">';
 	dato+='<option selected>GHz</option>';
 	dato+='<option>MHz</option>';
 	dato+='</select>';
 	dato+='</div>';
 	dato+='<div class="form-group">';
 	dato+='<label>Distance</label>';
 	dato+='<input type="number" class="form-control" id="D" placeholder="Distance (Km)">';
 	dato+='</div>';
 	dato+='<button class="btn btn-primary" >Plot</button>';
	$("#formulario").html(dato);
 }
