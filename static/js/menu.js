$('.mjt-navigation').on('click', function(){
    $(this).addClass('active')
    $('.mjt-close').addClass('active')
})

$('.mjt-close').on('click', function(){
    $(this).removeClass('active')
    $('.mjt-navigation').removeClass('active')
})