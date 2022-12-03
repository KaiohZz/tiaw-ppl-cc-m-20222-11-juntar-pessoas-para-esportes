function insertLocal() {
    const newId = db.places[db.places.length - 1].id + 1
    const inputName = document.getElementById('name').value
    const inputAddress = document.getElementById('address').value
    const inputSportId = document.getElementById('sportId').value
    const inputDescricao = document.getElementById('descricao').value
    const inputImg = document.getElementById('imagem').value
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
    let template = ''
    for (let place of db.places)
        template += `
                    <div class="card">
                        Nome: ${place.name}
                        <br>
                        Endereço: ${place.address}
                        <br>
                        Esporte: ${db.sports[place.sportId]}
                        <br>
                        Descrição: ${place.descricao}
                        <br>
                        <img src="../assets/quadra.png">
                    </div>
                    `
    lista.innerHTML = template
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