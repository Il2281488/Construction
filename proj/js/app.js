
$(function(){

	var introH_1 = $("#header_1").innerHeight(),
		introH_2 = $("#header_2").innerHeight(),
		introH = introH_1 + (introH_2 / 2),
		scrollOfSet = $(window).scrollTop();

// -------------- fixed header

	function checkScroll() {

		if (scrollOfSet >= introH) {
			$(".header_2").addClass ("fixed");
		} else {
			$(".header_2").removeClass("fixed");
		};
	};

	$(window).on("scroll", function(){

		scrollOfSet = $(this).scrollTop();

		checkScroll(scrollOfSet);
		
	});

// ------------------ smooth scroll

	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		var blockId = $(this).data('scroll'),
			blockOfSet = $(blockId).offset().top;

		$("html, body").animate({
			scrollTop: blockOfSet - (introH_2 / 2)
		}, 500);
	});

// --------------------- nav toggle

	$("#nav_toggle").on("click", function(event){
		event.preventDefault();

		$(".right").toggleClass("active");
		$(".nav_toggle").toggleClass("active")
	});

});