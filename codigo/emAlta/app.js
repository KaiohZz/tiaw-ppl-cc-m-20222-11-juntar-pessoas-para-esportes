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