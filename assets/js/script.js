new WOW().init();

jQuery(document).ready(function($) {

        $('.toggle-menu').click(function(){
            $('.mobile-menu').toggleClass('active');
        })


        $("#items-slide").lightSlider({
            auto: true,
            loop: true,
            speed: 800,
            item: 1,
            mode: 'fade',
            keyPress: true,
            enableTouch: false,
            enableDrag: false,
            pause: 4000,
            responsive: [{
                    breakpoint: 800,
                    settings: {
                        item: 3,
                        slideMove: 1,
                        slideMargin: 6,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        item: 1,
                        slideMove: 1
                    }
                }
            ]
        });

        $('[data-fancybox]').fancybox({
            protect: true
        });
});

function bs_input_file() {
	$(".input-file").before(
		function() {
			if ( ! $(this).prev().hasClass('input-ghost') ) {
				var element = $("<input type='file' class='input-ghost' style='visibility:hidden; height:0'>");
				element.attr("name",$(this).attr("name"));
				element.change(function(){
					element.next(element).find('input').val((element.val()).split('\\').pop());
				});
				$(this).find("button.btn-choose").click(function(){
					element.click();
				});
				$(this).find("button.btn-reset").click(function(){
					element.val(null);
					$(this).parents(".input-file").find('input').val('');
				});
				$(this).find('input').css("cursor","pointer");
				$(this).find('input').mousedown(function() {
					$(this).parents('.input-file').prev().click();
					return false;
				});
				return element;
			}
		}
	);
}
$(function() {
	bs_input_file();
});
