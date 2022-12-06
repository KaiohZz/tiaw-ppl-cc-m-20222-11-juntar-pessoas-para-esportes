function salvarPartida() {
    const inputName = document.getElementById('inputName').value
    const inputHostId = parseInt(document.getElementById('inputHost').value)
    const inputGuestId = parseInt(document.getElementById('inputHost').value)
    const inputPlaceId = parseInt(document.getElementById('inputHost').value)
    const inputDate = document.getElementById('inputDate').value
    const novaPartida = {
        name: inputName,
        hostId: inputHostId,
        guestId: inputGuestId,
        placeId: inputPlaceId,
        date: inputDate,
    }
    db.matches.push(novaPartida)
    localStorage.setItem('db', JSON.stringify(db))
    imprimeDados()
}
function imprimeDados() {
    let template = ''
    for (match of db.matches) {
        const hostIndex = db.times.findIndex(x => x.id === match.hostId)
        const guestIndex = db.times.findIndex(x => x.id === match.guestId)
        const placeIndex = db.places.findIndex(x => x.id === match.placeId)
        template += `
            <div class="card">
                Nome: ${match.name}
                <br>
                Time 1: ${db.times[hostIndex].name}
                <br>
                Time 2: ${db.times[guestIndex].name}
                <br>
                Data: ${match.date}
                <br>
                Lugar: ${db.places[placeIndex].name}
                <br>
            </div>`
    }
    let tela = document.getElementById('cardList')
    tela.innerHTML = template
}

// ========= Inicializar
setTimeout(imprimeDados, 50)
