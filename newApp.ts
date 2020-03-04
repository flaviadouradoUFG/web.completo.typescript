class Spacecraft{

    /*Classe Spacecraft*/

    constructor (public propulsor: String) {}  /* publico nome: tipo*/

    /*Método*/
    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }

    /*Chamada do objeto*/
    let ship = new Spacecraft(`hyperdrive`)

    /*Chamada do método*/
    ship.jumpIntoHyperspace()
}
