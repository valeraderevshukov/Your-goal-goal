head.ready(function() {

	$(document).on("click", function() {
		$('.js-checkbox').removeClass("is-open");
	});

	$('.js-open-checkbox').on('click', function(event) {
		if($(this).parent().hasClass('is-open')) {
			$(this).parent().removeClass("is-open");
		}else {
			$('.js-checkbox').removeClass("is-open");
			$(this).parent().addClass('is-open');
		}
		return false;
	});
	$(".checkbox___block").on("click", function(event){
		event.stopPropagation();
	});

	$('.datepicker').pickadate({
		selectMonths: true,
		selectYears: 15
	});

	$('.tooltipped').tooltip({delay: 50});

	$('.modal-trigger').leanModal();

	$('#modal1').openModal();

	$('#modal1').closeModal();

	$('.modal-trigger').leanModal({
	      dismissible: true,
	      opacity: .5,
	      in_duration: 300,
	      out_duration: 200
	    }
	);

	$('.picker__day').click(function (){
		$('.picker').removeClass('picker--opened');
		$('.picker').removeClass('picker--focused');
		$('.datepicker').removeClass('picker__input--active');
		$('.datepicker').removeClass('picker__input--target');

		$('#index-page').css('overflow','auto');
	});
});
	