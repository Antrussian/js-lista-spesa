/* Esercizio di oggi: Lista della spesa con ciclo while
nome repo: js-lista-spesa
Consegna:
Data una lista della spesa,
 stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while. */


 let listaSpesa = ["Pane", "Latte", "Uova", "Frutta"];

    // indice
    let indice = 0;

    // Crea un div
    let nuovoDiv = document.createElement("div");

    // while per creare una lista di elementi indicizzati e aggiungere al div
    while (indice < listaSpesa.length) {
      // paragrafo
      let paragrafo = document.createElement("p");

      // Assegna il contenuto al paragrafo
      paragrafo.textContent = listaSpesa[indice];

      // Aggiungi il paragrafo al div
      nuovoDiv.appendChild(paragrafo);

  
      indice++;
    }

    // Aggiungi il div al body
    document.body.appendChild(nuovoDiv);

