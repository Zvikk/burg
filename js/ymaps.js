ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [59.93529665162337,30.313006222045388],
        zoom: 11
    }, {
        searchControlProvider: 'yandex#search'
    }),



    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([59.93427062019422,30.33597400425075], {
            hintContent: 'Мы тут',
            balloonContent: 'Мы тут'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: './icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
    myPlacemark2 = new ymaps.Placemark([59.94305641116852,30.26421954868435], {
        hintContent: 'Мы тут',
        balloonContent: 'Мы тут'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: './icons/map-marker.svg',
        // Размеры метки.
        iconImageSize: [48, 48],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });

    myPlacemark3 = new ymaps.Placemark([59.952184268454054,30.296491887551536], {
        hintContent: 'Мы тут',
        balloonContent: 'Мы тут'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: './icons/map-marker.svg',
        // Размеры метки.
        iconImageSize: [48, 48],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });

    myMap.geoObjects
    .add(myPlacemark)
    .add(myPlacemark2)
    .add(myPlacemark3);

    myMap.behaviors.disable('scrollZoom');
});