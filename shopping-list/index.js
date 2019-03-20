$(function windowOnLoad() {
  $('#js-shopping-list-form').submit(e => {
    e.preventDefault();
      const listItem = $('#js-shopping-list-form').find("input[type = text][name = shopping-list-entry]").val();
      const listForm = $('.shopping-list').prepend('<li><span class = "shopping-item">' +listItem);  
      $('input#shopping-list-entry').val('').attr("placeholder","e.g., broccoli");
      $("li").append('<div class = "shopping-item-controls"></div>');
      $("li:first-child").find(".shopping-item-controls").append('<button class = "shopping-item-toggle"><span class = "button-label">check</span></button>',' ','<button class= "shopping-item-delete"> <span class = "button-label">delete</span></button>')
     
  });
  $('.shopping-list').on ("click", function (e) {
    $(e.target).closest('li').find('.shopping-item').toggleClass( "shopping-item__checked" );
    $('.shopping-item-controls').find('.shopping-item-delete').click(function (e) {
  $(this).closest('li').remove();
  });
  });
});