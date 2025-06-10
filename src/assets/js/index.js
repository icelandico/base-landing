const header = document.querySelector(".navbar");
const lines = [
  '<html lang="pl">',
  "<head>",
  "  <title>Twój tytuł</title>",
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
  "      <h2>Twoja firma</h2>",
  "      <p>Showcase your work & connect with clients.</p>",
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
      el.textContent += "\n";
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
