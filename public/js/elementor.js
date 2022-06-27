(function ($) {

	var aThemesTeamCarouselrun = function ($scope, $) {

		if ( $().owlCarouselFork ) {
			$(".roll-team:not(.roll-team.no-carousel)").owlCarouselFork({
				navigation : false,
				pagination: true,
				responsive: true,
				items: 3,
				itemsDesktopSmall: [1400,3],
				itemsTablet:[970,2],
				itemsTabletSmall: [600,1],
				itemsMobile: [360,1],
				touchDrag: true,
				mouseDrag: true,
				autoHeight: false,
				autoPlay: false,
			}); // end owlCarouselFork
		} // end if  		
	};

    var aThemesTestimonialsCarouselrun = function ($scope, $) {

		if ( $().owlCarouselFork ) {
			$('.roll-testimonials').not('.owl-carousel').owlCarouselFork({
				navigation : false,
				pagination: true,
				responsive: true,
				items: 1,
				itemsDesktop: [3000,1],
				itemsDesktopSmall: [1400,1],
				itemsTablet:[970,1],
				itemsTabletSmall: [600,1],
				itemsMobile: [360,1],
				touchDrag: true,
				mouseDrag: true,
				autoHeight: true,
				autoPlay: $('.roll-testimonials').data('autoplay')
			});
		} 

    };    

    var aThemesNewsCarouselrun = function ($scope, $) {

		if ( $().owlCarouselFork ) {
			$(".panel-grid-cell .latest-news-wrapper").owlCarouselFork({
				navigation : false,
				pagination: true,
				responsive: true,
				items: 3,
				itemsDesktopSmall: [1400,3],
				itemsTablet:[970,2],
				itemsTabletSmall: [600,1],
				itemsMobile: [360,1],
				touchDrag: true,
				mouseDrag: true,
				autoHeight: false,
				autoPlay: false
			}); // end owlCarouselFork

		} // end if

	}; 

	var  aThemesteamStyle2 = function ($scope, $) {
		$( '.roll-team.type-b.style2').find( '.team-item' ).each( function() {
			var socials = $(this).find( '.team-social' );
			socials.appendTo( $(this).find( '.team-inner') );
		});
	}		
	
	var aThemesgroupProductYITHActions = function() {

		var product = $( '.woocommerce ul.products li.product' );
		product.each(function (index, el) {
			var placeholder = $( el ).find( '.yith-placeholder' );

			var wcqv 		= $( el ).find( '.yith-wcqv-button' );
			var wcwl 	= $( el ).find( '.yith-wcwl-add-to-wishlist' );
			var compare		= $( el ).find( '.compare.button' );

			placeholder.append( wcqv, wcwl, compare);

		});
	}	
	
	var aThemesAnimatedHeading = function($scope, $) {
		var $strings 	= $scope.find( ".sydney-typed-strings" ).data( 'strings' ).split('|');
		var $id 		= $scope.find( ".sydney-typed-strings" ).data( 'id' );
		var $typeSpeed 	= $scope.find( ".sydney-typed-strings" ).data( 'type-speed' );
		var $backSpeed 	= $scope.find( ".sydney-typed-strings" ).data( 'back-speed' );
		var $backDelay 	= $scope.find( ".sydney-typed-strings" ).data( 'back-delay' );

		new Typed( "#sydney-animated-heading-" + $id, {
			strings: $strings,
			loop: true,
			typeSpeed: $typeSpeed,
			backSpeed: $backSpeed,
			backDelay: $backDelay,
		});
	}

	var aThemesHotspotImage = function($scope, $) {
		var elements 	= $scope.find( ".hotspot-element" );

		$.each(elements, function (i, v) { 

			$( this ).on( "click", function(e) { 
				e.preventDefault();
				$( this ).find( '.hotspot-tooltip.on-hover' ).toggleClass( 'hotspot-clicked' );
			});
		});

	}


	$(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/athemes-testimonials.default', aThemesTestimonialsCarouselrun);
        elementorFrontend.hooks.addAction('frontend/element_ready/athemes-posts.default', aThemesNewsCarouselrun);		
		elementorFrontend.hooks.addAction('frontend/element_ready/athemes-employee-carousel.default', aThemesTeamCarouselrun);
		elementorFrontend.hooks.addAction('frontend/element_ready/athemes-employee-carousel.default', aThemesteamStyle2);
		elementorFrontend.hooks.addAction( 'frontend/element_ready/global', function( $scope ) {
			aThemesgroupProductYITHActions();
		} );	
		elementorFrontend.hooks.addAction("frontend/element_ready/athemes-animated-heading.default", aThemesAnimatedHeading );	
		elementorFrontend.hooks.addAction("frontend/element_ready/athemes-image-hotspots.default", aThemesHotspotImage );	

	});

})(jQuery);