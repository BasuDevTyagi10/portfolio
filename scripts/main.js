
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
      createText("<hr>")
      generateResume();
      createText("<hr>")
      createText("Download PDF <a href='../resources/Basudev Tyagi.pdf' target='_blank'><span class='blue'>here<span/></a>");
      break;
    case "projects":
      trueValue(value);
      generateProjects();
      createText("Visit my GitHub to view projects I have done. Might as well give a follow while you are there 😬");
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

function generateResume() {
  // Header
  createText("<br><font size='5'>BASUDEV TYAGI</font>")
  createText("<a href='mailto:basudevtyagi10@gmail.com?subject=Contact via Portfolio Site' target='_blank'><i class='fa fa-envelope white'></i> basudevtyagi10@gmail.com</a> | <a href='tel:+917251976234'><i class='fa fa-phone-square white'></i> +91 7251976234</a> | <i class='fa fa-map-marker'></i> Dehradun, Uttarakhand");
  createText("<a href='https://github.com/BasudevTyagi10' target='_blank'><i class='fab fa-github white'></i> Github</a> | <a href='https://linkedin.com/in/basudevtyagi/' target='_blank'><i class='fab fa-linkedin-in white'></i> LinkedIn</a> | <a href='https://basudevtyagi10.github.io/portfolio/' target='_blank'><i class='fa fa-user white'></i> Portfolio</a>");

  // Education
  createText("<big><u>EDUCATION</u><big>");
  createText(`
  <table>
    <tr>
      <th style='text-align: left;'>Graphic Era Deemed to be University</th>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td>Dehradun, Uttarakhand</td>
    </tr>
    <tr>
      <td>B.Tech. CSE</td>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td>2019 - Present</td>
    </tr>
    <tr>
      <td>CGPA: 8.86</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <th style='text-align: left;'>Raja Rammohan Roy Academy</th>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td>Dehradun, Uttarakhand</td>
    </tr>
    <tr>
      <td>XII (ISC)</td>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td>2019</td>
    </tr>
    <tr>
      <td>Percentage: 85%</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <th style='text-align: left;'>Raja Rammohan Roy Academy</th>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td>Dehradun, Uttarakhand</td>
    </tr>
    <tr>
      <td>X (ICSE)</td>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td>2017</td>
    </tr>
    <tr>
      <td>Percentage: 94.4%</td>
    </tr>
  </table>
  `)

  // Experience
  createText("<big><u>EXPERIENCE</u><big>");
  createText(`
  <p><strong>KODERS KORPORATION</strong> | Developer Intern-II <br> Dehradun, India | July 2022 - Sept 2022</p>
  <p><strong>KODERS KORPORATION</strong> | Python Developer Intern <br> Dehradun, India | Jan 2022 - June 2022</p>
  `);

  // Skills
  createText("<big><u>SKILLS</u><big>");
  createText(`
  <table>
    <tr>
      <th style='text-align: left;'>Programming Languages</th>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td>Python (Proficient), Java (Proficient), C & C++ (Basic),<br>JavaScript (Basic), SQL (Proficient), HTML & CSS</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <th style='text-align: left;'>Libraries / Frameworks</th>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td>Flask, Django, Bootstrap, Node.js, Express.js</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <th style='text-align: left;'>Tools / Platforms</th>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td>Git, GitHub, Visual Studio Code, Eclipse, Jupyter,<br>PyCharm, Adobe XD & Figma (UI/UX Designing)</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <th style='text-align: left;'>Databases</th>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td>MySQL, SQLite, PostgreSQL, GraphQL, MongoDB</td>
    </tr>
  </table>
  `);

  // Projects
  createText("<big><u>PROJECTS</u><big>");
  generateProjects();

  // Certificates
  createText("<big><u>CERTIFICATIONS</u><big>");
  createText(`
  <ul>
  <li><a href="https://www.coursera.org/account/accomplishments/verify/GWKHF35B37U4" target="_blank">Introduction to Relational Databases (RDBMS) - Coursera, IBM</a></li>
  <li><a href="https://www.coursera.org/account/accomplishments/verify/B6QC7MDC3FX7" target="_blank">Relational Database Administration (DBA) - Coursera, IBM</a></li>
  <li><a href="https://www.coursera.org/account/accomplishments/verify/6TXLXEQ6NKJR" target="_blank">Databases and SQL for Data Science with Python - Coursera, IBM</a></li>
  <li><a href="https://www.coursera.org/account/accomplishments/verify/372RFY3QF98X" target="_blank">Foundation of User Experience (UX) Design by Google - Coursera, Google</a></li>
  <li><a href="https://www.coursera.org/account/accomplishments/verify/3W5Q4KUSP5ZB" target="_blank">Hands-on Introduction to Linux Commands and Shell Scripting - Coursera, IBM</a></li>
  <li><a href="https://www.hackerrank.com/certificates/64f91727b936" target="_blank">Python (Basic) - HackerRank</a></li>
  <li><a href="https://www.hackerrank.com/certificates/f2f720ce89b6" target="_blank">Java (Basic) - HackerRank</a></li>
  <li><a href="https://www.hackerrank.com/certificates/5fc4c2bee098" target="_blank">SQL (Basic) - HackerRank</a></li>
  </ul>
  `);

  // Awards
  createText("<big><u>HONORS & AWARDS</u><big>");
  createText(`
  <ul>
  <li>AWS Machine Learning Scholar 2021</li>
  <li>Contributor in GWOC'21</li>
  <li>Successfully merged 4 PRs for Hacktoberfest 2021</li>
  <li>Completed FutureSkills Prime Adobe UX Foundation Journey 2021</li>
  </ul>
  `);
}

function generateProjects() {
  createText(`
  <p><strong>ANALYSIS OF INDIAN ELECTIONS USING TWITTER</strong> | <a href='https://github.com/BasuDevTyagi10/Analysis-Indian-Elections-Twitter' target='_blank'>Link</a> | Python, Twitter API</p>
  <p>A simple Data Science project, showing the volume and sentiment analysis based on the tweets of<br>
  the users of Twitter. The tweets are obtained from this dataset which are scraped from the Twitter<br>
  API and then the insights are represented through graphs using plotly, a python library.</p>
  <p><strong>OFFENSIVE CONTENT DETECTION FLASK WEB-APP</strong> | <a href='https://github.com/BasuDevTyagi10/offensive-tweet-detection' target='_blank'>Link</a> | Python, Twitter API, Machine Learning, Flask Web Framework</p>
  <p>Python built Web Application (using Flask Web Framework) that allows a user to give multiple<br>
  text inputs or fetch tweets from Twitter API and run a trained Machine Learning Model (using<br>
  Logistic Regression Algorithm) to classify them as Offensive or Non-Offensive with an accuracy<br>
  between 94-96%.</p>
  <p><strong>STUDENT REPORTCARD GENERATOR</strong> | <a href='https://github.com/BasuDevTyagi10/SchoolReportCardGenerator' target='_blank'>Link</a> | Python, Tkinter, SQLite</p>
  <p>Python built GUI Application (using tkinter module) that allows a user to add, edit, search, delete<br>
  and generate a Report Card for a student in pdf format and doc formats. The data is stored in a local<br>
  database file using SQLite.</p>
  `);
}

open_terminal();