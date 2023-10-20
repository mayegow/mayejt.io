$('.toggle').on('click', function(){
    if($('.social').hasClass('active')){
        $('.social').removeClass('active')
    }else{
        $('.social').addClass('active')

    }
})