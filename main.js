import {films} from './data/films.js'
import {people} from './data/people.js'


const main = document.querySelector('main');

// films.forEach(film => {
//     let p = document.createElement("p");
//     document.body.appendChild(p);    
//     p.textContent = film.title;
// })

for(let i = 0; i < 7; i++) {
    let figure = document.createElement('figure');
    let figImg = document.createElement('img');
    let figCaption = document.createElement('figcaption');
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${i+1}.jpg`
    figCaption.textContent = films[i].title;

    figure.appendChild(figImg);
    figure.appendChild(figCaption);
    main.appendChild(figure);
}
