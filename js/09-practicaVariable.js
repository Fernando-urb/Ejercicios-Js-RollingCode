// Escribe un programa que pida una frase y escriba las vocales que aparecen

let texto = prompt("ingrese una frase ").trim().toLowerCase();
let vocales = "aeiou";
let vocalesEncontradas = [];

for (let text of texto) {
  if (vocales.includes(text)) {
    vocalesEncontradas.push(text);
  }
}

document.write(vocalesEncontradas);
