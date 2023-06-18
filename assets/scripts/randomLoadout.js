
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
    "KAYO",
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

function YourAgent() {
    var Random = Math.floor(Math.random() * Agents.length);
    var AgentRandom = Agents[Random]
    if(SelectedAgents.includes(AgentRandom) == true && AgentRandom != ""){
        document.getElementById("picture").src= `assets/agent/fullscale/${AgentRandom.toLowerCase()}.png`
        document.getElementById("TheEnd").innerHTML = AgentRandom;
        console.log(`You got ${AgentRandom}!`)
    } else {
        return YourAgent()
    }
}
function YourAgent2() {
    var Random = Math.floor(Math.random() * Agents.length);
    var AgentRandom = Agents[Random]
    if(SelectedAgents.includes(AgentRandom) == true && AgentRandom != ""){
        document.getElementById("picture2").src= `assets/agent/fullscale/${AgentRandom.toLowerCase()}.png`
        document.getElementById("TheEnd2").innerHTML = AgentRandom;
        console.log(`You got ${AgentRandom}!`)
    } else {
        return YourAgent2()
    }
}
function YourAgent3() {
    var Random = Math.floor(Math.random() * Agents.length);
    var AgentRandom = Agents[Random]
    if(SelectedAgents.includes(AgentRandom) == true && AgentRandom != ""){
        document.getElementById("picture3").src= `assets/agent/fullscale/${AgentRandom.toLowerCase()}.png`
        document.getElementById("TheEnd3").innerHTML = AgentRandom;
        console.log(`You got ${AgentRandom}!`)
    } else {
        return YourAgent3()
    }
}
function YourAgent4() {
    var Random = Math.floor(Math.random() * Agents.length);
    var AgentRandom = Agents[Random]
    if(SelectedAgents.includes(AgentRandom) == true && AgentRandom != ""){
        document.getElementById("picture4").src= `assets/agent/fullscale/${AgentRandom.toLowerCase()}.png`
        document.getElementById("TheEnd4").innerHTML = AgentRandom;
        console.log(`You got ${AgentRandom}!`)
    } else {
        return YourAgent4()
    }
}
function YourAgent5() {
    var Random = Math.floor(Math.random() * Agents.length);
    var AgentRandom = Agents[Random]
    if(SelectedAgents.includes(AgentRandom) == true && AgentRandom != ""){
        document.getElementById("picture5").src= `assets/agent/fullscale/${AgentRandom.toLowerCase()}.png`
        document.getElementById("TheEnd5").innerHTML = AgentRandom;
        console.log(`You got ${AgentRandom}!`)
    } else {
        return YourAgent5()
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

var Weapons = [
    "ares",
    "bucky",
    "bulldog",
    "guardian",
    "judge",
    "marshal",
    "odin",
    "operator",
    "phantom",
    "spectre",
    "stinger",
    "vandal",
]

var Pistols = [
    "classic",
    "frenzy",
    "ghost",
    "shorty",
    "sheriff",
]
var Armors = [
    "heavyshields",
    "lightshields",
]

function weapons1() {
    var Random = Math.floor(Math.random() * Weapons.length);
    var WeaponsRandom = Weapons[Random]
        document.getElementById("picture6").src= `assets/weapons/${WeaponsRandom.toLowerCase()}.png`

    var Random2 = Math.floor(Math.random() * Pistols.length);
    var PistolsRandom = Pistols[Random2]
    document.getElementById("picture11").src= `assets/weapons/${PistolsRandom.toLowerCase()}.png`

    var Random3 = Math.floor(Math.random() * Armors.length);
    var ArmorsRandom = Armors[Random3]
    document.getElementById("picture16").src= `assets/weapons/${ArmorsRandom.toLowerCase()}.png`

}
function weapons2() {
    var Random = Math.floor(Math.random() * Weapons.length);
    var WeaponsRandom = Weapons[Random]
    document.getElementById("picture7").src= `assets/weapons/${WeaponsRandom.toLowerCase()}.png`

    var Random2 = Math.floor(Math.random() * Pistols.length);
    var PistolsRandom = Pistols[Random2]
    document.getElementById("picture12").src= `assets/weapons/${PistolsRandom.toLowerCase()}.png`

   var Random3 = Math.floor(Math.random() * Armors.length);
    var ArmorsRandom = Armors[Random3]
    document.getElementById("picture17").src= `assets/weapons/${ArmorsRandom.toLowerCase()}.png`

}
function weapons3() {
    var Random = Math.floor(Math.random() * Weapons.length);
    var WeaponsRandom = Weapons[Random]
    document.getElementById("picture8").src= `assets/weapons/${WeaponsRandom.toLowerCase()}.png`

    var Random2 = Math.floor(Math.random() * Pistols.length);
    var PistolsRandom = Pistols[Random2]
    document.getElementById("picture13").src= `assets/weapons/${PistolsRandom.toLowerCase()}.png`

    var Random3 = Math.floor(Math.random() * Armors.length);
    var ArmorsRandom = Armors[Random3]
    document.getElementById("picture18").src= `assets/weapons/${ArmorsRandom.toLowerCase()}.png`

}
function weapons4() {
    var Random = Math.floor(Math.random() * Weapons.length);
    var WeaponsRandom = Weapons[Random]
    document.getElementById("picture9").src= `assets/weapons/${WeaponsRandom.toLowerCase()}.png`

    var Random2 = Math.floor(Math.random() * Pistols.length);
    var PistolsRandom = Pistols[Random2]
    document.getElementById("picture14").src= `assets/weapons/${PistolsRandom.toLowerCase()}.png`

    var Random3 = Math.floor(Math.random() * Armors.length);
    var ArmorsRandom = Armors[Random3]
    document.getElementById("picture19").src= `assets/weapons/${ArmorsRandom.toLowerCase()}.png`

}
function weapons5() {
    var Random = Math.floor(Math.random() * Weapons.length);
    var WeaponsRandom = Weapons[Random]
    document.getElementById("picture10").src= `assets/weapons/${WeaponsRandom.toLowerCase()}.png`

    var Random2 = Math.floor(Math.random() * Pistols.length);
    var PistolsRandom = Pistols[Random2]
    document.getElementById("picture15").src= `assets/weapons/${PistolsRandom.toLowerCase()}.png`

    var Random3 = Math.floor(Math.random() * Armors.length);
    var ArmorsRandom = Armors[Random3]
    document.getElementById("picture20").src= `assets/weapons/${ArmorsRandom.toLowerCase()}.png`

}