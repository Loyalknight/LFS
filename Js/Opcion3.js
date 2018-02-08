
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
 	dato+='<select id="U1" class="form-control">';
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
 	dato+='<select id="U2" class="form-control">';
 	dato+='<option selected>GHz</option>';
 	dato+='<option>MHz</option>';
 	dato+='</select>';
 	dato+='</div>';
 	dato+='</div>';

 	dato+='<div class="form-group">';
 	dato+='<label>Distance</label>';
 	dato+='<input type="number" class="form-control" id="ID1" placeholder="Initial distance (km)">';
 	dato+='</div>';
 	dato+='<div class="form-group">';
 	dato+='<input type="number" class="form-control" id="FD2" placeholder="Final dintance (km)">';
 	dato+='</div>';
 	
 	
 	dato+='<button class="btn btn-primary" onclick="validar3();">Plot</button>';
	$("#formulario").html(dato);
 }

 function validar3(){
 	var frecuencia1 = $("#F1").val();
	var frecuencia2 = $("#F2").val();
	var distance1= $("#ID1").val();
	var distance2= $("#FD2").val();

	if (frecuencia1 == "" || frecuencia2 == "" || distance1 == "" || distance2 == "") {
        $.toast({	
    		text: 'Debe llenar todos los campos',
    		position: 'top-center'	
		})
        return false;
    }else if(parseFloat(frecuencia1)<0 || parseFloat(frecuencia2)<0 || parseFloat(distance1)<0 || parseFloat(distance2)<0){
    	$.toast({	
    		text: 'No pueden haber valores negativos',
    		position: 'top-center'	
		})
        return false;
    }else if(parseFloat(distance1)>parseFloat(distance2)){
		$.toast({	
    		text: 'El valor inicial debe ser menor que el final',
    		position: 'top-center'	
		})
        return false;
    }else{
		grafi2();
    }
 }

function grafi2() {
    
    var g2="";
    g2+='<div id="myfirstchart"></div>';
    $("#grafica").html(g2);

    
    var constantekmMHz=32.4;
    var constanteKmGHz=92.4;
    var frecuencia1 = parseFloat($("#F1").val());
    var frecuencia2 = parseFloat($("#F2").val());
    var distance1= parseFloat($("#ID1").val());
    var distance2= parseFloat($("#FD2").val());
    var unidad= $("#U1").val();
    var unidad2= $("#U2").val();
    var n = unidad.localeCompare("GHz");
    var n2 = unidad2.localeCompare("GHz");
    var frecuencialog1= 20*Math.log10(frecuencia1);
    var frecuencialog2= 20*Math.log10(frecuencia2);

    var info =[];
    

    for (var i = distance1; i <=distance2; i++) {
        if(n==0 && n2==0){
            info.push({
            "year": i+'Km',
            "value":constanteKmGHz+(20*Math.log10(i))+frecuencialog1,
            "value2":constanteKmGHz+(20*Math.log10(i))+frecuencialog2
            });
        }else if(n!=0 && n2!=0){
            info.push({
            "year": i+'Km',
            "value":constantekmMHz+(20*Math.log10(i))+frecuencialog1,
            "value2":constantekmMHz+(20*Math.log10(i))+frecuencialog2
            });
        }else if(n!=0 && n2==0){
            info.push({
            "year": i+'Km',
            "value":constantekmMHz+(20*Math.log10(i))+frecuencialog1,
            "value2":constanteKmGHz+(20*Math.log10(i))+frecuencialog2
            });
        }else if(n==0 && n2!=0){
            info.push({
            "year": i+'Km',
            "value":constanteKmGHz+(20*Math.log10(i))+frecuencialog1,
            "value2":constantekmMHz+(20*Math.log10(i))+frecuencialog2
            });
        }
    }

    Morris.Line({
  
    element: 'myfirstchart',
    data: info,
    xkey: 'year',
    ykeys: ['value','value2'],
    labels: ['P.E.L.1', 'P.E.L.2'],
    resize: true,
    parseTime: false,
    postUnits: 'dB'
    
    }); 

}
