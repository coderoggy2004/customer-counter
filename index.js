let Personcount=0

function increment(){
    Personcount+=1
    document.getElementById("count-el").textContent=Personcount
    console.log("The button was clicked")
    console.log(Personcount) 
}

function save(){
    let prevEntry =" " + Personcount + " - " 
    document.getElementById("save-el").textContent+=prevEntry //textContent used instead of innerText or innerHTML
    console.log("Total People : " ,Personcount)
    Personcount=0
    document.getElementById("count-el").textContent=Personcount
}

