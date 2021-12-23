import { Pokedex } from "./clases/pokedex.js";

window.onload = () =>{


    let pokedex = new Pokedex();

    let caja = document.getElementById("pokedex");

    let crearCard = (idd, imgg, nombree) => {
        let a = document.createElement("a");
        a.setAttribute("class", "card");
        a.setAttribute("href", "pokedex.html?id="+idd);

        let img = document.createElement("img");
        img.setAttribute("class", "card__img");
        img.setAttribute("src", imgg);

        let id = document.createElement("p");
        id.setAttribute("class", "card__id");
        id.textContent=idd.toString().padStart(4, "#000");

        let nombre = document.createElement("p");
        nombre.setAttribute("class", "card__nombre");
        nombre.textContent=nombree;
        a.appendChild(img);
        a.appendChild(id);
        a.appendChild(nombre);
        caja.appendChild(a);
    }

    /*let crearCard2 = (id, img, nombre) => {
        caja.innerHTML+=
        `<a href="pokedex.html?id=${id}" class="card">
            <img src="${img}" class="card__img" alt="">
            <p class="card__id">${id.toString().padStart(4, "#000")}</p>
            <p class="card__nombre">${nombre}</p>
        </a>`;
    }*/



    //Variables para controlar la cantidad de datos que nos traeremos de la api
    let ini = 1;
    let fin = 11;

    //Funcion que trae a partir del dato ini, fin cantidad de datos
    let fetchPokemons = async (ini, fin) => {
        let datos = await pokedex.verPokemons(ini, fin);//se traen todos los objetos pokemos solicitados
        for (let i = 0; i < datos.length; i++) {
            crearCard(datos[i].id, datos[i].img[0], datos[i].nombre);
        }
    }
    fetchPokemons(ini, fin);


    let pokemonNoExiste = (id) => {

    }

    //Añadimos al boton mas un listener para que se traiga más pokemons 
    document.getElementById("mas").addEventListener("click", ()=>{
        ini+=10;
        fin+=10;
        fetchPokemons(ini, fin);
        console.log("dika")
    });

    document.getElementById("buscar").addEventListener("click", () =>{
        let id = document.getElementById("id-pokemon").value;
        pokedex = new Pokedex();
        document.body.style.cursor='wait';
        pokedex.verPokemonId(id)
        .then( (response) => {
            if(response){
                window.location.href="pokedex.html?id="+id;
            }else{
                document.getElementById("error").style.display="block";
            }
        })
        .finally(() => {document.body.style.cursor='default'})

    });




}