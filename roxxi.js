jQuery(document).ready(function() {
// Insert Roxxi tag into body
var $tag = jQuery( "body" ),
  str = "<div id='roxxi'><div id='design'><a href='http://www.roxxistudios.com' target='_blank'>Designed by<br/>RoxxiStudios</a></div></div>",
  html = jQuery.parseHTML( str );
 
// Append the parsed HTML
$tag.append( html );

//Function for mobile users
jQuery('body').addClass('tag');
 
 	jQuery("#roxxi").click(function () {
 
	  if (jQuery('#roxxi').is('.roxxi_hover')) {
 
	      jQuery('#roxxi').removeClass('roxxi_hover');
 
	  }
	  else{
 
	      jQuery('#roxxi').addClass('roxxi_hover');
 
	  }
 
    });

	jQuery("#roxxi").mouseout(function () {
 
	  if (jQuery('#roxxi').is('.roxxi_hover')) {
 
	      jQuery('#roxxi').removeClass('roxxi_hover'); 
		}
    });

});
