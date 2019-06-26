function initMap(){
    var mousePositionControl = new ol.control.MousePosition({
        className: 'custom-mouse-position',
        target: document.getElementById('location'),
        coordinateFormat: ol.coordinate.createStringXY(5),
        undefinedHTML: '&nbsp;'
      });
    map = new ol.Map({

        controls: ol.control.defaults({
            attribution: false
          }).extend([mousePositionControl]),
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([-54.544682,-25.540124]),
            zoom: 18
        })
    });
    return map;
};