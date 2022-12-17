
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));

app.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    await delay(150);
    getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal() {
  createText(`Last login: ${Date()}`)
  await delay(500);
  createText("Welcome Guest");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("Few commands to get you started:");
  createCode("help", "See all commands.");
  createCode("about", "Who am I and what do I do.");
  createCode("contact", "See ways to connect with me.");
  await delay(500);
  new_line();
}


function new_line() {
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "$guest ";
  span1.textContent = "in ";
  span2.textContent = "~/basudev-tyagi ";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);

  const div = document.createElement("div");
  const i = document.createElement("i");
  const input = document.createElement("input");
  div.setAttribute("class", "type")
  i.setAttribute("class", "fas fa-angle-right icone")
  div.appendChild(i);
  div.appendChild(input);

  app.appendChild(div);
  input.focus();
}

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue() {
  const value = document.querySelector("input").value;
  switch (value) {
    case "help":
      trueValue(value);
      createCode("help", "See all commands.");
      createCode("about", "Who am I and what do I do.");
      createCode("resume", "View my resume.");
      createCode("projects", "View the projects I have done.");
      createCode("contact", "See ways to connect with me.");
      createCode("clear", "Clean the terminal.");
      break;
    case "about":
      trueValue(value);
      createText("Hello World. I am Basudev Tyagi.");
      createText("I am a Developer who loves to work with data.");
      createText("💪 I'm proficient in <span class='blue'>Python</span> & its frameworks like <span class='blue'>Flask, Django,</span> etc. and <span class='blue'>DBMS & SQL.,</span><br/>👨‍💻 I also code in <span class='blue'>Java, C/C++, JavaScript.</span> <br/>🌱 I'm currently learning <span class='blue'>Flutter, Node.js, Go and UI/UX Designing in Figma.</span><br/>🤝 I'm looking to collaborate on <span class='blue'>Python, JavaScript and UI/UX.</span>");
      break;
    case "resume":
      trueValue(value);
      createText("Download my Resume: <a href='https://github.com/BasuDevTyagi10/BasuDevTyagi10/raw/main/resume/Basudev%20Tyagi.pdf' target='_blank'><span class='blue'>here<span/></a>");
      break;
    case "projects":
      trueValue(value);
      createText("Visit my GitHub to view projects I have done.");
      createText("<a href='https://github.com/BasudevTyagi10' target='_blank'><i class='fab fa-github white'></i> github.com/BasudevTyagi10</a>");
      break;
    case "contact":
      trueValue(value);
      createText("<a href='mailto:basudevtyagi10@gmail.com?subject=Contact via Portfolio Site' target='_blank'><i class='fa fa-envelope white'></i> basudevtyagi10@gmail.com</a>");
      createText("<a href='https://github.com/BasudevTyagi10' target='_blank'><i class='fab fa-github white'></i> github.com/BasudevTyagi10</a>");
      createText("<a href='https://linkedin.com/in/basudevtyagi/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/basudevtyagi</a>");
      break;
    case "clear":
      document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
      document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
      break;
    default:
      falseValue(value);
      createText(`command not found: ${value}`);
      createText("run help to view all commands");
      break;
  }
}

function trueValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname) {
  const p = document.createElement("p");
  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
    `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();