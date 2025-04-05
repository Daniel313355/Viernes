function mostrarlista(listaPokes){
    const app = document.getElementById("app");
    let Pokes ="";

    for (let i = 0; i < listaPokes.length; i++) {
        Pokes += `
         <div class="   c-lista-pokemon poke-${id}" onclick="mostrarDetalle('${pokemones[i].name}')">
             <p>#${id}</p>
        "<p>" + listaPokes[i].name + "</p>"
    }

    app.innerHTML = Pokes;
}