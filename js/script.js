let currentQuestion=0
let scores={}
let username=""

function startTest(){

username=document.getElementById("username").value

if(username===""){
alert("Masukkan nama dulu")
return
}

document.getElementById("start").classList.add("hidden")
document.getElementById("quiz").classList.remove("hidden")

loadQuestion()

}

function loadQuestion(){

let q=questions[currentQuestion]

document.getElementById("question").innerText=q.q

let answersDiv=document.getElementById("answers")
answersDiv.innerHTML=""

q.a.forEach(a=>{

let btn=document.createElement("button")

btn.innerText=a.text

btn.onclick=()=>{

scores[a.trait]=(scores[a.trait]||0)+1

nextQuestion()

}

answersDiv.appendChild(btn)

})

updateProgress()

}

function nextQuestion(){

currentQuestion++

if(currentQuestion>=questions.length){

startAnalysis()
return

}

loadQuestion()

}

function updateProgress(){

let percent=(currentQuestion/questions.length)*100
document.getElementById("progress").style.width=percent+"%"

}

function startAnalysis(){

document.getElementById("quiz").classList.add("hidden")
document.getElementById("scanPage").classList.remove("hidden")

let p=0

let interval=setInterval(()=>{

p++

document.getElementById("analysisProgress").style.width=p+"%"

if(p>=100){

clearInterval(interval)
showResults()

}

},40)

}

async function showResults(){

document.getElementById("scanPage").classList.add("hidden")
document.getElementById("resultPage").classList.remove("hidden")

let results=analyzePersonality(scores)

let grid=document.getElementById("resultGrid")

results.forEach(r=>{

let card=document.createElement("div")

card.className="card"

card.innerHTML="<h3>"+r.title+"</h3><p>"+r.desc+"</p>"

grid.appendChild(card)

})

document.getElementById("summary").innerText=
"Halo "+username+". Berdasarkan jawaban kamu, sistem mendeteksi pola kepribadian yang menggambarkan cara kamu berpikir, bekerja, dan berinteraksi dengan lingkungan."

let loc=await getLocation()

document.getElementById("location").innerText=
loc.city+", "+loc.country

loadMap(loc.lat,loc.lon)

}

function shareResult(){

navigator.clipboard.writeText(window.location.href)

alert("Link berhasil disalin!")

}