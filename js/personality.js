function analyzePersonality(scores){

let result=[]

if((scores.extrovert||0)>(scores.introvert||0))
result.push({title:"Tipe Sosial",desc:"Extrovert — energik dalam interaksi sosial"})
else
result.push({title:"Tipe Sosial",desc:"Introvert — nyaman dengan refleksi pribadi"})

if((scores.planner||0)>(scores.spontaneous||0))
result.push({title:"Perencanaan",desc:"Cenderung merencanakan sebelum bertindak"})
else
result.push({title:"Perencanaan",desc:"Lebih spontan dan fleksibel"})

if((scores.empathetic||0)>(scores.analytical||0))
result.push({title:"Empati",desc:"Memiliki empati yang tinggi"})
else
result.push({title:"Empati",desc:"Lebih fokus pada analisis logis"})

if((scores.open||0)>(scores.structured||0))
result.push({title:"Keterbukaan",desc:"Terbuka pada pengalaman baru"})
else
result.push({title:"Keterbukaan",desc:"Lebih nyaman dengan struktur"})

return result

}