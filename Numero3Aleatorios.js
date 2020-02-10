var n1 = Math.round(Math.random() * 20) + 1;
var n2 = Math.round(Math.random() * 20) + 1;
var n3 = Math.round(Math.random() * 20) + 1;
console.log(n1);
console.log(n2);
console.log(n3);
console.log(" ")
if (n1 > n2 && n1 > n3) {
    console.log("El numero 1 es mayor " + n1);
    if (n2 > n1 && n2 > n3) {
        console.log("El numero 2 es mayor " + n2);
    }
} else {
    console.log("El numero 3 es el mayor " + n3)
}