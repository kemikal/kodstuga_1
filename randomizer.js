let randomizer = document.getElementById("randomizer");

let repos = [
    "Phu, Thien Vinh",
    "Johansson, Malin",
    "Tornefors, Vincent",
    "Antin, Isak",
    "Frandén, Sandra",
    "Kjellemo, Sara",
    "Boëthius, Malin Aline",
    "Mohammadisedaghat, Sara",
    "Zachrisson, Linus",
    "Magnusson, Isabelle",
    "Lundgren, Kimmie",
    "Nilsson, Emil",
    "Löfgren, Josefine",
    "Baginski, Olesia",
    "Beyene, Joanna",
    "Engblom, Axel",
    "Malik, Durre Shewar",
    "Linder, Jin",
    "Gammelli, Judith",
    "Steinar, Smári",
    "Milosevic, Igor",
    "Åhlander, Anton",
    "Burle Järvman, Emilie",
    "Pettersson, Antonia",
    "Smeds, Stina",
    "Pahne, Axel",
    "Aliqkaj, Luigj",
    "Alsterlind, Rebecka",
    "Eriksson, Björn",
    "Halmetoja, Toni",
    "Haby, Mats",
    "Sjunnestrand, Petter",
    "Bratt, Tove",
    "Pettersson, Mathilda",
    "Efraimsson, Love",
    "Hammar, Emma",
    "Kamph, Gabrielle",
    "Bertils, Johanna",
    "Oscarsson, Rebecka",
    "Wedin, Lisa"
];

//console.log(repos);

repos.sort();

repos.sort((a,b) => 0.5 - Math.random()); 

console.log(repos.length);

let gruppNr = 0;

while (repos.length > 0) {

    gruppNr++
    let grupp = repos.splice(0,3);

    console.log(grupp);
 
    let gruppTemplate = "<div class='grupp'><strong>Grupp " + gruppNr + "</strong>";

    for (student in grupp) {
        gruppTemplate += "<div class='student'>"+ grupp[student] + "</div>";
    };

    gruppTemplate = gruppTemplate + "</div>";

    document.body.insertAdjacentHTML("beforeend", gruppTemplate);
}
