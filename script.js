/*

Oppgave

1.Lag et array med dine favoritter innen et tema, musikk, tv, film, bøker etc
2. console.log de forskjellige elementene i arrayet
2. lag et <p> element og legg til en av elementene fra array i <p>


Se på array av objects som heter fontenehus
1. console.log navnet på det 4. huset i array
2. console.log adressen til Fontenehuset Oslo Øst 
3. lag en a link med en href som inneholder nettsiden til Fontenehuset Trondheim

*/

let tvShows = [
  'The last of us',
  'The umbrella academy',
  'The Wire',
  'Game of thrones',
  'Silo',
];

console.log(tvShows.indexOf('The Wire'));

let addBtn = document.querySelector('#addBtn');
let removeBtn = document.querySelector('#removeBtn');
let liste = document.querySelector('#liste');

let handleliste = ['melk', 'brød', 'såpe', 'egg'];

addBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let input = document.querySelector('#input').value;
  handleliste.push(input);
  liste.textContent = handleliste;
});

removeBtn.addEventListener('click', function (e) {
  e.preventDefault();
  handleliste.pop();
  liste.textContent = handleliste;
});

const fontenehus = [
  {
    navn: 'Fontenehuset Oslo Øst',
    adresse: 'Hagegata 25, 0653 OSLO',
    nettside: 'https://www.fontenehuset-osloost.no/',
  },
  {
    navn: 'Fontenehuset Oslo Sentrum',
    adresse: 'Holbergs gate 5, 0166 Oslo',
    nettside: 'https://www.fontenehuset.no/',
  },
  {
    navn: 'Fontenehuset Trondheim',
    adresse: 'Dronningens gate 15, 7011 Trondheim',
    nettside: 'https://www.fontenehuset-trondheim.no/',
  },
  {
    navn: 'Fontenehuset Asker',
    adresse: 'Knud Askers vei 26B',
    nettside: 'https://www.fontenehusetasker.no/',
  },
  {
    navn: 'Fontenehuset Ålesund',
    adresse: 'Lihauggata 8B, 6003 Ålesund',
    nettside: 'https://www.fontenehuset-alesund.no/',
  },
];

console.log(fontenehus[1].adresse);

let cities = {
  England: ['London', 'Bristol', 'Newcastle', 'Liverpool'],
  Italia: ['Milan', 'Torino', 'Firenze', 'Parma', 'Napoli'],
  Frankrike: ['Paris', 'Nantes', 'Marseille', 'Rennes', 'Cannes'],
};

console.log(cities.Italia[1]);
