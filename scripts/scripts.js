'use strict';

$(function(){
  $("#drawer_toggle").click(function(){
    $(this).toggleClass("open");
    $(".navbar").toggleClass("sp_open");
  });
});