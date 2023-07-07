$(window).on('load', function() {

 //массив цветов
    const colors = ['gray', 'white', 'green', 'blue', 'red', 'violet', 'yellow'];

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
            console.log(4);
            break;
        case 'delete_button':
            console.log(5);
            break;
        case 'fly_header':
            console.log(6);
            break;
        case 'strong_button':
            console.log(7);
            break;
        case 'boom_everything':
            console.log(8);
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
});