var map = L.map('map').setView([39.924317, 116.390619],14,);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: 'OSM'})
	.addTo(map);

var route =[
    [39.898457, 116.391844],
    [39.898595, 116.377947],
    [39.898341, 116.368001],
    [39.898063, 116.357144],
    [39.899095, 116.351934],
    [39.905871, 116.350670],
    [39.922329, 116.349800],
    [39.931017, 116.349671],
    [39.939104, 116.349225],
    [39.942233, 116.349910],
    [39.947263, 116.366892],
    [39.947568, 116.387537],
    [39.947764, 116.401988],
    [39.947929, 116.410824],
    [39.947558, 116.426740],
    [39.939700, 116.427338],
    [39.932404, 116.427919],
    [39.923109, 116.428377],
    [39.907094, 116.429583],
    [39.906858, 116.414040],
    [39.906622, 116.405321],
    [39.906324, 116.394954],
    [39.906308, 116.391264],
    [39.916611, 116.390748]
  ];

var speedList = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 4, 4, 4, 3, 2, 2, 1, 1, 1]

var routeLine = L.polyline(route, {
    weight: 8
  });
var realRouteLine = L.polyline([], {
weight: 8,
color: '#FF9900'
}).addTo(map);

var carIcon = L.icon({
    iconSize: [37, 26],
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
