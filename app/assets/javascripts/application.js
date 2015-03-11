// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require jquery.remodal.min
//= require turbolinks
//= require ripple.js
//= require jquery.ripple
//= require webcomponentsjs/webcomponents
//= require platform/platform
//= require home
//= require_tree .

$(document).ready(function() {
  
    $(".dropdown dt a").click(function() {
        $(".dropdown dd ul").toggle();
    });
                
    $(".dropdown dd ul li a").click(function() {
        var text = $(this).html();
        $(".dropdown dt a span").html(text);
        $(".dropdown dd ul").hide();
       
    });
      
	  $(".date_time dt a").click(function() {
        $(".date_time dd ul").toggle();
    });
                
    $(".date_time dd ul li a").click(function() {
        var text = $(this).html();
        $(".date_time dt a span").html(text);
        $(".date_time dd ul").hide();
       
    }); 
	
    $('.zooming_effect').hoverZoom();
});