
function initMap() {
  var andwil = {lat: 47.437445, lng: 9.270587};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: andwil
  });
  var marker = new google.maps.Marker({
    position: andwil,
    map: map
  });
}
