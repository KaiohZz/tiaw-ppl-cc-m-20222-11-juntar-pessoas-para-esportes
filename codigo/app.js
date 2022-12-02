function loginUser(login, senha) {
    let x = document.getElementById("user");
    sessionStorage.setItem('user', x.value)
    window.location.href = "./emAlta/index.html";
}
function limpar() {
    localStorage.clear()
    sessionStorage.clear()
    db = null;
}
// ========== DB

const db_default = {
    times: [
        {
            nome: "ABC do sul",
            esporte: "futebol",
            integrantes: [
                "paulo otavio",
                "mario nascimento",
                "armado golpe",
                "jose da silva",
            ],
        },
        {
            nome: "DEF do leste",
            esporte: "volei",
            integrantes: [
                "pedro 123 de oliveira 4",
                "mario do armario",
                "armado nascimento",
                "jose da silva",
            ],
        },
        {
            nome: "UND do araguari",
            esporte: "chádreis",
            integrantes: [
                "pedro 123 de oliveira 4",
                "mario do armario",
                "armado nascimento",
                "jose da silva",
            ],
        },
    ],
    matches: [
        {
            id: 1,
            name: "partida teste",
            sportId: 1,
            date: "10/10/2022",
            placeId: 1,
            playerIds: [1, 2, 3]
        },
        {
            id: 2,
            name: "partida teste",
            sportId: 1,
            date: "10/10/2022",
            placeId: 1,
            playerIds: [1, 2, 3]
        },
        {
            id: 3,
            name: "partida teste",
            sportId: 1,
            date: "10/10/2022",
            placeId: 1,
            playerIds: [1, 2, 3]
        },
        {
            id: 4,
            name: "partida teste",
            sportId: 1,
            date: "10/10/2022",
            placeId: 1,
            playerIds: [1, 2, 3]
        },
        {
            id: 5,
            name: "partida teste",
            sportId: 1,
            date: "10/10/2022",
            placeId: 1,
            playerIds: [1, 2, 3]
        },
    ],
    places: [
        { id: 1, name: "Arena tupinambas" },
        { id: 2, name: "Pé na areia" },
        { id: 3, name: "Ginásio Orion" }
    ],
    users: [
        { id: 1, name: "user 1" },
        { id: 2, name: "user 2" },
        { id: 3, name: "user 3" },
        { id: 3, name: "user 4" }
    ],
    sports: [
        { id: 1, name: "Futebol" },
        { id: 2, name: "Beach Tennis" },
        { id: 3, name: "Volei" }
    ]
}