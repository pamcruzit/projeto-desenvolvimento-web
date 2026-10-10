const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

btnAdicionar.addEventListener("click", function () {

    const texto = inputTarefa.value.trim();

    if (texto === "") {
        return;
    }

    const novaTarefa = document.createElement("li");

    novaTarefa.textContent = texto;
    listaTarefas.appendChild(novaTarefa);
    inputTarefa.value = "";

    inputTarefa.focus();
});


listaTarefas.addEventListener("click", function (evento) {

    if (evento.target.tagName === "LI") {

        evento.target.remove();
    }
});