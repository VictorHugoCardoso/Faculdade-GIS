const gate = 'https://earthengine.googleapis.com/map';

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
            zoom: 10
        })
    });
    return map;
};

function addLayer(map,mapid,token){
    var url = gate +'/'+mapid+'/{z}/{x}/{y}'+'?token=' + token;

    scene = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: url
        })
    });
    map.addLayer(scene);
};
