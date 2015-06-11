$(document).ready(function() {
// Insert Roxxi tag into body
var $tag = $( "body" ),
  str = "<div id='roxxi'><div id='design'><a href='http://www.roxxistudios.com' target='_blank'>Designed by<br/>RoxxiStudios</a></div></div>",
  html = $.parseHTML( str );
 
// Append the parsed HTML
$tag.append( html );

//Function for mobile users
$('body').addClass('tag');
 
 	$("#roxxi").click(function () {
 
	  if ($('#roxxi').is('.roxxi_hover')) {
 
	      $('#roxxi').removeClass('roxxi_hover');
 
	  }
	  else{
 
	      $('#roxxi').addClass('roxxi_hover');
 
	  }
 
    });

	$("#roxxi").mouseout(function () {
 
	  if ($('#roxxi').is('.roxxi_hover')) {
 
	      $('#roxxi').removeClass('roxxi_hover'); 
		}
    });

});
