$(document).ready(function() {

	$('.map')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});

	$('.popup').magnificPopup({
		type:'image',
		closeOnContentClick: 1,
		mainClass: 'mfp-with-zoom', // this class is for CSS animation below

		zoom: {
		    enabled: true, // By default it's false, so don't forget to enable it

		    duration: 300, // duration of the effect, in milliseconds
		    easing: 'ease-in-out', // CSS transition easing function

		    // The "opener" function should return the element from which popup will be zoomed in
		    // and to which popup will be scaled down
		    // By defailt it looks for an image tag:
			    opener: function(openerElement) {
			      // openerElement is the element on which popup was initialized, in this case its <a> tag
			      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
			      return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
		}
});
	$('.popup_c').magnificPopup();

	$.stellar({
		responsive: true,

	});

	$(".owl-carousel").owlCarousel({
		loop: true,
		navText: "",
		responsive : {
			0 : {
				items : 1,
				nav : true
			}
		}
	});

	function wResize() {
		$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});

	$("footer .wrapper .tab").click(function() {
	$("footer .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$("footer .wrapper .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".s_contacts .tab").click(function() {
	$(".s_contacts .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var ths = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance; 
				magnificPopup.close(); 
				ths.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
});

$(window).load(function() {

	$(".top_header").animated("fadeInDown", "fadeOut");
	$(".tabs_header .wrapper").animated("flipInY", "fadeOut");
	$(".profi_item").animated("fadeInRight", "fadeOut");
	$(".s_profi form").animated("zoomInRight", "fadeOut");
	$(".s_request h2").animated("fadeInUp", "fadeOut");
	$(".map").animated("fadeIn", "fadeOut");
	$("footer").animated("fadeIn", "fadeOut");

});