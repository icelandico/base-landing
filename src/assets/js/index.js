const header = document.querySelector(".navbar");
const lines = [
  '<html lang="pl">',
  "<head>",
  "  <title>Proste strony internetowe dla małych firm</title>",
  "</head>",
  "<body>",
  "  <header>",
  "    <nav>",
  '      <a href="#portfolio">Usługi</a>',
  '      <a href="#contact">Kontakt</a>',
  "    </nav>",
  "  </header>",
  "  <main>",
  "    <section>",
  "      <h2>Bądź widoczny w internecie</h2>",
  "      <p>Tworzę proste, szybkie i przejrzyste strony internetowe dla lokalnych firm – bez kreatorów i zbędnych dodatków.</p>",
  "    </section>",
  "  </main>",
  "</body>",
  "</html>",
];

const el = document.getElementById("typewriter");
let lineIndex = 0;
let charIndex = 0;

function type() {
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      el.textContent += lines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 40);
    } else {
      if (lineIndex < lines.length - 1) {
        el.textContent += "\n";
      }
      lineIndex++;
      charIndex = 0;
      setTimeout(type, 400);
    }
  }
}

type();

document.addEventListener("scroll", (e) => {
  const topValue = document.body.getBoundingClientRect().top;
  if (topValue < -75) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
});

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
      const successMessage = document.querySelector(".form-submit-success");

      successMessage.classList.add("visible");
      name.value = "";
      email.value = "";
      message.value = "";
    })
    .catch((error) => alert(error));
};

document
  .querySelector("#contact-form")
  .addEventListener("submit", handleSubmit);
