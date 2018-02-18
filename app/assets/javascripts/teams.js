/* global $ */

function handleRegistrationForm() { // eslint-disable-line no-unused-vars 

  var EMPTY_INPUT = "This field is required";
  var EMPTY_FILE = "This file is required";
  var INVALID_TELEPHONE = "Please enter a valid phone number";
  var INVALID_EMAIL = "Please enter a valid e-mail";
  var INVALID_PASSWORD = "Please enter a password with atleast 6 characters";
  var DIFFERENT_PASSWORD_CONFIRMATION = "Password and Password Confirmation do not match";

  var hasErrors = false;

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }

  function validatePassword() {
    var passwordInputs = $('.form-group input.password');
    var $passwordInput = $(passwordInputs[0]);
    var $passwordConfirmationInput = $(passwordInputs[1]);
    if($passwordInput.val().length < 6) {
      addError($passwordInput,INVALID_PASSWORD);
    }
    if($passwordInput.val() != $passwordConfirmationInput.val()) {
      addError($passwordConfirmationInput,DIFFERENT_PASSWORD_CONFIRMATION);
    }
  }

  function addError($element, error) {
    hasErrors = true;
    removeErrorBlock($element);
    $element.addClass('error');
    var errorBlockHTML = '<span class="help-block">' + error + '</span>';
    $element.after(errorBlockHTML);
  }

  function removeErrorBlock($element) {
    $element.removeClass('error');
    $element.closest('div').find('.help-block').remove();
  }

  function addFileErrorBlock($element, error) {
    removeFileErrorBlock($element);
    addError($element, error);
    $element.find('input').addClass('error');

  }
  function removeFileErrorBlock($element) {
    $element.removeClass('error');
    $element.closest('div.file-upload').find('.help-block').remove();
  }
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
    var $fileSelect = $(this).closest('.file-select');
    var $fileSelectName = $fileUpload.find(".file-select-name");
    if (/^\s*$/.test(filename)) {
      $fileUpload.removeClass('active');
      $fileSelectName.text("No file chosen..."); 
    }
    else {
      $fileUpload.addClass('active');
      $fileSelectName.text(filename.replace("C:\\fakepath\\", "")); 
    }
    removeFileErrorBlock($fileSelect);
  });

  $('.add-remove-member').on('click', function() {
    $(this).toggleClass('danger');
    $(this).find('i').toggleClass('fa-plus  fa-minus');
    var $memberBlockBody = $(this).closest('.team-member-block').find('.animated.body');
    $memberBlockBody.toggleClass('required optional');
    $memberBlockBody.removeClass('rubberBand').addClass('rubberBand');
    var formGroups = $memberBlockBody.find('.form-group');
    formGroups.each(function () {
      var $this = $(this);
      var ticketFormGroupRegex = /_ticket/;
      var hackearthFormGroupRegex = /_hackerearth/;
      var isTicketFormGroup = $this.hasClass('file') && ticketFormGroupRegex.test($this.attr('class'));
      var isHackerearthFormGroup = hackearthFormGroupRegex.test($this.attr('class'));
      if(!isTicketFormGroup && !isHackerearthFormGroup) {
        $this.toggleClass('optional required');
      }
    });
  });

  $('.register-new-btn').on('click', function() {
    var requiredInputs = $('.form-group.required input');
    requiredInputs.each(function() {
      var $this = $(this);
      if($this.hasClass('string')) {
        if($this.val().length < 1) {
          addError($this, EMPTY_INPUT);
        }
      }
      if($this.hasClass('tel')) {
        var phoneNo = $this.val().replace(/ /g, "");
        if(!$.isNumeric(phoneNo) || phoneNo.length < 10) {
          addError($this, INVALID_TELEPHONE);
        }
      }
      if($this.hasClass('email')) {
        if(!validateEmail($this.val())) {
          addError($this, INVALID_EMAIL);
        }
      }
      if($this.hasClass('file')) {
        var $fileUpload = $this.closest('.file-upload');
        var $fileSelect = $this.closest('.file-select');
        if(!$fileUpload.hasClass('active')) {
          addFileErrorBlock($fileSelect, EMPTY_FILE);
        }
      }
    });

    validatePassword();

    if(hasErrors) {
      hasErrors = false;
      var $firstErrorInput = $('input.error').first();
      if($firstErrorInput.hasClass('file')) {
        $firstErrorInput = $firstErrorInput.closest('.file-select');
      }
      $('html, body').animate({
        scrollTop: ($firstErrorInput.offset().top - 150)
      }, function() {
        $('input.error, .file-select.error').animateCss('jello');
      });
      return false;
    }
  });

  $('input').on('focus', function() {
    var $this = $(this);
    removeErrorBlock($this);
  });
}
