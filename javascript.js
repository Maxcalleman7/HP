const visaAllButton = document.getElementById('visa-alla');
const slytherinButton = document.getElementById('slytherin');
const gryffindorButton = document.getElementById('gryffindor');

const Characters = [

    {id: 1 , name: 'Harry Potter', actor: 'Daniel Radcliffe', image: 'Bilder/HarryPotter.png', House: 'Gryffindor'},
    {id: 2 , name: 'Hermione Granger', actor: 'Emma Watson', image: 'Bilder/HermioneGranger.png', House: 'Gryffindor'},
    {id: 3 , name: 'Ron Weasley', actor: 'Rupert Grint', image: 'Bilder/RonWeasley.png', House: 'Gryffindor'},
    {id: 4 , name: 'Draco Malfoy', actor: 'Tom Felton', image: 'Bilder/DracoMalfoy.png', House: 'Slytherin'},
    {id: 5 , name: 'Severus Snape', actor: 'Alan Rickman', image: 'Bilder/SeverusSnape.png' , House: 'Slytherin'},
]

const characterContainer = document.getElementById('cards-container');
function displayCharacters(list) {
    characterContainer.innerHTML = '';
    for (let i = 0; i < list.length; i++){
        characterContainer.innerHTML += `
        <div class="card" id="card${list[i].id}">
            <h1>${list[i].name}</h1>
            <p>Actor: ${list[i].actor}</p>
            <p>House: ${list[i].House}</p>
            <img src="${list[i].image}" alt="${list[i].name}">
        </div>
        `
    }
}

visaAllButton.addEventListener('click', function(){
    displayCharacters(Characters);
});

slytherinButton.addEventListener('click', function(){
    const filtered = Characters.filter(c => c.House && c.House.toLowerCase() === 'slytherin');
    displayCharacters(filtered);
});

gryffindorButton.addEventListener('click', function(){
    const filtered = Characters.filter(c => c.House && c.House.toLowerCase() === 'gryffindor');
    displayCharacters(filtered);
});

displayCharacters(Characters);
