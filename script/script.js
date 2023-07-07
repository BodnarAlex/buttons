$(window).on('load', function() {

 //массив цветов
    const colors = ['gray', 'white', 'green', 'blue', 'red', 'violet', 'yellow'];

    //слушатель на кнопки цветов
    $('.colour_item').click(function(){
        console.log(13);
        const list = this.classList;
        var color;
        if(list.length==2){
            color = list[1];
            ChangeColor(color)
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
});