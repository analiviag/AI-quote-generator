function quoteForm(event) {
  event.preventDefault();

  new Typewriter("#text-quote", {
    strings:
      "Life is like a box of chocolates. You never know what you're gonna get.",
    autoStart: true,
    delay: 10,
    cursor: null,
  });
}

let quoteGenerator = document.querySelector("#quote-generator-form");
quoteGenerator.addEventListener("submit", quoteForm);
