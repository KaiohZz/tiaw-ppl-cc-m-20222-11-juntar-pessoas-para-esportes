var db_default = {
    matches: [
        {
            id: 1,
            name: "partida teste",
            sportId: 1,
            date: "10/10/2022",
            placeId: 1,
            playerIds: [1, 2, 3]
        },
        {
            id: 2,
            name: "partida teste",
            sportId: 1,
            date: "10/10/2022",
            placeId: 1,
            playerIds: [1, 2, 3]
        },
        {
            id: 3,
            name: "partida teste",
            sportId: 1,
            date: "10/10/2022",
            placeId: 1,
            playerIds: [1, 2, 3]
        },
        {
            id: 4,
            name: "partida teste",
            sportId: 1,
            date: "10/10/2022",
            placeId: 1,
            playerIds: [1, 2, 3]
        },
        {
            id: 5,
            name: "partida teste",
            sportId: 1,
            date: "10/10/2022",
            placeId: 1,
            playerIds: [1, 2, 3]
        },
    ],
    places: [
        { id: 1, name: "Arena tupinambas" },
        { id: 2, name: "Pé na areia" },
        { id: 3, name: "Ginásio Orion" }
    ],
    users: [
        { id: 1, name: "user 1" },
        { id: 2, name: "user 2" },
        { id: 3, name: "user 3" },
        { id: 3, name: "user 4" }
    ],
    sports: [
        { id: 1, name: "Futebol" },
        { id: 2, name: "Beach Tennis" },
        { id: 3, name: "Volei" }
    ]
}
load()
eventos()

function eventos() {
    let eventos = document.getElementById('cardList')
    let template = ''
    for (let i = 0; i < db.matches.length; i++)
        template += `<div class="card">
                        Desc: ${db.matches[i].name}
                        <br>
                        Modalidade: ${db.sports[db.matches[i].sportId].name}
                        <br>
                        Date: ${db.matches[i].date}
                        <br>
                        Local: ${db.places[db.matches[i].placeId].name}
                        <br>
                        Integrantes: ${db.matches[i].playerIds}
                    </div>`
    eventos.innerHTML = template
}
function log() {
    console.log(sessionStorage)
    console.log(localStorage)
    console.log(db)
}
function limpar() {
    localStorage.clear()
    sessionStorage.clear()
    db = null;
}
function load() {
    db = JSON.parse(localStorage.getItem('db'));
    if (!db) {
        db = db_default
        localStorage.setItem('db', JSON.stringify(db))
    };
}