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

visaAllButton.addEventListener('click', function(){
for (let i = 0; i < Characters.length; i++){

    characterContainer.innerHTML += `
    <div class="card" id="card${Characters[i].id}">
        <h1>${Characters[i].name}</h1>
        <p>Actor: ${Characters[i].actor}</p>
        <p>House: ${Characters[i].House}</p>
        <img src="${Characters[i].image}" alt="${Characters[i].name}">
    </div>
    `
}
}); 



displayCharacters(Characters);
