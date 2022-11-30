const dbMock = {
    eventos:
[{
    id:1,
    valor:100,
    data:'01/11/2022', 
    local:'Quadra do Seu Zé', 
    idEsporte:1, 
    presenca:0},
{
    id:2, 
    valor:100, 
    data:'01/11/2022', 
    local:'Quadra centro', 
    idEsporte:1, 
    presenca:0},
    
    { id:3,
    valor:100,
    data:'01/11/2022',
    local:'Quadra buritis',
    idEsporte:1,
    presenca:0
    }
    
    ],
    esportes:[
    {id:1, descricao: 'futebol'},
    {id:2, descricao: 'basquete'},
    {id:3, descricao: 'vôlei'},
   
]
}
let db = JSON.parse (localStorage.getItem('dbEventos'))
if (!db) {
    db = dbMock
    localStorage.setItem('dbEventos', JSON.stringify (db))
}


function getDescricaoEsportes (id) {
    let idx = db.esportes.findIndex (elem => elem.id == id)
    if (idx != -1)
        return db.esportes[idx].descricao
    else    
        return 'Não identificado'
}
function exibeEventos () {
    let str = ''
    for (let i=0; i < db.eventos.length; i++) {
        let evento = db.eventos[i]
                    str += `<div class="card col-md-4" >
            <img src="https://picsum.photos/120" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${evento.local}</h5>
            <a href="evento.html?id=${evento.id}" class="btn btn-primary">Mais detalhes</a>
            </div>
          </div>`
        }
        document.querySelector('#tela').innerHTML = str
        document.body.onload = () => {exibeEventos();}

    }
    
    function exibeEvento (id) {
        let idx = db.eventos.findIndex (elem => elem.id == id)
        if (idx != -1) {
            let evento = db.eventos[idx]
            let confir =""
            if(evento.presenca==true) confir= "Confirmada"
            else confir = "Não confirmada" 
            let str =  `<div class="card col-md-4" >
            <img src="https://picsum.photos/120" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${evento.local}</h5>
              <p>Valor:R$${evento.valor}<p><br>
              <p>Data:${evento.data}<p><br>
              <p>Esporte:${getDescricaoEsportes(evento.idEsporte)}<p><br>
              <p>Presença:${confir}
              
            </div>
          </div>`
                
        
            document.querySelector('#tela').innerHTML = str    
        }
        else {
            document.querySelector('#tela').innerHTML = '<h1>Evento não encontrado</h1>'    
        }
    
    }