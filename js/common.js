head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });
	$('.datepicker').pickadate({
		selectMonths: true,
		selectYears: 15
	});
	$('.tooltipped').tooltip({delay: 50});

	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
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
});