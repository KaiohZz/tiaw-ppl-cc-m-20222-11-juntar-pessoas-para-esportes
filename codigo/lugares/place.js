
function find(id) {
    let x = db.places.find(x => x.id === 3)
    console.log(x)
}


// function insertLocal() {
//     const newId = db.locais[db.locais.length - 1].id + 1
//     const inputName = document.getElementById('name').value
//     const inputAddress = document.getElementById('address').value
//     const inputSportId = document.getElementById('sportId').value
//     const inputDescricao = document.getElementById('descricao').value
//     const inputImg = document.getElementById('imagem').value

//     const local = {
//         id: newId,
//         name: inputName,
//         address: inputAddress,
//         sportId: inputSportId,
//         descricao: inputDescricao,
//         imagem: inputImg
//     }

//     db.locais.push(local)
//     localStorage.setItem('db_locais', JSON.stringify(db))
// }
// function updateLocal(id) {
//     db.locais myArray.find(x => x.id === '45').foo;
    // let index = db.locais.map(obj => obj.id).indexOf(id);
    // db.locais[index].nome = local.nome
    // db.locais[index].endereco = local.endereco
    // db.locais[index].esporte = local.esporte
    // db.locais[index].idEsporte = local.idEsporte
    // db.locais[index].valor = local.valor
    // db.locais[index].descricao = local.descricao
    // db.locais[index].imagem = local.imagem
    // localStorage.setItem('db', JSON.stringify(db))
// }
// function deleteLocal(id) {
//     db.locais = db.locais.filter(element => element.id != id)
//     localStorage.setItem('db', JSON.stringify(db))
// } 
// const index = array.indexOf(5);
// if (index > -1) { // only splice array when item is found
//   array.splice(index, 1); // 2nd parameter means remove one item only
// }
// myArray.find(x => x.id === '45').foo;
// myArray.findIndex(x => x.id === '45');
// // myArray.filter(x => x.id === '45');
// // myArray.filter(x => x.id === '45').map(x => x.foo)
// let FILTRO_ESPORTE = 0

// function getDescricaoEsporte(id) {
//     let idx = db.esportes.findIndex(elem => elem.id == id)
//     if (idx != -1)
//         return db.esportes[idx].descricao
//     else
//         return 'Não identificado'
// }

// function exibeLocais() {
//     let str = ''
//     for (let i = 0; i < db.locais.length; i++) {
//         let local = db.locais[i]
//         if (((FILTRO_ESPORTE == 0) || local.idEsporte == FILTRO_ESPORTE)) {
//             str += `<div class="card col-md-3" >
//             <br>
//             <img src="../assets/quadra.png" class="card-img-top" alt="...">
//             <div class="card-body">
//             <h5 class="card-title">${local.nome}</h5>
//             <p class="card-text">${local.esporte} - R$${local.valor}</p>
//             <p class="card-text">${local.descricao}</p>
//             <p class="card-text">${local.endereco}</p>
//             </div>
//         </div>`
//         }
//     }
//     document.querySelector('#tela').innerHTML = str
// }
