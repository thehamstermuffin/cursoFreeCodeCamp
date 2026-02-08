let footballTeam = {
  team: "Super campeones",
  year: 2000,
  headCoach: "Atreyu",
  players: [
    {name:"juanito", position: "forward", isCaptain: false},
    {name:"zutanito", position: "defender", isCaptain: false},
    {name:"merenganito", position: "midfielder", isCaptain: false},
    {name:"clyde", position: "goalkeeper", isCaptain: true},
  ]
}

//get html DOM references
const headCoach = document.getElementById("head-coach");
const team = document.getElementById("team");
const year = document.getElementById("year");
const playerCards = document.getElementById("player-cards");
const playersSelector = document.getElementById("players");

//set texts
headCoach.textContent = footballTeam.headCoach;
team.textContent = footballTeam.team;
year.textContent = footballTeam.year;

playersSelector.addEventListener("change", function() {
    updateTeam();
});

function updateTeam() {
  //clean content
  playerCards.innerHTML = "";
  let filteredPlayers = footballTeam.players;
  if  (playersSelector.value != "all") {
    filteredPlayers = footballTeam.players.filter(filterPlayers)
  }
  filteredPlayers.forEach((player) => addPlayer(player) )
}

function filterPlayers(player) {
  return player.position == playersSelector.value
}

function addPlayer(player) {
  {
    let c = player.isCaptain ? "(Captain) " : ""
    let playerCard = document.createElement("div")
    playerCard.classList.add('player-card');
    playerCard.innerHTML =   '<h2>'+ c + player.name +'</h2><p>Position: ' + player.position + '</p>'
    playerCards.appendChild(playerCard)
  }
}
