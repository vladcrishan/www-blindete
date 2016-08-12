function initialize() {
    var myLatLng = {
     lat: 46.141043,
     lng: 21.315124
 };
    var mapProp = {
        center: myLatLng,
        scrollwheel: false,
        zoom: 15
    };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
}
google.maps.event.addDomListener(window, 'load', initialize);