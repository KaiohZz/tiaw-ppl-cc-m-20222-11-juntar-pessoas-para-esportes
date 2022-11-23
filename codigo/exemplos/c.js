// document.getElementById("myBtn").addEventListener("click", displayDate);
function mfunc(a){
    let template = ""
    for(let i=0; i<vetor.length; i++){
        template += `
            <div class="item">${vetor[i].nome}</div>
        `
    }
    document.getElementById('lista').innerHTML = template
}
let vetor = [
    {nome:'teste'},
    {nome:'teste2'},
]
function add(a){
    vetor.push({nome:a})
}