import $ from "jquery";

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

$(function(){
    $(".fancy-button").mousedown(function(){
      $(this).bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(){
          $(this).removeClass('active');
      })
       $(this).addClass("active");
    });
  });