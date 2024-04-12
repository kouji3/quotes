let inputQ = document.querySelector("#inputQ");
let quotes = document.querySelector(".response");
console.log(inputQ)

inputQ.addEventListener("keydown", (event) => {
    if(event.key === "Enter" && inputQ.value.toString().toLowerCase().trim() === "quote"){
        fetch("https://animechan.xyz/api/random")
          .then((response) => response.json())
          .then((quote) => {
            console.log(quote)
            let quoteContainer = document.createElement("div");
            quoteContainer.classList.add("res")
            quoteContainer.innerText = `Quote: ${quote.quote}\n\nAnime: ${quote.anime}\n\nCharacter: ${quote.character}`;

            quotes.appendChild(quoteContainer);

          }); 
    }
});


