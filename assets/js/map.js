
mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hbmRhbGFwYSIsImEiOiJjazY2cjdkcjAwNDY4M2VwODFyZnZpbDg5In0.yZurTAPPw4f1D-VkffaHpw';
var map = new mapboxgl.Map({
    container: 'footerMap',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [6.0498717, 52.3446363],
    zoom: 15
});

// Create a default Marker and add it to the map.
var marker1 = new mapboxgl.Marker({
        color: '#D2121C',
    })
    .setLngLat([6.0498717, 52.3446363])

.addTo(map);
