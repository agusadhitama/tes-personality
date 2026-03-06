function loadMap(lat,lon){

let map=L.map('map').setView([lat,lon],10)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution:'© OpenStreetMap'
}).addTo(map)

L.marker([lat,lon]).addTo(map)
.bindPopup("Lokasi kamu")
.openPopup()

}