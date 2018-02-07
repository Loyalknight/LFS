
$(document).ready(metodos);

function metodos() {
	$("#Plot").click(validar);
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