// const lines = [
//   "<!DOCTYPE html>",
//   "<html>",
//   "<head>",
//   "  <title>My Portfolio</title>",
//   "</head>",
//   "<body>",
//   "  <h1>Welcome to my site</h1>",
//   "  <p>This is a simple HTML page.</p>",
//   "",
//   "  <script>",
//   "    document.addEventListener('DOMContentLoaded', () => {",
//   "      console.log('Page loaded!');",
//   "    });",
//   "  </script>",
//   "</body>",
//   "</html>",
// ];

const lines = [
  "<!DOCTYPE html>",
  '<html lang="en">',
  "<head>",
  '  <meta charset="UTF-8">',
  '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
  "  <title>Contact Form</title>",
  "</head>",
  "<body>",
  '  <form action="/submit" method="POST">',
  '    <label for="name">Name:</label>',
  '    <input type="text" id="name" name="name" required />',
  "",
  '    <label for="email">Email:</label>',
  '    <input type="email" id="email" name="email" required />',
  "",
  '    <button type="submit">Send</button>',
  "  </form>",
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
