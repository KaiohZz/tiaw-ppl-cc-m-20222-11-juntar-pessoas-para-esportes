function salvarTime() {
    const inputName = document.getElementById('inputName').value
    const inputSportId = parseInt(document.getElementById('inputSportId').value)
    let inputIntegrantes = []
    document.getElementsByName('inputIntegrantes').forEach(element => inputIntegrantes.push(element.value))
    const novoTime = {
        name: inputName,
        sportId: inputSportId,
        integrantes: inputIntegrantes,
    }
    db.times.push(novoTime)
    localStorage.setItem('db', JSON.stringify(db))
    imprimeDados()
}
function imprimeDados() {
    let template = ''
    for (time of db.times) {
        const sportIndex = db.sports.findIndex(x => x.id === time.sportId)
        template += `
            <div class="card">
                Time: ${time.name}
                <br>
                Esporte: ${db.sports[sportIndex].name}
                <br>
                Integrantes:
                <br>
                ${time.integrantes}
            </div>`
    }
    let tela = document.getElementById('cardList')
    tela.innerHTML = template
}

// ========= Inicializar
setTimeout(imprimeDados, 50)
