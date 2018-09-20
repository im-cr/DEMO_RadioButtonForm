$(document).ready(function(){

    var radio = $('input[type="radio"]');

    radio.on('click',function(){
        var current = $(this),
            otherCont = $('.other-cont'),
            otherText = $('.other-text');

        if(current.hasClass('other')){
            if(otherCont.hasClass('is-hidden')){
                otherCont.removeClass('is-hidden');
                otherText.removeAttr('disabled');
            }
        }else{
            otherCont.addClass('is-hidden');
            otherText.prop("disabled",true);
        }


    });


});