require([
  'bootstrap', 'jquery'
],
function ( bootstrap, $ ) {
    'use strict';
    // jquery(".page-header").css('color', 'red');
    $('#dinca').collapse('show');
    
    $('#dincaheader').click(function(){
    //   toggleit=!toglleit;
    
      $('#dinca').collapse('toggle');
    //   $('#dincaheader').toggleClass('collapsed', toggleit);
      
    });

    // $("#thirdColumnCollapseFirstData").collapse('show');

    // $('#dincaheader h1').css('text-decoration', 'strike-through');
    //start();
});
