function initMap(){
    map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([-54.56620, -25.6048]),
            zoom: 8
        })
    });
    return map;
};