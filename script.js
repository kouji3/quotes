let inputQ = document.querySelector("#inputQ");
let quotes = document.querySelector(".response");
console.log(inputQ)

inputQ.addEventListener("keydown", async (event) => {
    if(event.key === "Enter" && inputQ.value.toString().toLowerCase().trim() === "quote"){


        let result = await fetch("https://animechan.xyz/api/random");
        let quote = await result.json();
        console.log(quote)
        let quoteContainer = document.createElement("div");
        quoteContainer.classList.add("res")
        quoteContainer.innerText = `Quote: ${quote.quote}\n\nAnime: ${quote.anime}\n\nCharacter: ${quote.character}`;

        quotes.appendChild(quoteContainer);

         
    }
});


