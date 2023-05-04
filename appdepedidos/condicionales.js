/*let edad=parseInt(prompt("¿Cual es tu edad?"));

if(edad>=18){
    console.log("puedes entrar a la disco");
}else{
    console.log("no puedes menor");
}*/

//codicional usando el operador ternario

/*let edad = parseInt(prompt("¿cual es tu edad?"))

let resultado = (edad>=18)? console.log("puedes consumir alcohol"):console.log("solo puedes beber jugo o agua");*/

//Ejemplo del ciclo "for in"
/*const user = {
	name: "Alberto",
  age: 36,
  role: "JavaScript developer"
}

for (const prop in user) {
	console.log(user[prop])
}*/

/*for (let i=0; i<10; i++){
    console.log("iteración N° "+i)
}*/

for (let i=1; i<=10; i++){
    if(i==5){
        console.warn("Iteración interrumpida en el cliclo", i, "por la sentencia BREAK");
        break;
    }
alert(i);
}