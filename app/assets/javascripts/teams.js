/* global $ */

function handleRegistrationForm() { // eslint-disable-line no-unused-vars 

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }

  function validatePassword() {
    var passwordInputs = $('.form-group input.password');
    var $passwordInput = $(passwordInputs[0]);
    var $passwordConfirmationInput = $(passwordInputs[1]);
    if($passwordInput.val().length < 6) {
      console.log('password can not be less than 6 chars');
    }
    if($passwordInput.val() != $passwordConfirmationInput.val()) {
      console.log('password and password confirmation does not match');
    }
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
      var isTicketFormGroup = $this.hasClass('file') && ticketFormGroupRegex.test($this.attr('class'));
      if(!isTicketFormGroup) {
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
          console.log('this input seems empty' + $this);
        }
      }
      if($this.hasClass('tel')) {
        var phoneNo = $this.val().replace(/ /g, "");
        if(!$.isNumeric(phoneNo) || phoneNo.length < 10) {
          console.log('this does not seem like a phone number');
        }
      }
      if($this.hasClass('email')) {
        if(!validateEmail($this.val())) {
          console.log("this does not seem like a valid email");
        }
      }
      if($this.hasClass('file')) {
        var $fileSelect = $this.closest('.file-upload');
        if(!$fileSelect.hasClass('active')) {
          console.log('this file is required');
        }
      }
    });

    validatePassword();

    return false;
  });
}
