function prueba(){
    console.log ("hola mundo");
}


const funcionOneLine = (paramsss) =>
    {console.log ("hola probando una linea");

//variables//
        let i="hola mundo"
        var boots= [1,2,3,4,"gola", {"hola":1,"mundo":2},{"hola":1, "mundo":2},i]

        console.log (boots [5].mundo)
        console.log (boots [6]["hola"])


        for (let i =0;i <boots.length;i++){
        console.log (boots [i]);
        }


        while (i< boots.length){
            console.log (boots [i]);
            i++}


        boots.forEach(function (boot,i){ 
            console.log (boot);
            console.log ([i]);
        })

        let recorridoboot= boots.map(function (boot,i){
            console.log (boot);
            console.log (i);
            
        })
        console.log (recorridoboot);



        let camp= {"hola": 1, "mundo": boots, saludar: function (){return ("Hola bienvenidos")}}

        let person= {nombres: "edison", edad: 26, ciudad: "Cajica", sexo: "M"}
        

        for (let clave in person){
            console.log (clave + ":" + person[clave]);
        }
        
        Object.keys (person).forEach(function (clave){
        console.log (clave + ":" + person[clave]);   
        })

        Object.values (person).forEach(function (valor){
            console.log (valor);
        })


        Object.entries (person).forEach(function ([clave,valor]){
        })







        const nota=() =>{
            let information= [
                
                {nombre:"edison",
                edad: 26,
                grado: 6,
                nota1: 1.5,
                nota2: 2.5},
            
                {nombre:"pedro",
                edad: 23,
                grado: 1,
                nota1: 4.5,
                nota2: 4.5},

                {nombre:"martha",
                edad: 29,
                grado: 9,
                nota1: 4.5,
                nota2: 3.5},
                
                {nombre:"juan",
                edad: 24,
                grado: 4,
                nota1: 4.5,
                nota2: 4.2}]

                for (let info of information){

                let promedio= info.nota1 + info.nota2 / 2
                let n="nombre:" + info.nombre +"edad:" + info.edad +"grado:" + info.grado +"promedio:" + promedio +"\n"
                    console.log (n)
                }      }
            
            
        const bootscamps = () => {
            return "hola soy una variable de const"
        }
    


let edison =["andres","carlos","fabian"]
let push =("camilo");
console.log(edison);
    






const functionToFilter = (data) => {
    if (data !== null) {return data.filter ((item) => item== "edison"|| item == "fabian"|| item == "carlos" );

    }
}

console.log(functionToFilter(["name0","name1","edison","Fabian","carlos"]))



const funToReduce= () => {

    if (data !== null) { return data.reduce ((acc, item) => acc + item,0);
    }
    
}

console.log(funToReduce([85,85]))

const funTionToFind = (data) => {

    if (data !== null) { return data.find ((item) => item == "edison");
    }    
}

console.log(funTionToFind(["name0","name1","edison","Fabian","carlos"]));


const functionToShore = (data) => {
    if (data !== null) {
        
        let ascendente = data.sort((a, b) => a - b);

        let decendente = data.sort((a, b) => b - a);
    
        console.log(ascendente);}
       

}

functioTosort(["32","85","89","7"])




const functionToSplice = (data) => {
    if (data !== null) {
        let spliced = data.splace(1, 2, "edison");

        console.log(spliced);
    }
}

functionToSplice(["name0","name1","edison","Fabian","carlos"])




//ejercicio 3 //

const num= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let = num.push (11);
console.log(num);

let eliminado = num.shift();
console.log(num);

let suma = num.map(num => num * 2);
console.log(suma)



//ejercicio 2 //

const edades= [34,56,78,90,12];
let edadesmen= edades.filter (x => x < 56)

console.log(edadesmen);
console.log(edadesmen.lenght);


//ejercicio 3 //

const frutas= ["manzana","pera","naranja","coco","uva"];
frutas.push ("limon");
console.log(frutas);

let frutasC= frutas.filter(x => x.startsWith("c"));
console.log(frutasC);


}
