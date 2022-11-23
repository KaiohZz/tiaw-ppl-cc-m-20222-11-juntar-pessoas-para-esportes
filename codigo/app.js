function loginUser (login, senha) {
    let x = document.getElementById("user");
    sessionStorage.setItem ('user', x.value)
    window.location.href = "./emAlta/index.html";
}