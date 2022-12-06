function insertLocal() {
    const newId = db.places[db.places.length - 1].id + 1
    const inputName = document.getElementById('inputName').value
    const inputAddress = document.getElementById('inputAddress').value
    const inputSportId = parseInt(document.getElementById('inputSportId').value)
    const inputDescricao = document.getElementById('inputDescription').value
    const inputImg = '../assets/quadra.png' //document.getElementById('imagem').value
    const local = {
        id: newId,
        name: inputName,
        address: inputAddress,
        sportId: inputSportId,
        descricao: inputDescricao,
        imagem: inputImg
    }
    db.places.push(local)
    localStorage.setItem('db', JSON.stringify(db))
}
function exibeLocais() {
    let lista = document.getElementById('cardList')
    if (lista) {
        let template = ''
        for (let place of db.places) {
            const index = db.sports.findIndex(x => x.id === place.sportId)
            template += `
                <div class="card">
                    Nome: ${place.name}
                    <br>
                    Endereço: ${place.address}
                    <br>
                    Esporte: ${db.sports[index].name}
                    <br>
                    Descrição: ${place.descricao}
                    <br><br>
                    <div>
                        <img src="${place.imagem}"></img>
                    </div>
                </div>`
        }
        lista.innerHTML = template
    }
}
function updateLocal(id) {
    const inputName = document.getElementById('name').value
    const inputAddress = document.getElementById('address').value
    const inputSportId = document.getElementById('sportId').value
    const inputDescricao = document.getElementById('descricao').value
    const inputImg = document.getElementById('imagem').value
    const local = {
        id: id,
        name: inputName,
        address: inputAddress,
        sportId: inputSportId,
        descricao: inputDescricao,
        imagem: inputImg
    }
    const index = db.places.findIndex(x => x.id === id)
    db.places[index] = local
    localStorage.setItem('db', JSON.stringify(db))
}
function deleteLocal(id) {
    let index = db.places.findIndex(x => x.id === id)
    db.places.splice(index, 1)
    localStorage.setItem('db', JSON.stringify(db))
}

// ========= Inicializar
setTimeout(exibeLocais, 50)