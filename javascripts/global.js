 $('.menu, .leftmenuBox a,  .over-black').click(function() {
        $( ".leftmenuBox").toggle( "slide");
        });
		
 $('.over-black, #menu-nav').click(function() {
        $( ".over-black" ).fadeOut( "slow");
        });
		 $('.menu').click(function() {
        $( ".over-black" ).fadeIn( "slow");
        });