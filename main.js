import {films} from './data/films.js'
import {people} from './data/people.js'

const main = document.querySelector('main');

let chronologicalFilmsArr = [...films];

function characterLookup(dataUrl) {
    let characterId = dataUrl.substring(dataUrl.length-3, dataUrl.length-1);
    if(characterId.includes("/")) {
        characterId = characterId.substring(1,2);
    }
    for(let i = 0; i < people.length; i++) {
        let arrUrl = people[i].url;
        let personId = arrUrl.substring(arrUrl.length-3, arrUrl.length-1);
        if(personId.includes("/")) {
            personId = personId.substring(1,2);
        }
        if(characterId == personId) {
            return people[i].name;
        }
    }
    return "Character not found";  
}

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

function formateDate(date) {
    var monthName = monthLookup(parseInt(date.substring(5,7)));
    var dateName = "" + monthName + ", " + date.substring(8, 10) + " " + date.substring(0, 4);
    return dateName;
}

function monthLookup(monthNum) {
    switch(monthNum) {
        case 1:
            return "January";
            break;
        case 2:
            return "February";
            break;
        case 3:
            return "March";
            break;
        case 4:
            return "April";
            break;
        case 5:
            return "May";
            break;
        case 6:
            return "June";
            break;
        case 7:
            return "July";
            break;
        case 8:
            return "August";
            break;
        case 9:
            return "September";
            break;
        case 10:
            return "October";
            break;
        case 11:
            return "November";
            break;
        case 12:
            return "December";
            break;
        default:
            return monthNum;
            break;
    } 
}

function formateCharacterList(characterList) {
    let str = "";
    for(let i = 0; i < characterList.length-1; i++) {
        str += characterList[i] + ", ";
    }
    str += characterList[characterList.length-1];
    return str;
}

insertionSortByDate(chronologicalFilmsArr);



for(let i = 0; i < chronologicalFilmsArr.length; i++) {
    let dateName = formateDate(chronologicalFilmsArr[i].release_date);
    let figure = document.createElement('figure');
    let figImg = document.createElement('img');
    let figCaption = document.createElement('figcaption');
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${i+1}.jpg`
    figCaption.textContent = chronologicalFilmsArr[i].title;
    let announcement = document.createElement('p');
    let releaseAnnouncement = "Released in theaters on: " + dateName;
    let characterArr = [];
    for(let j = 0; j < chronologicalFilmsArr[i].characters.length; j++) {
        characterArr.push(characterLookup(chronologicalFilmsArr[i].characters[j]));
    }
    let characterList = "Starring: " + formateCharacterList(characterArr);
    announcement.textContent = releaseAnnouncement + "\n\n" + characterList;
    //console.log(characterList);
    figure.appendChild(figImg);
    figure.appendChild(figCaption);
    main.appendChild(figure);
    main.appendChild(announcement);
}
