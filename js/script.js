$(window).on('scroll', function(){
    if (window.scrollY >= 100){
        $('.navBox').css('background','rgba(255,255,255,.7)');
    }else if(window.scrollY <= 100){
        $('.navBox').css('background','rgba(255,255,255)');
    }
})




$(function(){
    $.getJSON('https://api.openweathermap.org/data/2.5/forecast?id=1835848&appid=90dda4a9ad533db48bad866d3d27fbea&units=metric', function(data){
        // console.log(data.list[0].main.temp)

        const $temp=data.list[0].main.temp;
        const $chighttemp=data.list[0].main.temp_max;
        const $clowtemp=data.list[0].main.temp_min;
        const $icon=data.list[0].weather[0].icon;

        $('.ctemp').append($temp);
        $('.chighttemp').append($chighttemp);
        $('.clowtemp').append($clowtemp);
        $('.cicon').append('<img src="https://openweathermap.org/img/wn/'+$icon+'@2x.png">');
        $('h2').prepend($Date);
    })
})


// 모달창
$('#login').on('click', function(){
$('.black-bg').addClass('show-modal');
})

$('#close').on('click', function(){
    $('.black-bg').removeClass('show-modal');
  })