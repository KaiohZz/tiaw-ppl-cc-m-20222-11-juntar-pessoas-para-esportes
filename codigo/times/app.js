function leDados () {
    let strDados = localStorage.getItem('db')
    console.log(strDados)
    let objDados = {}
    if (strDados) {
        objDados = JSON.parse (strDados)
    }
    else {
        objDados = { times: [ 
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
                    ]}
    }
    return objDados
}
function salvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados))
}
function salvarTime(){
    let objDados = leDados()
    let time = document.getElementById ('time').value
    let esporte = document.getElementById ('esporte').value
    let integrante1 = document.getElementById ('integrante1').value
    let integrante2 = document.getElementById ('integrante2').value
    let integrante3 = document.getElementById ('integrante3').value
    let integrante4 = document.getElementById ('integrante4').value
    let novoTime = {
        nome: time,
        esporte: esporte,
        integrantes: [  integrante1,
                        integrante2,
                        integrante3,
                        integrante4
                     ]
    };
    objDados.times.push(novoTime)
    salvaDados(objDados)
    imprimeDados()
}
function imprimeDados () {
    let tela = document.getElementById('tela')
    let template = ''
    let objDados = leDados()
    for (i=0; i< objDados.times.length; i++)
        template += `<p class="card">
                        Time: ${objDados.times[i].nome}
                        <br>
                        Modalidade: ${objDados.times[i].esporte}
                        <br>
                        Integrantes:
                        <br>
                       ${objDados.times[i].integrantes[0]}
                        <br>
                        ${objDados.times[i].integrantes[1]}
                        <br>
                        ${objDados.times[i].integrantes[2]}
                        <br>
                        ${objDados.times[i].integrantes[3]}

                    </p>`
    tela.innerHTML = template
}
function resetData(){
    localStorage.clear()
    imprimeDados()
}
document.getElementById ('consultar').addEventListener ('click', imprimeDados)
document.getElementById ('salvar').addEventListener ('click', salvarTime)
document.getElementById ('limpar').addEventListener ('click', resetData)
