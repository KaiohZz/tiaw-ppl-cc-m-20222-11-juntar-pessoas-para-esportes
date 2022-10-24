var db_mock_contatos = {
  "data": [
    {
      "id": 1,
      "nome": "joão",
      "idade": "23",
      "contato": "91233-9999",
      "esporte favorito": "futebol"
    },
    {
      "id": 2,
      "nome": "carlos",
      "idade": "24",
      "contato": "12456-9876",
      "esporte favorito": "volei"
    },
    {
      "id": 3,
      "nome": "joana",
      "idade": "28",
      "contato": "12798-0456",
      "esporte favorito": "handebol"
    }
  ]
}

function leituraDados () {
  let strDados = localStorage.getItem('db');
  let objDados = {};

  if (strDados) {
      objDados = JSON.parse (strDados);
  }
  else {
      objDados = { contatos: [ 
                      {nome: "João da Silva", telefone: "31-98795-5587", idade: "23", esportefavorito: "futebol"}, 
                      {nome: "Maria das Graças", telefone: "31-98795-5547", idade:"26", esportefavorito:"handebol"},  
                      {nome: "Pedro Gomes", telefone: "31-98795-6577", idade:"28", esportefavorito:"volei"}
                  ]}
  }

  return objDados;
}

function salvaDados (dados) {
  localStorage.setItem ('db', JSON.stringify (dados));
}

function imprimeDados () {
  let tela = document.getElementById('tela');
  let strHtml = '';
  let objDados = leDados ();

  for (i=0; i< objDados.contatos.length; i++) {
      strHtml += `<p>${objDados.contatos[i].nome} - ${objDados.contatos[i].contato} -${objDados.contatos[i].idade} -
      ${objDados.contatos[i].esporteFavoritos}</p>`
  }

  tela.innerHTML = strHtml;
}

function incluirNovoContato (){
  // Ler os dados do localStorage
  let objDados = leituraDados();

  // Incluir um novo contato
  let strNome = document.getElementById ('campoNome').value;
  let strContato = document.getElementById ('campoTelefone').value;
  let strIdade = document.getElementById ('campoIdade').value;
  let strEsporteFavoritos = document.getElementById('campoEsporteFavorito').value;
  let novoContato = {
      nome: strNome,
      telefone: strContato,
      idade: strIdade,
      esporteFavoritos: strEsporteFavoritos
  };
  objDados.contatos.push (novoContato);

  // Salvar os dados no localStorage novamente
  salvaDados (objDados);

  // Atualiza os dados da tela
  imprimeDados ();
}

var db = JSON.parse(localStorage.getItem('db_mock_contato'));
if (!db) {
    db = db_contatos_inicial
};

function updateContato(id, contato) 
{

    let index = db.data.map(obj => obj.id).indexOf(id);

    db.data[index].nome = contato.nome,
    db.data[index].idade = contato.idade,
    db.data[index].contato = contato.contato,
    db.data[index].esporteFavoritos = contato.esporteFavoritos

    displayMessage("Contato alterado com sucesso");

    localStorage.setItem('db_mock_contato', JSON.stringify(db));
}

function filtro(){
  var filtro = document.getElementById("textoFiltro").value;
  exibirContatos(filtro.toLowerCase())
}

function deleteContato(id) 
{    
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    localStorage.setItem('db_contato', JSON.stringify(db));
}

// Configura os botões
document.getElementById ('btnCarregaDados').addEventListener ('click', imprimeDados);
document.getElementById ('btnIncluirContato').addEventListener ('click', incluirContato);