!function(e,s,a,r){"use strict";var l=e("#contact-form");l.submit(function(s){e(".form-group").removeClass("has-error"),e(".help-block").remove();var a={name:e('input[name="form-name"]').val(),email:e('input[name="form-email"]').val(),subject:e('input[name="form-subject"]').val(),message:e('textarea[name="form-message"]').val()};e.ajax({type:"POST",url:"process.php",data:a,dataType:"json",encode:!0}).done(function(s){s.success?l.html('<div class="alert alert-success">'+s.message+"</div>"):(s.errors.name&&(e("#name-field").addClass("has-error"),e("#name-field").find(".col-lg-10").append('<span class="help-block">'+s.errors.name+"</span>")),s.errors.email&&(e("#email-field").addClass("has-error"),e("#email-field").find(".col-lg-10").append('<span class="help-block">'+s.errors.email+"</span>")),s.errors.subject&&(e("#subject-field").addClass("has-error"),e("#subject-field").find(".col-lg-10").append('<span class="help-block">'+s.errors.subject+"</span>")),s.errors.message&&(e("#message-field").addClass("has-error"),e("#message-field").find(".col-lg-10").append('<span class="help-block">'+s.errors.message+"</span>")))}).fail(function(e){console.log(e)}),s.preventDefault()})}(jQuery,window,document);