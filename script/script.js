$(window).on('load', function() {

    //массив цветов
    const colors = ['gray', 'white', 'green', 'blue', 'red', 'violet', 'yellow'];
    var new_colors = [];
    const audio = new Audio('source/muzyka.mp3');
    const boom = new Audio('source/vzryiv.mp3');
    //const good = new Audio('source/good.mp3');
    var buttons = 8;
    var checkOne = [];

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
        // case 'change_buttons':
        //     console.log(2);
        //     break;
        // case 'change_nav':


        //     var new_colors = colors;
        //     shuffle(new_colors);

        //     console.log(('new_colors'));
        //     console.log((new_colors));

        //     for(var i =0; i<4; i++){
        //         console.log(i);
        //         var colorItem =  $('.colour_item')[i].classList;
        //         var k = i-1;    
        //         $('.colour_item:nth-child(5)').addClass(new_colors[i]);
        //         $('.colour_item:nth-child(5)').removeClass(colorItem[1]);
        //         //$('.'+colorItem[1]).removeClass(colorItem[1]);
        //        // toggleClassAndHTML(colorItem[1], new_colors[i]);
        //         //$('.colour_item:nth-child('+i+')').remove();
        //     }
        //     console.log(new_colors);
        //     break;


            
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
            var del = getRandomInt(1, buttons);
            console.log(del);
            checkOne =  $('.button');
            console.log(checkOne.length);
            if(checkOne.length == 2){
                alert("Победа!");
                good.play();
                $('body').remove();
            $   ("html").addClass('boom');
            }else{
                $('.content_item:nth-child('+del+')').remove();
            buttons--;
            }
            break;
        case 'fly_header':
            $("#fly").animate({bottom: "1400px", left: "1700px"}, 4300, function(){
                $("#fly").css({bottom: "-500px", left: "-1500px"});
            });
            break;
        case 'strong_button':
            $('.strong_button').html("Вразнобой");
            toggleClassAndHTML("strong_button", "not_strong_button");
            toggleClassAndHTML("content_item", "content_item_improve");
            break;
        case 'not_strong_button':
            $('.not_strong_button').html("Упорядочить");
            toggleClassAndHTML("not_strong_button", "strong_button");
            toggleClassAndHTML("content_item_improve", "content_item");
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

      function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
});