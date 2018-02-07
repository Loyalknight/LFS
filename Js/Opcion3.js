
$(document).ready(metodos3);

function metodos3() {
	$("#Op3").click(prueba3);
 }

 function prueba3(){
 	$("#Op1").attr("class","btn btn-outline-primary btn-md btn-block ");
 	$("#Op2").attr("class","btn btn-outline-primary btn-md btn-block ");
 	$("#Op3").attr("class","btn btn-outline-primary btn-md btn-block active");

	var datos='';
	datos+='';
	$("#grafica").html(datos);

 	var dato='';

 	dato+=' <div class="form-row">';
 	dato+='<div class="form-group col-md-6">';
 	dato+='<label>Frequency 1</label>';
 	dato+=' <input type="number" class="form-control" id="F1" placeholder="Frequency 1" >';
 	dato+='</div>';
 	dato+='<div class="form-group col-md-6">';
 	dato+='<label>Unit</label>';
 	dato+='<select id="U" class="form-control">';
 	dato+='<option selected>GHz</option>';
 	dato+='<option>MHz</option>';
 	dato+='</select>';
 	dato+='</div>';
 	dato+='</div>';

 	dato+=' <div class="form-row">';
 	dato+='<div class="form-group col-md-6">';
 	dato+='<label>Frequency 2</label>';
 	dato+=' <input type="number" class="form-control" id="F2" placeholder="Frequency 2" >';
 	dato+='</div>';
 	dato+='<div class="form-group col-md-6">';
 	dato+='<label>Unit</label>';
 	dato+='<select id="U" class="form-control">';
 	dato+='<option selected>GHz</option>';
 	dato+='<option>MHz</option>';
 	dato+='</select>';
 	dato+='</div>';
 	dato+='</div>';

 	dato+='<div class="form-group">';
 	dato+='<label>Distance</label>';
 	dato+='<input type="number" class="form-control" id="ID" placeholder="Initial distance (km)">';
 	dato+='</div>';
 	dato+='<div class="form-group">';
 	dato+='<input type="number" class="form-control" id="FD" placeholder="Final dintance (km)">';
 	dato+='</div>';
 	
 	
 	dato+='<button class="btn btn-primary" >Plot</button>';
	$("#formulario").html(dato);
 }
