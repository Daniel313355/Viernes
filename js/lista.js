function mostrarlista(listaPokes){
    const app = document.getElementById("app");
    let Pokes ="";

    for (let i = 0; i < listaPokes.length; i++) {
        Pokes += listaPokes[i].name
    }

    app.innerHTML = "lista";