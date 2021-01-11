/**
 * Created by shu on 3/8/2016.
 */


$(document).ready(function () {
	jQuery('#documenter_nav li').each(function() {
		$('li:has(ul.sub-menu)').addClass('has-child');
		$('#documenter_nav li.parent > a').bind('click touchstart', function () {
			hash = $(this).attr('href');

			$('#documenter_nav li').removeClass("active");
			$(this).parent().addClass('active');
			console.log($(this).parent())
			$('.doc-container section').removeClass("show");
			$(hash).addClass('show');



		});

		$('#documenter_nav li.parent ul.sub-menu li > a').bind('click touchstart', function () {
			hash = $(this).attr('href');

			$('#documenter_nav li.parent').removeClass("active");
			$(this).closest('li.parent').addClass('active');

			$('.sub-menu li').removeClass("active");
			$(this).parent().addClass('active');

			$('.doc-container section').removeClass("show");
			$(hash).addClass('show');

		});

	});

});