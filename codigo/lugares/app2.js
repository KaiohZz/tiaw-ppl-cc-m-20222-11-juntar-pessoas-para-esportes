let FILTRO_ESPORTE = 0

function getDescricaoEsporte(id) {
    let idx = db.esportes.findIndex(elem => elem.id == id)
    if (idx != -1)
        return db.esportes[idx].descricao
    else
        return 'Não identificado'
}

function exibeLocais() {
    let str = ''
    for (let i = 0; i < db.locais.length; i++) {
        let local = db.locais[i]
        if (((FILTRO_ESPORTE == 0) || local.idEsporte == FILTRO_ESPORTE)) {
            str += `<div class="card col-md-3" >
            <br>
            <img src="../assets/quadra.png" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${local.nome}</h5>
            <p class="card-text">${local.esporte} - R$${local.valor}</p>
            <p class="card-text">${local.descricao}</p>
            <p class="card-text">${local.endereco}</p>
            </div>
        </div>`
        }
    }
    document.querySelector('#tela').innerHTML = str
}
