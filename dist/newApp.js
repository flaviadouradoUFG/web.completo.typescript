var Spacecraft = /** @class */ (function () {
    /*Classe Spacecraft*/
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    } /* publico nome: tipo*/
    /*Método*/
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
/*Chamada do objeto*/
var ship = new Spacecraft("hyperdrive");
/*Chamada do método*/
ship.jumpIntoHyperspace();
