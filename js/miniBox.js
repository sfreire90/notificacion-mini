(function() {
	
	$.miniBox = function(opciones) {
		
		opciones = $.extend({

			imagen: "img/foto.jpg",
			titulo: undefined,
			subtitulo: undefined,
			fa: "fa-commenting",
			timeout: 3000

		}, opciones);

		if(opciones.titulo === undefined){
			alert("El titulo es necesario.");
			return;
		}

		if(opciones.subtitulo === undefined){
			alert("El subtitulo es necesario.");
			return;
		}


		var html = "";

			html += '<div class="miniBox-contenedor">'	
			html += '<div class="miniBox-foto">'
			html += '<img src="'+ opciones.imagen +'" alt="">'
			html += '</div>'
			html += '<div class="miniBox-contenido">'
			html += '<div class="miniBox-titulo">'+ opciones.titulo +'</div>'
			html += '<div class="miniBox-subtitulo">'+ opciones.subtitulo +'</div>'
			html += '</div>'
			html += '<div class="miniBox-icono"><i class="fa '+ opciones.fa +' fa-4x"></i></div>'
			html += '</div>'

		$("body").append(html);

		animar_entrada();

		setTimeout(function(){
			animar_salida();
		}, opciones.timeout)

		function animar_entrada() {
			
			var $miniBox = $(".miniBox-contenedor");

			var tl = new TimelineMax();
				tl.from($miniBox, 0.8, {y:"+=150"})
				  .from($miniBox, 0.5, {opacity: 0.4}, "-=0.5");
		}

		function borrar_miniBox() {
			$(".miniBox-contenedor").remove();
		}

		function animar_salida() {

			var $miniBox = $(".miniBox-contenedor");

			var tl = new TimelineMax();
				tl.to($miniBox, 0.8, {y:"+=150"})
				  .to($miniBox, 0.5, {opacity: 0, onComplete: borrar_miniBox}, "-=0.5");

		}

	}

})();