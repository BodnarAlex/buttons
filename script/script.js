$(window).on('load', function() {

    //массив цветов
    const colors = ['gray', 'white', 'green', 'blue', 'red', 'violet', 'yellow'];
    const audio = new Audio('source/muzyka.mp3');
    const boom = new Audio('source/vzryiv.mp3');

    //слушатель на кнопки цветов
    $('.colour_item').click(function(){
        const list = this.classList;
        if(list.length==2)
            ChangeColor(list[1]);
    });  

    $('.button').click(function(){
        const list = this.classList;
       switch (list[1]){
        case 'change_color':
            var index = getRandomInt(0, colors.length);
            ChangeColor(colors[index]);
            break;
        case 'change_buttons':
            console.log(2);
            break;
        case 'change_nav':
            console.log(3);
            break;
        case 'on_music':
            $('.on_music').html("Пауза");
            toggleClassAndHTML("on_music", "off_music");
            audio.play();
            break;
        case 'off_music':
            $('.off_music').html("Продолжить");
            toggleClassAndHTML("off_music", "on_music");
            audio.pause();
            break;    
        case 'delete_button':
            console.log(5);
            break;
        case 'fly_header':
            $("#fly").animate({bottom: "1400px", left: "1700px"}, 2300, function(){
                $("#fly").css({bottom: "-350px", left: "-700px"});
            });
            break;
        case 'strong_button':
            console.log(7);
            break;
        case 'boom_everything':
            audio.pause();
            boom.play();
            alert("Вы проиграли");
            $('body').remove();
            $("html").addClass('boom');
            break;
       }
    });

    //функция изменения цвета
    function ChangeColor(color){
        if(color){
            $('.active').removeClass('active');
            $('.'+color).addClass('active');
            $("html").css("background", color);
            $("main").css("border-color", color);
        }
    }

    //Максимум не включается, минимум включается
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
      }

      function toggleClassAndHTML(beforeClass, futureClass) {
        $('.'+beforeClass).addClass(futureClass);
        $('.'+beforeClass).removeClass(beforeClass);
      }
});