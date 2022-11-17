var db_local_inicial = {
    locais: [
        {
            id: 1,
            nome: "Arena Pampulha",
            endereco: "São Luis - Av. Portugal, 270",
            esporte: "Futebol",
            idEsporte: 1,
            valor: "50",
            descricao: "38 mestros de comprimento e 18 de largura",
            imagem: "https://novonegocio.com.br/wp-content/uploads/2013/11/Quadra-de-Futebol-Society-768x419.jpg"
        }, {
            id: 2,
            nome: "Arena Palestra",
            endereco: "Oliveira Salazar, 1401 - Santa Monica",
            esporte: "Futebol",
            idEsporte: 1,
            valor: "70",
            descricao: "Funcionamento: 7:00 - 00:00",
            imagem: "https://stampagramas.com.br/wp-content/uploads/2019/01/2019-02-05-guia-para-construcao-de-campo-society-802x506-1.jpg"
        }, {
            id: 3,
            nome: "Arena Marco Zero",
            endereco: "Av. Sicília, 223 - Bandeirantes",
            esporte: "Futebol",
            idEsporte: 1,
            valor: "90",
            descricao: "Funcionamento: 7:00 - 23:30",
            imagem: "https://ax3.com.br/imagens/informacoes/construcao-campo-futebol-society-02.jpg"
        }, {
            id: 4,
            nome: "Arena Pampulha",
            endereco: "São Luis - Av. Portugal, 270",
            esporte: "Volei",
            idEsporte: 2,
            valor: "50",
            descricao: "38 mestros de comprimento e 18 de largura",
            imagem: "http://www.juventus.com.br/wp-content/uploads/2011/08/quadra-de-volei.jpg"
        }, {
            id: 5,
            nome: "Arena Palestra",
            endereco: "Oliveira Salazar, 1401 - Santa Monica",
            esporte: "Volei",
            idEsporte: 2,
            valor: "70",
            descricao: "Funcionamento: 7:00 - 00:00",
            imagem: "https://www.juventus.com.br/wordpress/wp-content/uploads/2011/08/quadra-de-areia.jpg"
        }, {
            id: 6,
            nome: "Arena Marco Zero",
            endereco: "Av. Sicília, 223 - Bandeirantes",
            esporte: "Basquete",
            idEsporte: 3,
            valor: "90",
            descricao: "Funcionamento: 7:00 - 23:30",
            imagem: "https://static.vakinha.com.br/uploads/vakinha/image/213664/IMG_2538.JPG?ims=700x410"
        }, {
            id: 7,
            nome: "Arena Pampulha",
            endereco: "São Luis - Av. Portugal, 270",
            esporte: "Volei",
            idEsporte: 2,
            valor: "50",
            descricao: "38 mestros de comprimento e 18 de largura",
            imagem: "https://stampagramas.com.br/wp-content/uploads/2019/07/2019-07-12-aluguel-de-quadras-esportivas-dicas-para-atrair-clientes.jpg"
        }, {
            id: 8,
            nome: "Arena Palestra",
            endereco: "Oliveira Salazar, 1401 - Santa Monica",
            esporte: "Basquete",
            idEsporte: 3,
            valor: "70",
            descricao: "Funcionamento: 7:00 - 00:00",
            imagem: "https://pereirabarreto.sp.gov.br/wp-content/uploads/2020/12/Prefeitura-Municipal-esta-finalizando-a-construcao-da-nova-quadra-de-basquete-ao-lado-Ginasio-Municipal-de-Esportes-4.jpg"
        }
    ],

    esportes: [
        { id: 1, descricao: 'Futebol' },
        { id: 2, descricao: 'Volei' },
        { id: 3, descricao: 'Basquete' }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_locais'));
if (!db) {
    db = db_local_inicial
};
// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertLocal(local) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.locais.length != 0) 
      novoId = db.locais[db.locais.length - 1].id + 1;
    let novoLocal = {
        id: novoId,
        nome: local.nome,
        endereco: local.endereco,
        esporte: local.esporte,
        idEsporte: local.idEsporte,
        valor: local.valor,
        descricao: local.descricao,
        imagem: local.imagem
    };

    // Insere o novo objeto no array
    db.locais.push(novoLocal);
    displayMessage("Local inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_locais', JSON.stringify(db));
}


function updateLocal(id, local) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.locais.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.local[index].nome = local.nome,
    db.local[index].endereco = local.endereco,
    db.local[index].esporte = local.esporte,
    db.local[index].idEsporte = local.idEsporte,
    db.local[index].valor = local.valor,
    db.local[index].descricao = local.descricao,
    db.local[index].imagem = local.imagem

    displayMessage("Local alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_locais', JSON.stringify(db));
}

function deleteLocal(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.locais = db.locais.filter(function (element) { return element.id != id });

    displayMessage("Local removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_locais', JSON.stringify(db));
}