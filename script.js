// form submission

// $(document).ready(function () {

// 	$('form').submit(function (event) {

// 		event.preventDefault();

// 		$.ajax({
// 			type: $(this).attr('method'),
// 			url: $(this).attr('action'),
// 			data: new FormData(this),
// 			contentType: false,
// 			cache: false,
// 			processData: false,
// 			success: function (result) {
// 				alert('Sent!')
// 			}
// 		});
// 	});
// });


jQuery(document).ready(function () {

	jQuery('form button').click(function () {
		var form = jQuery(this).closest('form');

		if (form.valid()) {
			form.css('opacity', '.5');
			var actUrl = form.attr('action');

			jQuery.ajax({
				url: actUrl,
				type: 'post',
				dataType: 'html',
				data: form.serialize(),
				success: function (data) {
					form.html(data);
					form.css('opacity', '1');
					form.find('.status').html('form submitted successfully!!!');
					// $('#exampleModal').modal('show') // для бутстрапа
				},
				error: function () {
					form.find('.status').html('Error server');
				}
			});
		}
	});


});





// swiper

const swiper = new swiper('.swiper', {
	slidesPerView: 2,
	// spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
	// loopFillGroupWithBlank: true,


	// Optional parameters

	// direction: 'vertical',
	// loop: true,

	// If we need pagination
	// pagination: {
	// 	el: '.swiper-pagination',
	// },

	// Navigation arrows
	navigation: {
		nextEl: '.art-switch1End',
		prevEl: '.art-switch2End',
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
});