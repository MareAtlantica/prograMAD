//document.ready
$(function(){

    $.each(listobjetivos.objetivos, function(index,jsonObject){	    
	        $('#objetivos-'+jsonObject.apuesta).append('<a href="sector.php?sector='+jsonObject.id+'"><div class="objetivo"> ' +jsonObject.titulo+'</div></a>');	   
	});


	/* sidebar*/
	$.each(listobjetivos.objetivos, function(index,jsonObject){	    
	        $('#enlaces-sidebar').append('<a href="sector.php?sector='+jsonObject.apuesta+'"><div class="objetivo"> ' +jsonObject.titulo+'</div></a>');	   
	});


});