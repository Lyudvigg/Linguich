$(function selectActive(event) {
    $(".header_menu_ul li a").click(function (event) {
        event.preventDefault();
        $(".header_menu_ul li a.header_menu_active").removeClass("header_menu_active");
        $(this).addClass("header_menu_active");
    });
});



$(document).ready(function () {



    var options = {
        onComplete: function (cep) {
            checkphone = true;
        }
    };

    $('.yourphone').mask('+7(000) 000-00-00', options);

})


/*=========================Our courses========================*/

$(function selectActive(event) {
    $(".our_courses_ul_menu li").click(function (event) {
        event.preventDefault();
        $(".our_courses_ul_menu li.our_courses_active").removeClass("our_courses_active");
        $(this).addClass("our_courses_active");
        var our_courses_ul_menu_data = $(this).data('value');
        $(".our_courses_contnet.our_courses_contnet_active").removeClass('our_courses_contnet_active')
        $(".our_courses_contnet:nth-child(" + our_courses_ul_menu_data + ")").addClass('our_courses_contnet_active');
    });
});


// вапросник тест
$('.block_1').show(); $('.block_2').hide(); $('.block_3').hide(); $('.block_4').hide(); $('.block_5').hide();
$( ".menu_order_1" ).click(function() {
    $('.block_1').hide();
    $('.block_2').show();
});
$( ".menu_order_2" ).click(function() {
    $('.block_2').hide();
    $('.block_3').show();
});
$( ".menu_order_3" ).click(function() {
    $('.block_3').hide();
    $('.block_4').show();
});
$( ".menu_order_4" ).click(function() {
    $('.block_4').hide();
    $('.block_5').show();
});

$('.download-box_d-block').show();
$('.download-box_d-none').hide();
$( ".downlod-btn, .download_icon" ).click(function() {
    $('.download-box_d-block').hide();
    $('.download-box_d-none').show();
});




/*=============================List of teachers===========================*/

$(function selectActive(event) {
    $(".list_of_teachers_menu ul li").click(function (event) {
        event.preventDefault();

        $(".list_of_teachers_menu ul li.list_of_teachers_menu_active").removeClass("list_of_teachers_menu_active");

        $(this).addClass("list_of_teachers_menu_active");

        let teachers_menu = $(this).data('value');

        $(".teacher_description_contnet .row .teachers_div.teachers_div_active").removeClass("teachers_div_active");

        $('.teacher_description_contnet .row .teachers_div').each(function () {

            let teachers_description = $(this).data('value')

            if (teachers_menu == 'all') {

                $(this).addClass('teachers_div_active');

            }

            if (teachers_menu == teachers_description) {

                $(this).addClass('teachers_div_active');

            }
        })
    });
});





// карта map

    ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [56.014433, 92.853389],
             zoom: 17
                , controls: ['zoomControl']}, {
                searchControlProvider: 'yandex#search'
            }),

        // Создаём макет содержимого.
       MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.balloonContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([56.014433, 92.853389], {
            hintContent: 'г. Красноярск, ул. Обороны, 3',
            balloonContent: 'г. Красноярск, ул. Обороны, 3'
            /*iconContent: ''*/
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map.png',
            // Размеры метки.
            iconImageSize: [133, 171],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-88, -170],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        myMap.geoObjects
            .add(myPlacemarkWithContent)
        var position = myMap.getGlobalPixelCenter();
        myMap.setGlobalPixelCenter([ position[0], position[1]-30]);
        myMap.behaviors.disable('scrollZoom');

});