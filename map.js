var map = L.map('map').setView([36.76915749894907, 126.93158129637204],24,);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: 'OSM'})
	.addTo(map);

var route =[
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769197, 126.931475],
    [36.769758, 126.932436]
  ];

var speedList = [0.1, 0.1, 0.2, 0.2, 0.3, 0.3, 0.3, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.5, 0.5, 0.4, 0.4, 0.4, 0.3, 0.2, 0.2, 0.1, 0.1, 0.1]

var routeLine = L.polyline(route, {
    weight: 8
  });
var realRouteLine = L.polyline([], {
weight: 8,
color: '#FF9900'
}).addTo(map);

var carIcon = L.icon({
    iconSize: [35, 25],
    iconAnchor: [19, 13],
    iconUrl: './img/car-yellow.png'
  })

var animatedMarker = L.animatedMarker(routeLine.getLatLngs(), {
    speedList: speedList,
    interval: 200, 
    icon: carIcon,
  }).addTo(map)

animatedMarker.on('click', markerOnClick)  

function markerOnClick(e){
  var messages = ["content1", "content2", "content3"]
  var contentList = messages.map(function(msg, index){
    var contentid = `message${index}`
    var buttonHtml = `<a class="btn-collapse" data-bs-toggle="collapse" href="#${contentid}" role="button" aria-expanded="false" aria-controls="${contentid}">
                      Message #${index}
                      </a>`
    var collapseHtml = `<div class="collapse" id="${contentid}">
                      <div class="card card-body">
                          ${msg}
                      </div>
                      </div>`
    var html = buttonHtml + collapseHtml;
    return html;
  })
  document.getElementById("message-content").innerHTML = contentList.join("");
}

function startClick(){
    animatedMarker.start()
}
function pauseClick() {
    animatedMarker.pause();
}
function stopClick() {
    newLatlngs = []
    animatedMarker.stop();
}
