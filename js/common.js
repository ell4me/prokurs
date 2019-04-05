$(function() {

	$(window).load(function() { 
		$(".loader_inner").fadeOut(); 
		$(".loader").delay(400).fadeOut("slow"); 
	});



	new WOW().init();
	$('.image').magnificPopup({type:'image'});
	$('.mag-popup').magnificPopup();

	$(window).stellar({
		horizontalOffset: 60,
		 responsive: true
	});

	

	$('.single-item').slick({
		dots: true,
		nextArrow: "<i class=\"fa fa-chevron-right\"></i>",
  		prevArrow: "<i class=\"fa fa-chevron-left\"></i>"
	});
	$(".slick-dots").each(function() {
		$(this).children('li').html("<span></span>").css({
			"height": '14px',
			"width": '14px',
			"display": 'inline-block',
			"border-radius": "100px", 
			"background-color": "#fff",
			"z-index": "100",
			"margin": "5px",
			"cursor": "pointer",
			"border": "transparent",
			"outline": "none",
			"margin-top": "25px",
		});;
	});


	function wResize() {
		$("header").css("height",$(window));
	};
	wResize();
	$(window).resize(function() {
		wResize();
	});

	//owlCarousel

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$(" .top-header .tab_item").not(":first").hide();
		$(".top-header .wrapper .tab").click(function() {
			$(".top-header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".top-header .tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");

	$(" .callback_footer .tab_item").not(":first").hide();
		$(".callback_footer .wrapper .tab").click(function() {
			$(".callback_footer .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".callback_footer .tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");

	$(" .content-header .tab_item").not(":first").hide();
		$(".content-header .wrapper .tab").click(function() {
			$(".content-header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".content-header .tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");


		$(".map .tab_item").not(":first").hide();
			$(".map  .tab").click(function() {
				$(".map  .tab").removeClass("active").eq($(this).index()).addClass("active");
				$(".map .tab_item").hide().eq($(this).index()).fadeIn()
			}).eq(0).addClass("active");
			$(".header-content").animated("zoomInUp", "zoomOutDown");


});
