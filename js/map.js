ymaps.ready(init);
var myMap,
    myPlacemark;

        function init(){
            myMap = new ymaps.Map("map", {
                center: [7.833036, 98.295675],
                zoom: 17
            });
            
        myPlacemark = new ymaps.Placemark ([7.833036, 98.295675], {
            hintContent: 'Phuket',
            ballonContent: 'Hotel',
        });
            
        myMap.geoObjects.add (myPlacemark);    
        }