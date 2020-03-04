/*A compilação no terminal é: node dist/app  - nome do js */

let message: string = "Help me test";
console.log(message);

let episode:number = 4 ; /*Se fosse um string rodaria concatenado, logo tomar cuidado.*/
console.log("Este episodio é o " + episode + " , mas ja esta disponivel o episodio " + (episode = episode + 1));

function isEnough (parse: number) : boolean{
    return parse < 12
}

let distance = 14;
console.log('A distancia ' + distance + ' e menor que 12? ' + isEnough(distance));






