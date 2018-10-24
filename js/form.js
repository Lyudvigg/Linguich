(function ($) {
    'use strict';

    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;

    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.html(response);
        setTimeout(function () {
            message.fadeOut();
        }, 5000);
        form.find('input:not([type="submit"]), textarea').val('');
      
    }

    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.html(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 5000);
       
    }
    
    form.submit(function (e) {
        var form = $(this);
        var error = false;
        var button = $(this).find('button');

        if(error == false) {
            if (form.find('input[name="checkbox"]').prop('checked')==false) {
                alert('Подтвердите согласие на обработку персональных данных!');
                return false;
            }
        }

       
        e.preventDefault();
        form_data = $(this).serialize();                   
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
    
})(jQuery);