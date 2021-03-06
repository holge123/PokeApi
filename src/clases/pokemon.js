export class Pokemon {
    constructor(id, nombre, img, tipo, peso, altura) {
        this.id = id;
        this.nombre = nombre;
        this.img = img;
        this.tipo = tipo;
        this.peso = peso;
        this.altura = altura;
    }

    //extrae del json el id, nombre y sprite
    static getPokemon(json) {
        return new Pokemon(json.id,
            json.forms[0].name,
            [json.sprites.other["official-artwork"].front_default,
            json.sprites.front_default,
            json.sprites.other.home.front_default],
            json.types,
            json.weight,
            json.height);
    }
}