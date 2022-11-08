function leituraDados () {
  let strDados = localStorage.getItem('dbPessoas')
  let objDados = {}
  console.log(strDados)
  if (strDados) {
      objDados = JSON.parse (strDados)
  }
  else {
      objDados = { contatos: [ 
                      {nome: "João da Silva", telefone: "31-98795-5587", idade: "23", esportefavorito: "futebol"}, 
                      {nome: "Maria das Graças", telefone: "31-98795-5547", idade:"26", esportefavorito:"handebol"},  
                      {nome: "Pedro Gomes", telefone: "31-98795-6577", idade:"28", esportefavorito:"volei"}
                  ]}
  }

  return objDados
}

function salvaDados (dados) {
  localStorage.setItem ('dbPessoas', JSON.stringify (dados))
}

function imprimeDados () {
  let tela = document.getElementById('tela');
  let strHtml = '';
  let objDados = leituraDados ()
  for (i=0; i< objDados.contatos.length; i++) {
      strHtml += `<p>${objDados.contatos[i].nome} - ${objDados.contatos[i].telefone} -${objDados.contatos[i].idade} -
      ${objDados.contatos[i].esportefavorito}</p>`
  }
  console.log('oi')
  tela.innerHTML = strHtml;
}

function incluirNovoContato (){
  let objDados = leituraDados();

  let strNome = document.getElementById ('campoNome').value;
  let strContato = document.getElementById ('campoTelefone').value;
  let strIdade = document.getElementById ('campoIdade').value;
  let strEsporteFavoritos = document.getElementById('campoEsporteFavorito').value;
  let novoContato = {
      nome: strNome,
      telefone: strContato,
      idade: strIdade,
      esportefavorito: strEsporteFavoritos
  };
  objDados.contatos.push (novoContato);

  salvaDados (objDados);

  imprimeDados ();
}

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

document.getElementById ('carregaPessoas').addEventListener ('click', imprimeDados);
document.getElementById ('salvar').addEventListener ('click', incluirNovoContato);
document.getElementById('campoTelefone').addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});



// var db = JSON.parse(localStorage.getItem('db_mock_contato'));
// if (!db) {
//     db = db_contatos_inicial
// };
// var db_mock_contatos = {
//   "data": [
//     {
//       "id": 1,
//       "nome": "joão",
//       "idade": "23",
//       "contato": "91233-9999",
//       "esporte favorito": "futebol"
//     },
//     {
//       "id": 2,
//       "nome": "carlos",
//       "idade": "24",
//       "contato": "12456-9876",
//       "esporte favorito": "volei"
//     },
//     {
//       "id": 3,
//       "nome": "joana",
//       "idade": "28",
//       "contato": "12798-0456",
//       "esporte favorito": "handebol"
//     }
//   ]
// }