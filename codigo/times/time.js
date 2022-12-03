function salvarTime() {
    let time = document.getElementById('time').value
    let esporte = document.getElementById('esporte').value
    let integrante1 = document.getElementById('integrante1').value
    let integrante2 = document.getElementById('integrante2').value
    let integrante3 = document.getElementById('integrante3').value
    let integrante4 = document.getElementById('integrante4').value
    let novoTime = {
        nome: time,
        esporte: esporte,
        integrantes: [
            integrante1,
            integrante2,
            integrante3,
            integrante4
        ]
    }
    db.times.push(novoTime)
    localStorage.setItem('db', JSON.stringify(db))
    imprimeDados()
}
function imprimeDados() {
    console.log('aqui')
    let tela = document.getElementById('cardList')
    let template = ''
    for (i = 0; i < db.times.length; i++)
        template += `<div class="card">
                        Time: ${db.times[i].nome}
                        <br>
                        Modalidade: ${db.times[i].esporte}
                        <br>
                        Integrantes:
                        <br>
                       ${db.times[i].integrantes[0]}
                        <br>
                        ${db.times[i].integrantes[1]}
                        <br>
                        ${db.times[i].integrantes[2]}
                        <br>
                        ${db.times[i].integrantes[3]}

                    </div>`
    tela.innerHTML = template
}
