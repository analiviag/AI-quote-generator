function displayQuote(response) {
  new Typewriter("#text-quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: null,
  });
}

function quoteForm(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "bba264o26c1cdt003d73631d7a2a1f27";
  let context =
    "You are a quote generator, that gives great quotes. Give me the answer in HTML format. Please always add the name of the author of the quote, wrapped in a <strong> element. The name of the author should ALWAYS be in a new line.";
  let prompt = `Write a quote about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQuote);
}
let quoteGenerator = document.querySelector("#quote-generator-form");
quoteGenerator.addEventListener("submit", quoteForm);
