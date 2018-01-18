/* global $ */

function handleRegistrationForm() { // eslint-disable-line no-unused-vars 

  var clicked = false;
  $('.file-upload').on('click',function() {
    if(!clicked) {
      clicked = true; 
      $(this).find('input').click();
    }
    clicked = false;
  });

  $('.chooseFile').bind('change', function () {
    var filename = $(this).val();
    var $fileUpload = $(this).closest('.file-upload');
    var $fileSelectName = $fileUpload.find(".file-select-name");
    if (/^\s*$/.test(filename)) {
      $fileSelectName.removeClass('active');
      $fileSelectName.text("No file chosen..."); 
    }
    else {
      $fileUpload.addClass('active');
      $fileSelectName.text(filename.replace("C:\\fakepath\\", "")); 
    }
  });

}
