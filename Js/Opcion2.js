
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
 	dato+='<button class="btn btn-primary" onclick="validar2();">Plot</button>';
	$("#formulario").html(dato);
 }

 function validar2(){
 	var frecuencia1 = $("#IF").val();
	var frecuencia2 = $("#FF").val();
	var distance= $("#D").val();

	if (frecuencia1 == "" || frecuencia2 == "" || distance == "") {
        $.toast({	
    		text: 'Debe llenar todos los campos',
    		position: 'top-center'	
		})
        return false;
    }else if(parseFloat(frecuencia1)<0 || parseFloat(frecuencia2)<0 || parseFloat(distance)<0){
    	$.toast({	
    		text: 'No pueden haber valores negativos',
    		position: 'top-center'	
		})
        return false;
    }else if(parseFloat(frecuencia1)>parseFloat(frecuencia2)){
		$.toast({	
    		text: 'El valor inicial debe ser menor que el final',
    		position: 'top-center'	
		})
        return false;
    }else{
		grafi1();
    }
 }

function grafi1() {
    
    var g1="";
    g1+='<div id="myfirstchart"></div>';
    $("#grafica").html(g1);

    
    var constantekmMHz=32.4;
    var constanteKmGHz=92.4;
    var frecuencia1 = parseFloat($("#IF").val());
    var frecuencia2 = parseFloat($("#FF").val());
    var distance= parseFloat($("#D").val());
    var unidad= $("#U").val();
    var n = unidad.localeCompare("GHz");
    var distanciaLog= 20*Math.log10(distance);

    var info =[];
    

    for (var i = frecuencia1; i <=frecuencia2; i++) {
        if(n==0){
            info.push({
            "year": i+'GHz',
            "value":constanteKmGHz+distanciaLog+(20*Math.log10(i))
            });
        }else{
            info.push({
            "year": i+'MHz',
            "value":constantekmMHz+distanciaLog+(20*Math.log10(i))
            });
        }
    }

    Morris.Line({
  
    element: 'myfirstchart',
    data: info,
    xkey: 'year',
    ykeys: ['value'],
    labels: ['P.E.L'],
    resize: true,
    parseTime: false,
    postUnits: 'dB'
    
    }); 

}