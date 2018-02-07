
$(document).ready(metodos);

function metodos() {
	$("#Plot").click(capturarDatos);

	new Morris.Line({
  
  	element: 'myfirstchart',

  	data: [
    	{ year: '2008', value: 20 },
    	{ year: '2009', value: 10 },
    	{ year: '2010', value: 5 },
    	{ year: '2011', value: 5 },
    	{ year: '2012', value: 20 }
  	],
  
  	xkey: 'year',
  	ykeys: ['value'],
 	labels: ['Value'],
 	resize: true

	});	
 }

function capturarDatos() {

	var constantekmMHz=32.4;
	var constanteKmGHz=92.4;
	var frecuencia = $("#F").val();
	var valorinicial = $("#ID").val();
	var valorfinal = $("#FD").val();
	var unidad= $("#U").val();
	var n = unidad.localeCompare("GHz");
	var distanciaLog= 20*Math.log10(frecuencia);
	alert(distanciaLog);

	/*
	if (n==0) {
		alert("paso")
	}else{
		alert("no paso");
	}
	*/
}