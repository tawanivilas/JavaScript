$(document).ready(function() {
	var btn_thumb = $('#thumbs');
	var contador = $('#thumbs .contador span');

	btn_thumb.on('click', onClick);

	function onClick() {
		if(btn_thumb.hasClass('disabled')){
			return;
		}

		var contagem = parseInt(contador.text());
		contador.text(contagem + 1);

		btn_thumb.addClass('disabled');

		var p = $('<p>', {
			text : 'Obrigado pelo seu feedback!'
		});

		btn_thumb.after(p);
	};
});