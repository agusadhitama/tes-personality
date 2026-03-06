async function getLocation(){

let res=await fetch("https://ipapi.co/json/")
let data=await res.json()

return{

city:data.city,
country:data.country_name,
lat:data.latitude,
lon:data.longitude

}

}