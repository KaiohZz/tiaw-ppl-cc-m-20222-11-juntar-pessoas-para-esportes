function insertLocal() {
    const newId = db.locais[db.locais.length - 1].id + 1
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

    db.locais.push(local)
    localStorage.setItem('db_locais', JSON.stringify(db))
}


function updateLocal(id) {
    let index = db.locais.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.locais[index].nome = local.nome
    db.locais[index].endereco = local.endereco
    db.locais[index].esporte = local.esporte
    db.locais[index].idEsporte = local.idEsporte
    db.locais[index].valor = local.valor
    db.locais[index].descricao = local.descricao
    db.locais[index].imagem = local.imagem
    localStorage.setItem('db', JSON.stringify(db))
}

function deleteLocal(id) {
    db.locais = db.locais.filter(element => element.id != id)
    localStorage.setItem('db', JSON.stringify(db))
} 


const index = array.indexOf(5);
if (index > -1) { // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
}

myArray.find(x => x.id === '45').foo;
myArray.findIndex(x => x.id === '45');