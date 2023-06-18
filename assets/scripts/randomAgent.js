var Agents = [
    "Brimstone",
    "Viper",
    "Omen",
    "Killjoy",
    "Cypher",
    "Sova",
    "Sage",
    "Phoenix",
    "Jett",
    "Reyna",
    "Raze",
    "Breach",
    "Skye",
"Yoru",
"Astra",
"KAY/O",
"Chamber",
"Neon",
"Fade",
"Harbor",
"Gekko",
]
var SelectedAgents = []

function Load(){
    AlreadyPicked()
let AgentsImages = document.querySelectorAll(".PickYourAgent img");
    for (let i = 0; i < AgentsImages.length; i++) {
        AgentsImages[i].addEventListener("click", function() {
            if(AgentsImages[i].className === 'picked'){
                AgentsImages[i].classList.remove('picked')
                SelectedAgents[i] = ""
            } else {
                AgentsImages[i].className = 'picked'
                SelectedAgents[i] = Agents[i]
            }
            localStorage.setItem("Picks", JSON.stringify(SelectedAgents));
        });
    }
}

}
function YourAgent() {
    var Random = Math.floor(Math.random() * Agents.length);
    var AgentRandom = Agents[Random]
    if(SelectedAgents.includes(AgentRandom) == true && AgentRandom != ""){
        document.getElementById("picture").src = `assets/agent/fullscale/${AgentRandom.toLowerCase()}.png`
        document.getElementById("TheEnd").innerHTML = AgentRandom;
        console.log(`You got ${AgentRandom}!`)
    } else {
        return YourAgent()
    }
}


function AlreadyPicked(){
    if (localStorage.getItem("Picks") === null){
        localStorage.setItem("Picks", JSON.stringify(SelectedAgents));
    } else {
    }
    SelectedAgents = JSON.parse(localStorage.getItem("Picks"));
    let AgentsImages = document.querySelectorAll(".PickYourAgent img");
    for (let i = 0; i < Agents.length; i++) {
        if(SelectedAgents[i] == Agents[i]){
            AgentsImages[i].className = 'picked'
        } else {
            continue
        }
    }
}
