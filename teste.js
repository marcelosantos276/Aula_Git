let a = 10;
let b = 14;
let c = 17;
let soma = 0;


if (a < b) {
    if (b < c) {
    soma = b + c;
}
}
if (b < c) {
    if (a < c) {
    soma = a + c;
}
}
if (b < a) {
    if (c < a){
        soma = a + c;
    }
}
if (a < b) {
    if (c < a){
        soma = a + b;
    }
}
console.log(soma)