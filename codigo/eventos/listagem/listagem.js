var dict = loadDict()
var events = getEvents();


function filterEvent(){
    let filterText = document.querySelector("#search-field").value.toLowerCase()
    div_events = $('#div-events')
    div_events.empty()
    if(!filterText){
        for(i=0; i<events.length; i++){
            updateDivSports(events[i])
        }
    } else {
        for(i=0; i<events.length; i++){
            if(events[i].sport.toLowerCase().includes(filterText)){
                updateDivSports(events[i])
            }
        }
    }
}


function postEvent(jsonDados){
    db_events = localStorage.getItem('db-events')
    obj_events = db_events ? JSON.parse(db_events) : { events: []}
    obj_events.events.push(jsonDados)
    console.log(obj_events)
    localStorage.setItem ('db-events', JSON.stringify(obj_events));
}
function getEvents(){
    db_events = localStorage.getItem('db-events')
    return (obj_events = db_events ? JSON.parse(db_events) : { events: []}).events
}

$(document).ready(function(){
    this.dict = loadDict(dict)
    div_events = $('#div-events')
    div_events.empty()
    
    if(events.length == 0){
        insertEvent({place: "A Definir.", sport: "Volei", date: "A Definir.", nParticipants: "-", hour: "A Definir."})
        insertEvent({place: "A Definir.", sport: "Tenis", date: "A Definir.", nParticipants: "-", hour: "A Definir."})
        insertEvent({place: "A Definir.", sport: "Futebol", date: "A Definir.", nParticipants: "-", hour: "A Definir."})
        insertEvent({place: "A Definir.", sport: "Basquete", date: "A Definir.", nParticipants: "-", hour: "A Definir."})
        insertEvent({place: "A Definir.", sport: "Handbol", date: "A Definir.", nParticipants: "-", hour: "A Definir."})

    } else {
        for(i=0; i<events.length; i++){
            updateDivSports(events[i])
        }
    }
});

function insertEvent(event){
    postEvent(event)
    events.push(event)
    updateDivSports(event)
}

function updateDivSports(item){
    div_events = $('#div-events')
    div_events.append(`
        <div class="card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3" style="width: 18rem; text-align: center;">
        <img class="img-card"
            src="${dict.has(item.sport) ? dict.get(item.sport) : dict.get("Unknown")}"
            alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${item.sport}</h5>
            <p class="card-text">Data/Hora: ${item.date} - ${item.hour}</p>
            <p class="card-text">Local: ${item.place}</p>
            <p class="card-text">Participantes: ${item.nParticipants}</p>
        </div>
    </div>
        `)
}


function loadDict(dict){
    dict = new Map()
    dict.set("Volei", "https://static.vecteezy.com/ti/vetor-gratis/p1/7490903-volei-silhueta-arte-gratis-vetor.jpg")
    dict.set("Futebol", "https://img.freepik.com/fotos-gratis/futebol-masculino-jogador-de-futebol-treinando-em-acao-isolado-em-estudio-gradiente-em-luz-de-neon_155003-15990.jpg?w=2000")
    dict.set("Basquete", "https://img.freepik.com/fotos-gratis/retrato-de-corpo-inteiro-de-um-jogador-de-basquete-com-bola_155003-12957.jpg?w=2000")
    dict.set("Tenis", "https://img.freepik.com/fotos-premium/equipamento-de-tenis-no-campo-de-tenis_23-2148320683.jpg?w=2000")
    dict.set("Handbol", "https://img.freepik.com/vetores-premium/ilustracao-do-homem-jogando-handebol-desenho-em-preto-e-branco-fundo-branco_231873-1119.jpg?w=2000")
    dict.set("Unknown", "https://img.freepik.com/vetores-gratis/ponto-de-interrogacao-moderno-para-pagina-de-ajuda-e-suporte_1017-27395.jpg?w=2000")
    return dict

}

