window.initMap = () => {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 56.8520078,
      lng: 53.2109015
   },
    zoom: 16.75,
    zoomControl: false,
    streetViewControl: false,
  });

  var image = 'img/icons/map-marker.png';
  var marker = new google.maps.Marker({
    position: {
      lat: 56.8517312,
      lng: 53.2134458
    },
    map: map,
    icon: image
  });
};

var parallaxBox = document.getElementById('parallax'),
  layers = parallaxBox.children;

var moveLayers = function (e) {
  var initialX = (window.innerWidth / 2) - e.pageX;

  [].slice.call(layers).forEach(function (layer, index) {
    var divider = index / 100,
      positionX = initialX * divider,
      bottomPosition = window.innerHeight / 2 * divider,
      transform2D = "translateX(" + positionX + "px)",
      image = layer.firstElementChild;

    layer.style.transform = transform2D;
    image.style.bottom = "-" + bottomPosition + "px";
  });
};
window.addEventListener('mousemove', moveLayers);
