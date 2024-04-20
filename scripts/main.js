const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));

const skillToEmoji = {
  "Programming Languages": "💻",
  "Libraries / Frameworks": "🌐",
  "IDEs / Software Packages": "🔧",
  "Databases": "🛢",
  "Version Control": "⚙️",
  "Cloud Services": "☁️",
  "Build Tools / Package Managers": "🔧"
}

let resumeData = {};

fetch(`../resume-data.json`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(`JSON loaded successfully.`);
    resumeData = data;
  });

app.addEventListener(`keypress`, async function (event) {
  if (event.key === `Enter`) {
    await delay(150);
    getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener(`click`, function (event) {
  const input = document.querySelector(`input`);
  input.focus();
})


async function open_terminal() {
  createText(`Last login: ${Date()}`)
  await delay(500);
  createText(`Welcome Guest`);
  await delay(700);
  createText(`Starting the server...`);
  await delay(1500);
  createText(`Few commands to get you started:`);
  createCode(`help`, `See all commands.`);
  createCode(`about`, `Who am I and what do I do.`);
  createCode(`contact`, `See ways to connect with me.`);
  await delay(500);
  new_line();
}


function new_line() {
  const p = document.createElement(`p`);
  const span1 = document.createElement(`span`);
  const span2 = document.createElement(`span`);
  p.setAttribute(`class`, `path`)
  p.textContent = `$guest `;
  span1.textContent = `in `;
  span2.textContent = `~/${resumeData.basics.name.toLowerCase().replace(` `, `-`)} `;
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);

  const div = document.createElement(`div`);
  const i = document.createElement(`i`);
  const input = document.createElement(`input`);
  div.setAttribute(`class`, `type`)
  i.setAttribute(`class`, `fas fa-angle-right icone`)
  div.appendChild(i);
  div.appendChild(input);

  app.appendChild(div);
  input.focus();
}

function removeInput() {
  const div = document.querySelector(`.type`);
  app.removeChild(div);
}

async function getInputValue() {
  const value = document.querySelector(`input`).value;
  switch (value) {
    case `help`:
      trueValue(value);
      createCode(`help`, `See all commands.`);
      createCode(`about`, `Who am I and what do I do.`);
      createCode(`resume`, `View my resume.`);
      createCode(`projects`, `View the projects I have done.`);
      createCode(`contact`, `See ways to connect with me.`);
      createCode(`clear`, `Clean the terminal.`);
      break;
    case `about`:
      trueValue(value);
      createText(`Hello World. I am ${resumeData.basics.name}.`);
      createText(`👨‍💻 About me...`);
      createText(
        `🤔 Exploring new technologies and developing software for fun and quick hacks.<br>
        💼 Working as a Senior Software Engineer at Capgemini.<br>
        🎓 Completed Computer Science Engineering from Graphic Era Deemed to be University.<br>
        🌱 Learning more about <span class='blue'>Backend, DBMS, Machine Learning</span> and <span class='blue'>Data Science</span>.<br>
        ✍️ Pursuing UI/UX Designing and Blog Writing as hobbies/side hustles.<br>
        🤝 Looking to collaborate on <span class='blue'>Python, JavaScript</span> and <span class='blue'>UI/UX.</span>`
      )
      break;
    case `resume`:
      trueValue(value);
      createText(`<hr>`)
      generateResume();
      createText(`<hr>`)
      createText(`Full PDF Resume <a href='../resources/Basudev Tyagi.pdf' target='_blank'><span class='blue'>here<span/></a>`);
      break;
    case `projects`:
      trueValue(value);
      generateProjects();
      createText(`Visit my GitHub to view projects I have done. Might as well give a follow while you are there 😬`);
      createText(`<a href='${resumeData.links[2].url}' target='_blank'><i class='fab fa-github white'></i> github.com/BasudevTyagi10</a>`);
      break;
    case `contact`:
      trueValue(value);
      createText(`<a href='mailto:${resumeData.basics.email}?subject=Contact via Portfolio Site' target='_blank'><i class='fa fa-envelope white'></i> ${resumeData.basics.email}</a>`);
      createText(`<a href='${resumeData.links[2].url}' target='_blank'><i class='fab fa-github white'></i> github.com/BasudevTyagi10</a>`);
      createText(`<a href='${resumeData.links[1].url}' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/basudevtyagi</a>`);
      break;
    case `clear`:
      document.querySelectorAll(`p`).forEach(e => e.parentNode.removeChild(e));
      document.querySelectorAll(`section`).forEach(e => e.parentNode.removeChild(e));
      break;
    default:
      falseValue(value);
      createText(`command not found: ${value}`);
      createText(`run help to view all commands`);
      break;
  }
}

function trueValue(value) {
  const div = document.createElement(`section`);
  div.setAttribute(`class`, `type2`)
  const i = document.createElement(`i`);
  i.setAttribute(`class`, `fas fa-angle-right icone`)
  const mensagem = document.createElement(`h2`);
  mensagem.setAttribute(`class`, `sucess`)
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value) {
  const div = document.createElement(`section`);
  div.setAttribute(`class`, `type2`)
  const i = document.createElement(`i`);
  i.setAttribute(`class`, `fas fa-angle-right icone error`)
  const mensagem = document.createElement(`h2`);
  mensagem.setAttribute(`class`, `error`)
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text) {
  const p = document.createElement(`p`);
  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text) {
  const p = document.createElement(`p`);
  p.setAttribute(`class`, `code`);
  p.innerHTML =
    `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

function generateResume() {
  // Header
  createText(`<br><font size='5'>${resumeData.basics.name.toUpperCase()}</font>`)
  createText(`<a href='mailto:${resumeData.basics.email}?subject=Contact via Portfolio Site' target='_blank'><i class='fa fa-envelope white'></i> ${resumeData.basics.email}</a> | <a href='tel:${resumeData.basics.phone}'><i class='fa fa-phone-square white'></i> ${resumeData.basics.phone}</a> | <i class='fa fa-map-marker'></i> ${resumeData.basics.location.address}`);
  createText(`<a href='${resumeData.links[2].url}' target='_blank'><i class='fab fa-github white'></i> Github</a> | <a href='${resumeData.links[1].url}' target='_blank'><i class='fab fa-linkedin-in white'></i> LinkedIn</a> | <a href='${resumeData.links[0].url}' target='_blank'><i class='fa fa-user white'></i> Portfolio</a>`);

  // Education
  createText(`<big><u>EDUCATION</u><big>`);
  const educationHTMLObj = resumeData.education.map(education =>
    `<tr>
      <th style='text-align: left;'>${education.institution}</th>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td>${education.location}</td>
    </tr>
    <tr>
      <td>${education.studyType} ${education.area}</td>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td>${education.startDate == `` ? `` : education.startDate + ` - `}${education.endDate == `` ? `Present` : education.endDate}</td>
    </tr>
    <tr>
      <td>${education.scoreType}: ${education.score}</td>
    </tr>`
  );
  let educationHTML = `<table>` + educationHTMLObj.join(``) + `<table/>`;
  createText(educationHTML);

  // Experience
  createText(`<big><u>EXPERIENCE</u><big>`);
  const experienceHTMLObj = resumeData.work.map(work =>
    `<p><strong>${work.company}</strong> | ${work.position} <br> ${work.location} | ${work.startDate} - ${work.endDate}</p>`
  );
  createText(experienceHTMLObj.join(``))

  // Skills
  createText(`<big><u>SKILLS</u><big>`);
  const skillsHTMLObj = resumeData.skills.map(skill =>
    `<tr>
      <th style='text-align: left;'>${skillToEmoji[skill.name]}</th>
      <td>&nbsp;&nbsp;</td>
      <td>${skill.keywords.join()}</td>
    </tr>`
  );
  createText(`<table>` + skillsHTMLObj.join(``) + `<table/>`)

  // Projects
  createText(`<big><u>PROJECTS</u><big>`);
  generateProjects();

  // Certificates
  createText(`<big><u>CERTIFICATIONS</u><big>`);
  const certificatesHTMLObj = resumeData.certificates.map(certificate =>
    `<a href="${certificate.url}" target="_blank">- ${certificate.description} - ${certificate.issuedBy}</a><br>`
  );
  createText(certificatesHTMLObj.join(``));

  // Awards
  createText(`<big><u>HONORS & AWARDS</u><big>`);
  const awardsHTMLObj = resumeData.awards.map(award =>
    `- ${award.summary}<br>`
  );
  createText(awardsHTMLObj.join(``));
}

function generateProjects() {
  const projectsHTMLObj = resumeData.projects.map(project =>
    `<strong>${project.name}</strong> | <a href='${project.url}' target='_blank'>Link</a><br>
    🧰: ${project.keywords.join()}<br><br>`
  )
  createText(projectsHTMLObj.join(``));
}

open_terminal();