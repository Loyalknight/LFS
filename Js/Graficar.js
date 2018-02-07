
$(document).ready(metodos);

function metodos() {
	$("#Op1").click(prueba1);
	$("#Plot").click(validar);
 }

 function prueba1(){
 	$("#Op1").attr("class","btn btn-outline-primary btn-md btn-block active");
 	$("#Op3").attr("class","btn btn-outline-primary btn-md btn-block ");
 	$("#Op2").attr("class","btn btn-outline-primary btn-md btn-block ");

 	var datos='';
	datos+='';
	$("#grafica").html(datos);

 	var dato='';
 	dato+='<div class="form-row">';
 	dato+='<div class="form-group col-md-6">';
	dato+='<label>Frequency</label>';
	dato+='<input type="number" class="form-control" id="F" placeholder="Frequency" >';
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

 	dato+='<button class="btn btn-primary" id="Plot" onclick="validar();">Plot</button>';
	$("#formulario").html(dato);

 }

function validar(){

	var frecuencia = $("#F").val();
	var valorinicial = $("#ID").val();
	var valorfinal = $("#FD").val();

	if (frecuencia == "" || valorinicial == "" || valorfinal == "") {
        $.toast({	
    		text: 'Debe llenar todos los campos',
    		position: 'top-center'	
		})
        return false;
    }else if(parseFloat(frecuencia)<0 || parseFloat(valorinicial)<0 || parseFloat(valorfinal)<0){
    	$.toast({	
    		text: 'No pueden haber valores negativos',
    		position: 'top-center'	
		})
        return false;
    }else if(parseFloat(valorinicial)>parseFloat(valorfinal)){
		$.toast({	
    		text: 'El valor inicial debe ser menor que el final',
    		position: 'top-center'	
		})
        return false;
    }else{
	capturarDatos();
    }

}

function capturarDatos() {
	
	var g="";
	g+='<div id="myfirstchart"></div>';
	$("#grafica").html(g);

	
	var constantekmMHz=32.4;
	var constanteKmGHz=92.4;
	var frecuencia = parseFloat($("#F").val());
	var valorinicial = parseFloat($("#ID").val());
	var valorfinal = parseFloat($("#FD").val());
	var unidad= $("#U").val();
	var n = unidad.localeCompare("GHz");
	var frecuenciaLog= 20*Math.log10(frecuencia);

	if(n==0){
		var info= [{ year: valorinicial, value: constanteKmGHz+(20*Math.log10(valorinicial))+frecuenciaLog }]; 
	}else{
		var info= [{ year: valorinicial, value: constantekmMHz+(20*Math.log10(valorinicial))+frecuenciaLog }]; 
	}
	
	

	for (var i = valorinicial+1; i <=valorfinal; i++) {
		if(n==0){
			info.push({
			"year": i +'Km',
	    	"value":constanteKmGHz+(20*Math.log10(i))+frecuenciaLog
			});
		}else{
			info.push({
			"year": i+'Km',
	    	"value":constantekmMHz+(20*Math.log10(i))+frecuenciaLog
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