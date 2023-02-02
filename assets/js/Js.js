const url = "https://api.themoviedb.org/3/discover/movie?api_key=27ee3958861736148a0122a3bb092665&primary_release_date.gte=2022-09-15&primary_release_date.lte=2023-01-31";

let listefilm = document.getElementById('listefilm');




fetch(url)
    .then((tropbienleJS) => tropbienleJS.json())
    .then((tropbienleJS) => {
        console.log(tropbienleJS);

    const films = tropbienleJS.results;

    let nbtestfilm = 0;
 

  

    for (let film of films) {
        


        listefilm.innerHTML += `
        <div id="film">
          
    
            <div class="desc">
                <div id="titre">
                <h2 class="lestitres">${film.title}</h2>
                </div>
                <p>Date de sortie : ${film.release_date}</p>
                <img src="https://image.tmdb.org/t/p/original${film.poster_path}" class="affiche">
                <div id="overview">
                <p>${film.overview}</p>
                </div>
                <p id="langue">Langue : ${film.original_language}</p>
                <p id="genre">Genre : ${film.genre_ids}</p>            
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" id="${nbtestfilm}">
                <i class="fa-solid fa-star"></i>  Evaluer le film
                </button>
               
            </div>
            
            <div id="affichercomm${nbtestfilm}" class="lescomms">
                <h5>Evaluations</h5>
            </div>

            
        </div>
        `;

        nbtestfilm++;

        let testnote = film.id;
        console.log(testnote);


} // fin du for of
 

///////////////////////////////////////////////
listefilm.onclick = function(event) {
    let target = event.target;

    if (target.id == "0") {
        testfilmtitre = films[0].title;
        console.log(testfilmtitre);
    }
    if (target.id == "1") {
        testfilmtitre = films[1].title;
        console.log(testfilmtitre);
    }
    if (target.id == "2") {
        testfilmtitre = films[2].title;
        console.log(testfilmtitre);
    }
    if (target.id == "3") {
        testfilmtitre = films[3].title;
        console.log(testfilmtitre);
    }
    if (target.id == "4") {
        testfilmtitre = films[4].title;
        console.log(testfilmtitre);
    }
    if (target.id == "5") {
        testfilmtitre = films[5].title;
        console.log(testfilmtitre);
    }
    if (target.id == "6") {
        testfilmtitre = films[6].title;
        console.log(testfilmtitre);
    }
    if (target.id == "7") {
        testfilmtitre = films[7].title;
        console.log(testfilmtitre);
    }
    if (target.id == "8") {
        testfilmtitre = films[8].title;
        console.log(testfilmtitre);
    }
    if (target.id == "9") {
        testfilmtitre = films[9].title;
        console.log(testfilmtitre);
    }
    if (target.id == "10") {
        testfilmtitre = films[10].title;
        console.log(testfilmtitre);
    }
    if (target.id == "11") {
        testfilmtitre = films[11].title;
        console.log(testfilmtitre);
    }
    if (target.id == "12") {
        testfilmtitre = films[12].title;
        console.log(testfilmtitre);
    }
    if (target.id == "13") {
        testfilmtitre = films[13].title;
        console.log(testfilmtitre);
    }
    if (target.id == "14") {
        testfilmtitre = films[14].title;
        console.log(testfilmtitre);
    }
    if (target.id == "15") {
        testfilmtitre = films[15].title;
        console.log(testfilmtitre);
    }
    if (target.id == "16") {
        testfilmtitre = films[16].title;
        console.log(testfilmtitre);
    }
    if (target.id == "17") {
        testfilmtitre = films[17].title;
        console.log(testfilmtitre);
    }
    if (target.id == "18") {
        testfilmtitre = films[18].title;
        console.log(testfilmtitre);
    }
    if (target.id == "19") {
        testfilmtitre = films[19].title;
        console.log(testfilmtitre);
    }

}


let etoile1 = document.getElementById('etoile1');
let etoile2 = document.getElementById('etoile2');
let etoile3 = document.getElementById('etoile3');
let etoile4 = document.getElementById('etoile4');
let etoile5 = document.getElementById('etoile5');


etoile1.addEventListener("mouseover", etoileN1);
etoile2.addEventListener("mouseover", etoileN2);
etoile3.addEventListener("mouseover", etoileN3);
etoile4.addEventListener("mouseover", etoileN4);
etoile5.addEventListener("mouseover", etoileN5);


function etoileN1() {
    etoile1.style.color = "yellow";
    etoile2.style.color = "black";
    etoile3.style.color = "black";
    etoile4.style.color = "black";
    etoile5.style.color = "black";
}

function etoileN2() {
    etoile1.style.color = "yellow";
    etoile2.style.color = "yellow";
    etoile3.style.color = "black";
    etoile4.style.color = "black";
    etoile5.style.color = "black";
}

function etoileN3() {
    etoile1.style.color = "yellow";
    etoile2.style.color = "yellow";
    etoile3.style.color = "yellow";
    etoile4.style.color = "black";
    etoile5.style.color = "black";
}

function etoileN4() {
    etoile1.style.color = "yellow";
    etoile2.style.color = "yellow";
    etoile3.style.color = "yellow";
    etoile4.style.color = "yellow";
    etoile5.style.color = "black";
}

function etoileN5() {
    etoile1.style.color = "yellow";
    etoile2.style.color = "yellow";
    etoile3.style.color = "yellow";
    etoile4.style.color = "yellow";
    etoile5.style.color = "yellow";
}

etoile1.addEventListener("click", etoileN1note);
etoile2.addEventListener("click", etoileN2note);
etoile3.addEventListener("click", etoileN3note);
etoile4.addEventListener("click", etoileN4note);
etoile5.addEventListener("click", etoileN5note);

let affichernote = document.getElementById('affichernote');
let note = 0;


function etoileN1note() {
    note = 1;
    console.log(note);
    affichernote.innerHTML = "  " + note;
}
function etoileN2note() {
    note = 2;
    console.log(note);
    affichernote.innerHTML = "  " + note;
}
function etoileN3note() {
    note = 3;
    console.log(note);
    affichernote.innerHTML = "  " + note;
}
function etoileN4note() {
    note = 4;
    console.log(note);
    affichernote.innerHTML = "  " + note;
}
function etoileN5note() {
    note = 5;
    console.log(note);
    affichernote.innerHTML = "  " + note;
}



let envoyer = document.getElementById('envoyer');

envoyer.addEventListener('click', envoyercomm);

function envoyercomm() {

    let myInput = document.getElementById('commentaire');
    let contenuimput = myInput.value;

    let listeObjets = testfilmtitre;
    let mesObjetsString = localStorage.getItem(listeObjets);
    let mesObjets = JSON.parse(mesObjetsString) ?? [];

    let newObjet = { note, contenuimput };

    mesObjets.push(newObjet);

    localStorage.setItem(listeObjets, JSON.stringify(mesObjets));
    window.location.reload();
}

/////////////////////////////////////////////////////////
    
let affichercomm0 = document.getElementById('affichercomm0');
let recupcomm0 = JSON.parse(localStorage.getItem(films[0].title));


affichercomm0.innerHTML += `
<p>Note : ${recupcomm0[0].note} <i class="fa-solid fa-star"></i></p>
<p>Commentaire : ${recupcomm0[0].contenuimput} </p>
`;

let affichercomm1 = document.getElementById('affichercomm1');
let recupcomm1 = JSON.parse(localStorage.getItem(films[1].title));

affichercomm1.innerHTML += `
<p>Note : ${recupcomm1[0].note} <i class="fa-solid fa-star"></i></p>
<p>Commentaire : ${recupcomm1[0].contenuimput} </p>
`;

let affichercomm2 = document.getElementById('affichercomm2');
let recupcomm2 = JSON.parse(localStorage.getItem(films[2].title));

affichercomm2.innerHTML += `
<p>Note : ${recupcomm2[0].note} <i class="fa-solid fa-star"></i></p>
<p>Commentaire : ${recupcomm2[0].contenuimput} </p>
`;

let affichercomm3 = document.getElementById('affichercomm3');
let recupcomm3 = JSON.parse(localStorage.getItem(films[3].title));

affichercomm3.innerHTML += `
<p>Note : ${recupcomm3[0].note} <i class="fa-solid fa-star"></i></p>
<p>Commentaire : ${recupcomm3[0].contenuimput} </p>
`;

let affichercomm4 = document.getElementById('affichercomm4');
let recupcomm4 = JSON.parse(localStorage.getItem(films[4].title));

affichercomm4.innerHTML += `
<p>Note : ${recupcomm4[0].note} <i class="fa-solid fa-star"></i> </p>
<p>Commentaire : ${recupcomm4[0].contenuimput} </p>
`;

let affichercomm5 = document.getElementById('affichercomm5');
let recupcomm5 = JSON.parse(localStorage.getItem(films[5].title));

affichercomm5.innerHTML += `
<p>Note : ${recupcomm5[0].note} <i class="fa-solid fa-star"></i></p>
<p>Commentaire : ${recupcomm5[0].contenuimput} </p>
`;

let affichercomm6 = document.getElementById('affichercomm6');
let recupcomm6 = JSON.parse(localStorage.getItem(films[6].title));

affichercomm6.innerHTML += `
<p>Note : ${recupcomm6[0].note} <i class="fa-solid fa-star"></i></p>
<p>Commentaire : ${recupcomm6[0].contenuimput} </p>
`;

let affichercomm7 = document.getElementById('affichercomm7');
let recupcomm7 = JSON.parse(localStorage.getItem(films[7].title));

affichercomm7.innerHTML += `
<p>Note : ${recupcomm7[0].note} <i class="fa-solid fa-star"></i></p>
<p>Commentaire : ${recupcomm7[0].contenuimput} </p>
`;

let affichercomm8 = document.getElementById('affichercomm8');
let recupcomm8 = JSON.parse(localStorage.getItem(films[8].title));

affichercomm8.innerHTML += `
<p>Note : ${recupcomm8[0].note} <i class="fa-solid fa-star"></i></p>
<p>Commentaire : ${recupcomm8[0].contenuimput} </p>
`;

let affichercomm9 = document.getElementById('affichercomm9');
let recupcomm9 = JSON.parse(localStorage.getItem(films[9].title));

affichercomm9.innerHTML += `
<p>Note : ${recupcomm9[0].note} <i class="fa-solid fa-star"></i></p>
<p>Commentaire : ${recupcomm9[0].contenuimput} </p>
`;

let affichercomm10 = document.getElementById('affichercomm10');
let recupcomm10 = JSON.parse(localStorage.getItem(films[10].title));

affichercomm10.innerHTML += `
<p>Note : ${recupcomm10[0].note}<i class="fa-solid fa-star"></i> </p>
<p>Commentaire : ${recupcomm10[0].contenuimput} </p>
`;

let affichercomm11 = document.getElementById('affichercomm11');
let recupcomm11 = JSON.parse(localStorage.getItem(films[11].title));

affichercomm11.innerHTML += `
<p>Note : ${recupcomm11[0].note} <i class="fa-solid fa-star"></i></p>
<p>Commentaire : ${recupcomm11[0].contenuimput} </p>
`;

let affichercomm12 = document.getElementById('affichercomm12');
let recupcomm12 = JSON.parse(localStorage.getItem(films[12].title));

affichercomm12.innerHTML += `
<p>Note : ${recupcomm12[0].note} <i class="fa-solid fa-star"></i></p>
<p>Commentaire : ${recupcomm12[0].contenuimput} </p>
`;

let affichercomm13 = document.getElementById('affichercomm13');
let recupcomm13 = JSON.parse(localStorage.getItem(films[13].title));

affichercomm13.innerHTML += `
<p>Note : ${recupcomm13[0].note} <i class="fa-solid fa-star"></i></p>
<p>Commentaire : ${recupcomm13[0].contenuimput} </p>
`;

let affichercomm14 = document.getElementById('affichercomm14');
let recupcomm14 = JSON.parse(localStorage.getItem(films[14].title));

affichercomm14.innerHTML += `
<p>Note : ${recupcomm14[0].note} <i class="fa-solid fa-star"></i></p>
<p>Commentaire : ${recupcomm14[0].contenuimput} </p>
`;

let affichercomm15 = document.getElementById('affichercomm15');
let recupcomm15 = JSON.parse(localStorage.getItem(films[15].title));

affichercomm15.innerHTML += `
<p>Note : ${recupcomm15[0].note} <i class="fa-solid fa-star"></i></p>
<p>Commentaire : ${recupcomm15[0].contenuimput} </p>
`;

let affichercomm16 = document.getElementById('affichercomm16');
let recupcomm16 = JSON.parse(localStorage.getItem(films[16].title));

affichercomm16.innerHTML += `
<p>Note : ${recupcomm16[0].note} <i class="fa-solid fa-star"></i></p>
<p>Commentaire : ${recupcomm16[0].contenuimput} </p>
`;

let affichercomm17 = document.getElementById('affichercomm17');
let recupcomm17 = JSON.parse(localStorage.getItem(films[17].title));

affichercomm17.innerHTML += `
<p>Note : ${recupcomm17[0].note} <i class="fa-solid fa-star"></i></p>
<p>Commentaire : ${recupcomm17[0].contenuimput} </p>
`;

let affichercomm18 = document.getElementById('affichercomm18');
let recupcomm18 = JSON.parse(localStorage.getItem(films[18].title));

affichercomm18.innerHTML += `
<p>Note : ${recupcomm18[0].note} <i class="fa-solid fa-star"></i></p>
<p>Commentaire : ${recupcomm18[0].contenuimput} </p>
`;

let affichercomm19 = document.getElementById('affichercomm19');
let recupcomm19 = JSON.parse(localStorage.getItem(films[19].title));

affichercomm19.innerHTML += `
<p>Note : ${recupcomm19[0].note} <i class="fa-solid fa-star"></i></p>
<p>Commentaire : ${recupcomm19[0].contenuimput} </p>
`;

}); // fin du fetch




    
