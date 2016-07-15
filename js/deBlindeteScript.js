/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";

    // Active navbar button
    $(".nav a").on("click", function () {
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

});

function initialize() {
    
    var myLatLng = {lat: 46.141043, lng: 21.315124};
    
    var mapProp = {
        center: myLatLng,
        zoom: 15
    };

    var map = new google.maps.Map(document.getElementById("map"), mapProp);
    
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
