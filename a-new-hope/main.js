import {films} from '../data/films.js'
import {people} from '../data/people.js'
import {planets} from '../data/planets.js'
import {species} from '../data/species.js'
import {starships} from '../data/starships.js'
import {vehicles} from '../data/vehicles.js'

const main = document.querySelector('main');
const header = document.querySelector('header');

let h1 = document.createElement('h1');
h1.textContent = "Star Wars: A New Hope";
header.appendChild(h1);

let img = document.createElement('img');
img.src = `https://starwars-visualguide.com/assets/img/films/${1}.jpg`
main.appendChild(img);

function dataLookup(givenDataset, givenArrayVal) {
    for(let i = 0; i < givenArrayVal.length; i++) {
        let dataUrl = givenArrayVal[i];
        let givenId = dataUrl.substring(dataUrl.length-3, dataUrl.length-1);
        if(givenId.includes("/")) {
            givenId = givenId.replace("/","");
        }
    }
    let returnVal = "";
    for(let i = 0; i < givenArrayVal.length-1; i++) {
        returnVal += givenDataset[i].name + ", ";
    }
    returnVal += givenDataset[givenArrayVal.length-1].name

    return returnVal;
}

let chronologicalFilmsArr = [...films];

function insertionSortByDate(arr) {
    for(let i = 0; i < arr.length-1; i++) {        
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j].release_date.substring(0, 4) < arr[i].release_date.substring(0, 4)) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

insertionSortByDate(chronologicalFilmsArr);

var charactersData = dataLookup(people, chronologicalFilmsArr[0].characters);
var charactersString = "Characters that appear in this film are: \n" + charactersData;
let charStr = document.createElement('p');
charStr.textContent = charactersString;
main.appendChild(charStr);

var planetsData = dataLookup(planets, chronologicalFilmsArr[0].planets);
let planetsString = "Planets that appear in this film are: \n" + planetsData;
let planetsStr = document.createElement('p');
planetsStr.textContent = planetsString;
main.appendChild(planetsStr);

var speciesData = dataLookup(species, chronologicalFilmsArr[0].species);
let speciesString = "Species that appear in this film are: \n" + speciesData;
let speciesStr = document.createElement('p');
speciesStr.textContent = speciesString;
main.appendChild(speciesStr);

var starshipsData = dataLookup(starships, chronologicalFilmsArr[0].starships);
let starshipsString = "Starships that appear in this film are: \n" + starshipsData;
let starshipsStr = document.createElement('p');
starshipsStr.textContent = starshipsString;
main.appendChild(starshipsStr);

var vehiclesData = dataLookup(vehicles, chronologicalFilmsArr[0].vehicles);
let vehiclesString = "Vehicles that appear in this film are: \n" + vehiclesData;
let vehiclesStr = document.createElement('p');
vehiclesStr.textContent = vehiclesString;
main.appendChild(vehiclesStr);


