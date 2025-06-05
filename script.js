const profilePicZone = document.getElementById("profilePicZone");
const profilePicInput = document.getElementById("profilePicInput");
const profilePreview = document.getElementById("profilePreview");
let profilePicData = "";

profilePicZone.addEventListener("click", () => profilePicInput.click());
profilePicInput.addEventListener("change", handleProfilePic);

profilePicZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  profilePicZone.classList.add("dragover");
});

profilePicZone.addEventListener("dragleave", () =>
  profilePicZone.classList.remove("dragover")
);

profilePicZone.addEventListener("drop", (e) => {
  e.preventDefault();
  profilePicZone.classList.remove("dragover");
  profilePicInput.files = e.dataTransfer.files;
  handleProfilePic({ target: { files: e.dataTransfer.files } });
});

function handleProfilePic(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    profilePicData = `<img src="${e.target.result}" alt="Profile Picture"  />`;
    profilePreview.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// About Me profile Pic

const profilePicZoneAboutMe = document.getElementById("profilePicZoneAboutMe");
const aboutMeProfilePicInput = document.getElementById(
  "aboutMeProfilePicInput"
);
const aboutMeProfilePreview = document.getElementById("aboutMeProfilePreview");
let profilePicDataAboutMe = "";

profilePicZoneAboutMe.addEventListener("click", () =>
  aboutMeProfilePicInput.click()
);
aboutMeProfilePicInput.addEventListener("change", handleProfilePicAboutMe);

profilePicZoneAboutMe.addEventListener("dragover", (e) => {
  e.preventDefault();
  profilePicZoneAboutMe.classList.add("dragover");
});

profilePicZoneAboutMe.addEventListener("dragleave", () =>
  profilePicZoneAboutMe.classList.remove("dragover")
);

profilePicZoneAboutMe.addEventListener("drop", (e) => {
  e.preventDefault();
  profilePicZoneAboutMe.classList.remove("dragover");
  aboutMeProfilePicInput.files = e.dataTransfer.files;
  handlePirofilePic({ target: { files: e.dataTransfer.files } });
});

function handleProfilePicAboutMe(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    profilePicDataAboutMe = `<img src="${e.target.result}" alt="Profile Picture"  />`;
    aboutMeProfilePreview.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// projects 1_1
const profilePicZoneProjects1_1 = document.getElementById(
  "profilePicZoneProjects1_1"
);
const projects1_1ProfilePicInput = document.getElementById(
  "projects1_1ProfilePicInput"
);
const projects1_1ProfilePreview = document.getElementById(
  "projects1_1ProfilePreview"
);
let profilePicDataProject1_1 = "";

profilePicZoneProjects1_1.addEventListener("click", () =>
  projects1_1ProfilePicInput.click()
);
projects1_1ProfilePicInput.addEventListener(
  "change",
  handleProfilePicProject1_1
);

profilePicZoneProjects1_1.addEventListener("dragover", (e) => {
  e.preventDefault();
  profilePicZoneProjects1_1.classList.add("dragover");
});

profilePicZoneProjects1_1.addEventListener("dragleave", () =>
  profilePicZoneProjects1_1.classList.remove("dragover")
);

profilePicZoneProjects1_1.addEventListener("drop", (e) => {
  e.preventDefault();
  profilePicZoneProjects1_1.classList.remove("dragover");
  projects1_1ProfilePicInput.files = e.dataTransfer.files;
  handleProfilePicProject1_1({ target: { files: e.dataTransfer.files } });
});

function handleProfilePicProject1_1(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    profilePicDataProject1_1 = `<img src="${e.target.result}" alt="Profile Picture"  />`;
    projects1_1ProfilePreview.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// projects 1_2
const profilePicZoneProjects1_2 = document.getElementById(
  "profilePicZoneProjects1_2"
);
const projects1_2ProfilePicInput = document.getElementById(
  "projects1_2ProfilePicInput"
);
const projects1_2ProfilePreview = document.getElementById(
  "projects1_2ProfilePreview"
);
let profilePicDataProject1_2 = "";

profilePicZoneProjects1_2.addEventListener("click", () =>
  projects1_2ProfilePicInput.click()
);
projects1_2ProfilePicInput.addEventListener(
  "change",
  handleProfilePicProject1_2
);

profilePicZoneProjects1_2.addEventListener("dragover", (e) => {
  e.preventDefault();
  profilePicZoneProjects1_2.classList.add("dragover");
});

profilePicZoneProjects1_2.addEventListener("dragleave", () =>
  profilePicZoneProjects1_2.classList.remove("dragover")
);

profilePicZoneProjects1_2.addEventListener("drop", (e) => {
  e.preventDefault();
  profilePicZoneProjects1_2.classList.remove("dragover");
  projects1_2ProfilePicInput.files = e.dataTransfer.files;
  handleProfilePicProject1_2({ target: { files: e.dataTransfer.files } });
});

function handleProfilePicProject1_2(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    profilePicDataProject1_2 = `<img src="${e.target.result}" alt="Profile Picture"  />`;
    projects1_2ProfilePreview.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// projects 2_1
const profilePicZoneProjects2_1 = document.getElementById(
  "profilePicZoneProjects2_1"
);
const projects2_1ProfilePicInput = document.getElementById(
  "projects2_1ProfilePicInput"
);
const projects2_1ProfilePreview = document.getElementById(
  "projects2_1ProfilePreview"
);
let profilePicDataProject2_1 = "";

profilePicZoneProjects2_1.addEventListener("click", () =>
  projects2_1ProfilePicInput.click()
);
projects2_1ProfilePicInput.addEventListener(
  "change",
  handleProfilePicProject2_1
);

profilePicZoneProjects2_1.addEventListener("dragover", (e) => {
  e.preventDefault();
  profilePicZoneProjects2_1.classList.add("dragover");
});

profilePicZoneProjects2_1.addEventListener("dragleave", () =>
  profilePicZoneProjects2_1.classList.remove("dragover")
);

profilePicZoneProjects2_1.addEventListener("drop", (e) => {
  e.preventDefault();
  profilePicZoneProjects2_1.classList.remove("dragover");
  projects2_1ProfilePicInput.files = e.dataTransfer.files;
  handleProfilePicProject2_1({ target: { files: e.dataTransfer.files } });
});

function handleProfilePicProject2_1(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    profilePicDataProject2_1 = `<img src="${e.target.result}" alt="Profile Picture"  />`;
    projects2_1ProfilePreview.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// projects 2_2
const profilePicZoneProjects2_2 = document.getElementById(
  "profilePicZoneProjects2_2"
);
const projects2_2ProfilePicInput = document.getElementById(
  "projects2_2ProfilePicInput"
);
const projects2_2ProfilePreview = document.getElementById(
  "projects2_2ProfilePreview"
);
let profilePicDataProject2_2 = "";

profilePicZoneProjects2_2.addEventListener("click", () =>
  projects2_2ProfilePicInput.click()
);
projects2_2ProfilePicInput.addEventListener(
  "change",
  handleProfilePicProject2_2
);

profilePicZoneProjects2_2.addEventListener("dragover", (e) => {
  e.preventDefault();
  profilePicZoneProjects2_2.classList.add("dragover");
});

profilePicZoneProjects2_2.addEventListener("dragleave", () =>
  profilePicZoneProjects2_2.classList.remove("dragover")
);

profilePicZoneProjects2_2.addEventListener("drop", (e) => {
  e.preventDefault();
  profilePicZoneProjects2_2.classList.remove("dragover");
  projects2_2ProfilePicInput.files = e.dataTransfer.files;
 handleProfilePicProject2_2({ target: { files: e.dataTransfer.files } });
});

function handleProfilePicProject2_2(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    profilePicDataProject2_2 = `<img src="${e.target.result}" alt="Profile Picture"  />`;
    projects2_2ProfilePreview.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// Delete after drop zone created
const socialMediaIcon1 =
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg";
const socialMediaIcon2 =
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg";
const socialMediaIcon3 =
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg";
// HTML Page Scripts
const script_all = `function themeColor(color) {
  // Apply the color instantly
  document.body.style.backgroundColor = color;
  // Save it in localStorage
  localStorage.setItem("themeColor", color);
}

// On every page load, apply the saved color
window.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem("themeColor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
});
`;

const resumeJS = `window.onload = () => {
  const downloadBtn = document.getElementById('downloadPdfBtn');
  downloadBtn.addEventListener('click', () => {
    const resume = document.querySelector('.resume-container');

    html2canvas(resume, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF('p', 'pt', 'a4');

      // Calculate width and height for A4
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Jainy_Resume.pdf');
    });
  });
};
`;

const contactMejs = `
const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
          document.getElementById("form-success").style.display = "block";
          form.reset();
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch(error => alert("Error sending message. Please try again."));
    });`;

// HTML page CSS code
const sharedCSS = `/* Default Setting */
body {
    margin: 0%;
    padding: 0%;
    background-color: rgb(247, 250, 175, 0.5);
    transition: background-color 0.3s ease;

}

.orbitron,
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: Orbitron;
}

p,
.playball,
main ul {
    font-family: Playball;
    font-size: 32px;

}

section {
    margin-top: 100px;
    margin-bottom: 50px;
}

/* Navigation bar styleing */

nav {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;



}

.navContainer {
    border: 2px solid black;
    border-radius: 40px;
    height: 50px;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: rgba(217, 217, 217, 0.5);
    margin-top: 30px;

}

#headingName {
    width: 200px;
    font-size: 26px;


}

#headingName a {
    padding-left: 35px;
}

#navPageLinks {
    width: 700px;
    font-size: 18px;
}

nav ul,
#headingName {
    display: flex;
    list-style: none;
    justify-content: space-around;
    cursor: pointer;
    padding-right: 30px;
    margin-top: 15px;
}

nav a {
    text-decoration: none;
    color: black;
}

#navPageLinks a:hover {
    text-decoration: overline;
    color: dodgerblue;

}

/* Main Style */
main {
    padding-left: 50px;
    padding-right: 50px;
    margin-top: 100px;
}

h1 {
    text-align: center;
}

/* footer style start */

footer {
    background-color: black;
    height: 50px;
    bottom: 0;
    /* Make the footer on the bottom */
    left: 0;
    /* Make the footer to the left */
    width: 100%;

}

.themeContainer {
    justify-content: center;

    display: flex;
}

.themeColor {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 5px;
    cursor: pointer;
}

footer #color1 {
    background-color: rgb(247, 250, 175);
}

footer #color2 {
    background-color: rgb(255, 130, 130);
}

footer #color3 {
    background-color: rgb(158, 198, 243);
}

footer #color4 {
    background-color: rgb(170, 185, 154);
}

footer #color5 {
    background-color: rgb(205, 193, 255);
}
`;

const homeCSS = `/* Home page styles */
main {
    display: flex;
}

.mainContainer {
    margin-right: 100px;
}

h1 {
    font-family: Pixelify Sans;
    color: #0088FF;
    text-align: left;
}

#part1 { font-size: 42px; }
#part2 { font-size: 72px; margin-left: 90px; }
h2 { font-size: 36px; color: #00909D; }
p { color: #2601AF; font-size: 42px; text-align: center; }

img {
    width: 500px;
    height: 500px;
    border-radius: 50%;
}

footer {
    margin-top: 157px;
}`;

const aboutMeCSS = `#myImage{
float: right;
margin-left: 50px;
margin-right: 50px;
}
#myImage img{
    width: 250px;
    height: 400px;
}
`;
const projectsCSS = `.thumbnails img {
    width: 300px;
    height: 200px;
}

.pClass {
    cursor: pointer;
    margin-top: 10px;
    font-family: Arial, sans-serif;
    font-size: 18px;
    color: red;
    font-weight: bold;
}

.thumbnails ul {
    display: flex;
    list-style: none;
    gap: 30px;
    padding: 0;
    flex-wrap: wrap;
}

.thumbnails li {
    cursor: pointer;
    text-align: center;
    font-family: Arial;
    margin: 10px;
}

.thumbnails img {
    width: 200px;
    height: auto;
    border-radius: 5px;
    transition: transform 0.3s ease;
}

.thumbnails img:hover {
    transform: scale(1.05);
}

.thumbnails li a{
    text-decoration: none;
    color: black;
}`;

const resumeCSS = `/* #resume{
    display: flex;
    background-color: white;
}
#column1{
    width: 500px;
    background-color: rgb(24,99,120);
} */




:root {
  --left-bg: rgb(24, 99, 120);
  --text-light: #ffffff;
  --text-dark: #333;
  --bg-light: #fff;
  --bg-dark: #1e1e1e;
  --text-color: var(--text-dark);
  --bg-color: var(--bg-light);
}



.resume-container {
  display: flex;
  flex: 1; /* fill available vertical space */
}

/* LEFT COLUMN */
.left-column {
  width: 500px;
  background: var(--left-bg);
  color: var(--text-light);
  padding: 30px;
  box-sizing: border-box;
}

img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto 20px;
}

.left-column h1,
.left-column h2,
.left-column p,
.left-column li {
  color: var(--text-light);
}

.left-column section {
  margin-bottom: 20px;
}

.left-column section h2 {
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

/* RIGHT COLUMN */
.right-column {
  flex: 1;
  padding: 30px;
  background: var(--bg-color);
  color: var(--text-color);
}

.right-column h2 {
  color: var(--text-color);
}

/* Download Button Container */
.download-container {
  padding: 20px;
  text-align: center;
  background: #f5f5f5;
  border-top: 1px solid #ccc;
}

/* Button Style */
button {
  font-size: 16px;
  padding: 10px 24px;
  cursor: pointer;
  border: none;
  background: #186378;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
button:hover {
  background: #0f4f5b;
}
`;

const contactMeCSS = `form {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;

}

#formSection {
    justify-items: center;
}

form h2 {
    margin-bottom: 20px;

    color: #333;
}

input,
textarea,
button {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
}

button {
    background-color: #28a745;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

.success {
    color: green;
    font-size: 16px;
}




/* social media style */

ul {
    list-style: none;
    display: flex;
    justify-content: center;
    text-align: center;
}

main li {
    margin-left: 100px;
    margin-right: 100px;
}

main a {
    text-decoration: none;
    text-align: center;
    color: rgb(1, 40, 80);
}

main a:hover {
    text-decoration: overline;
    text-align: center;
    color: dodgerblue;
}

img {
    width: 100px;
}

img:hover {
    width: 98px;
}

.normalFont {
    font-family: inter;
}`;
// html page creation code

const footer = `<footer>
    <div class="themeContainer">
      <div class="themeColor" id="color1" onclick="themeColor('rgba(247,250,175,0.5)')"></div>
      <div class="themeColor" id="color2" onclick="themeColor('rgba(255,130,130,0.5)')"></div>
      <div class="themeColor" id="color3" onclick="themeColor('rgba(158,198,243,0.5)')"></div>
      <div class="themeColor" id="color4" onclick="themeColor('rgba(170,185,154,0.5)')"></div>
      <div class="themeColor" id="color5" onclick="themeColor('rgba(205,193,255,0.5)')"></div>
    </div>
  </footer>`;

const navLinks = `<div id="navPageLinks" class="navContainer orbitron">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="aboutMe.html">About Me</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="skills.html">Skills</a></li>
            <li><a href="resume.html">Resume</a></li>
            <li><a href="contactMe.html">Contact Me</a></li>
          </ul>
        </div>`;

// Home Page Creation
function createPageHTML(greeting, userName, profession_Role, tagLine) {
  const nav = `
    <header>
      <nav>
        <div id="headingName" class="navContainer"><a href="index.html" class="playball">${userName}</a></div>
        ${navLinks}
      </nav>
    </header>`;
  return `<!DOCTYPE html><html><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Hi, I'm ${userName} — Explore my projects, skills, and experiences.">
    <meta name="keywords" content="${userName}, student, portfolio, web development">
    <meta name="author" content="${userName}">
    <title>${userName}' Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron&family=Playball&family=Pixelify+Sans&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="home.css">
  </head><body>
  ${nav}
  <main>
    <div class="mainContainer">
      <h1><span id="part1">${greeting}</span><br><span id="part2">${userName}</span></h1>
      <h2>${profession_Role}</h2>
      <p>${tagLine}</p>
    </div>
    <div class="mainContainer">
      ${profilePicData}
    </div>
  </main>
  ${footer}
  <script src="script.js"></script>
  </body></html>`;
}

function createPageHTMLAboutMe(
  userName,
  tagLine,
  introduction,
  education,
  skillsExpertise,
  experience_WorkHistory,
  hobbies_Interests,
  careerGoals_FutureVision,
  whatYouAreCurrentlyDoing
) {
  const nav = `
    <header>
      <nav>
        <div id="headingName" class="navContainer"><a href="index.html" class="playball">${userName}</a></div>
        ${navLinks}
      </nav>
    </header>`;
  return `<!DOCTYPE html><html><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Hi, I'm ${userName} — Explore my projects, skills, and experiences.">
    <meta name="keywords" content="${userName}, student, portfolio, web development">
    <meta name="author" content="${userName}">
    <title>${userName}' Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron&family=Playball&family=Pixelify+Sans&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="aboutMe.css">
  </head><body>
  ${nav}
  <main>
    
        <h1>About Me</h1>

        <section>
            <aside id="myImage">
                ${profilePicDataAboutMe}
            </aside>
            <p class="beforeAside">Hey there! ${introduction}</p>
        </section>
        <section>
            <h2>📚 Education</h2>
            <p>${education}
            </p>
        </section>
        <section>
            <h2>Skills & Expertise</h2>
            <p>
                ${skillsExpertise}</p>
        </section>
        <section>
            <h2>Experience / Work History</h2>
            <p>${experience_WorkHistory}</p>
        </section>
        <section>
            <h2>Hobbies & Interests</h2>
            <p>${hobbies_Interests}</p>
        </section>
        <section>
            <h2>Career Goals / Future Vision</h2>
            <p>${careerGoals_FutureVision}</p>
        </section>
        <section>
            <h2>What I'm Currently Doing </h2>
            <p>${whatYouAreCurrentlyDoing}</p>
        </section>
       
        </section>
        <section>
            <p>If you’ve made it this far, thanks for getting to know me. I am ${tagLine}</p>
        </section>

  </main>
  ${footer}
  <script src="script.js"></script>
  </body></html>`;
}

// Projects Page Creation
function createPageHTMLProjects(
  userName,
  typeOfProject1,
  typeOfProject1_projectLink1,
  typeOfProject1_project1Name1,
  typeOfProject1_projectLink2,
  typeOfProject1_project1Name2,
  typeOfProject2,
  typeOfProject2_projectLink1,
  typeOfProject2_project1Name1,
  typeOfProject2_projectLink2,
  typeOfProject2_project1Name2
) {
  const nav = `
    <header>
      <nav>
        <div id="headingName" class="navContainer"><a href="index.html" class="playball">${userName}</a></div>
        ${navLinks}
      </nav>
    </header>`;
  return `<!DOCTYPE html><html><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Hi, I'm ${userName} — Explore my projects, skills, and experiences.">
    <meta name="keywords" content="${userName}, student, portfolio, web development">
    <meta name="author" content="${userName}">
    <title>${userName}' Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron&family=Playball&family=Pixelify+Sans&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="projects.css">
  </head><body>
  ${nav}
    <main>
<h1>Projects</h1>
        <section class="projectsSections" id="projectSection1">

            <h2>${typeOfProject1}</h2>

            <div class="thumbnails">
                <ul>
                    <li><a href="${typeOfProject1_projectLink1}" target="_blank" rel="noopener noreferrer">
                    ${profilePicDataProject1_1}
                    <br>${typeOfProject1_project1Name1}</a></li>

                    <li><a href="${typeOfProject1_projectLink2}" target="_blank" rel="noopener noreferrer">${profilePicDataProject1_2}
                    <br>${typeOfProject1_project1Name2}</a></li>
                </ul>
            </div>


        </section>
        <section class="projectsSections" id="projectSection2">
            <h2>${typeOfProject2}</h2>
            <div class="thumbnails">
                <ul>
                    <li><a href="${typeOfProject2_projectLink1}" target="_blank" rel="noopener noreferrer">
                   ${profilePicDataProject2_1}
                    <br>${typeOfProject2_project1Name1}</a></li>

                    <li><a href="${typeOfProject2_projectLink2}" target="_blank" rel="noopener noreferrer">
                    ${profilePicDataProject2_2}
                    <br>${typeOfProject2_project1Name2}</a></li>
                </ul>
            </div>
        </section>


    </main>
 ${footer}
  <script src="script.js"></script>
</body>

</html>`;
}

// Skills Page creation
function createPageHTMLSkills(
  userName,
  h2_1,
  h2_1_p1,
  h2_1_p1_li1,
  h2_1_p1_li2,
  h2_1_p1_li3,
  h2_1_p1_li4,
  h2_1_p2,
  h2_1_p2_li1,
  h2_1_p2_li2,
  h2_1_p2_li3,
  h2_1_p3,
  h2_1_p3_li1,
  h2_1_p4,
  h2_1_p4_li1,
  h2_1_p4_li2,
  h2_1_p4_li3,
  h2_1_p4_li4,
  h2_2,
  h2_2_li1,
  h2_2_li2,
  h2_2_li3,
  softSkills_li1,
  softSkills_li2,
  softSkills_li3,
  softSkills_li4,
  softSkills_li5,
  currentlyLearning_li1,
  currentlyLearning_li2,
  currentlyLearning_li3,
  currentlyLearning_li4
) {
  const nav = `
    <header>
      <nav>
        <div id="headingName" class="navContainer"><a href="index.html" class="playball">${userName}</a></div>
        ${navLinks}
      </nav>
    </header>`;
  return `<!DOCTYPE html><html><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Hi, I'm ${userName} — Explore my projects, skills, and experiences.">
    <meta name="keywords" content="${userName}, student, portfolio, web development">
    <meta name="author" content="${userName}">
    <title>${userName}' Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron&family=Playball&family=Pixelify+Sans&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="style.css">
  </head><body>
  ${nav}
    <main>

        <h1>Skills</h1>

        <section>
            <h2>${h2_1}</h2>
            <p>${h2_1_p1}</p>
            <ul>
                <li>${h2_1_p1_li1}</li>
                <li>${h2_1_p1_li2}</li>
                <li>${h2_1_p1_li3}</li>
                <li>${h2_1_p1_li4}</li>
            </ul>
            <p>${h2_1_p2}</p>
            <ul>
                <li>${h2_1_p2_li1}</li>
                <li>${h2_1_p2_li2}</li>
                <li>${h2_1_p2_li3}</li>
            </ul>
            <p>${h2_1_p3}</p>
            <ul>
                <li>${h2_1_p3_li1}</li>
            </ul>
            <p>${h2_1_p4}</p>
            <ul>
                <li>${h2_1_p4_li1}</li>
                <li>${h2_1_p4_li2}</li>
                <li>${h2_1_p4_li3}</li>
                <li>${h2_1_p4_li4}</li>
            </ul>
        </section>
        <section>
            <h2>${h2_2}</h2>
            <ul>
                <li>${h2_2_li1}</li>
                <li>${h2_2_li2}</li>
                <li>${h2_2_li3}</li>
            </ul>
        </section>
        <section>
            <h2>✨ Soft Skills & Approach</h2>
            <ul>
                <li>${softSkills_li1}</li>
                <li>${softSkills_li2}</li>
                <li>${softSkills_li3}</li>
                <li>${softSkills_li4}</li>
                <li>${softSkills_li5}</li>
            </ul>
        </section>
        <section>
            <h2>📈 Currently Learning</h2>
            <ul>
                <li>${currentlyLearning_li1}</li>
                <li>${currentlyLearning_li2}</li>
                <li>${currentlyLearning_li3}</li>
                <li>${currentlyLearning_li4}</li>
            </ul>
        </section>
    </main>
 ${footer}
  <script src="script.js"></script>
</body>

</html>`;
}

// Resume Page Creation
function createPageHTMLResume(
  userName,
  current_role_occupation,
  phoneNumber,
  emailAdd2,
  socialMedia1,
  socialMedia2,
  summary,
  hobbie1,
  hobbie2,
  hobbie3,
  language1,
  language2,
  careerObjective,
  courseName,
  collegeName_Year,
  skills,
  projectName1,
  features1,
  projectName2,
  features2
) {
  const nav = `
    <header>
      <nav>
        <div id="headingName" class="navContainer"><a href="index.html" class="playball">${userName}</a></div>
        ${navLinks}
      </nav>
    </header>`;
  return `<!DOCTYPE html><html><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Hi, I'm ${userName} — Explore my projects, skills, and experiences.">
    <meta name="keywords" content="${userName}, student, portfolio, web development">
    <meta name="author" content="${userName}">
    <title>${userName}' Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron&family=Playball&family=Pixelify+Sans&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="resume.css">
  </head><body>
  ${nav}
    <main>

        <h1>Resume</h1>
    <div class="resume-container">
      <!-- LEFT COLUMN -->
      <aside class="left-column">
        ${profilePicData}
        <h1 id="name">${userName}</h1>
        <p class="title" id="title">${current_role_occupation}</p>

        <section>
          <h2>Contact</h2>
          <p id="phone">📱 +91-${phoneNumber}</p>
          <p id="email">📧 ${emailAdd2}</p>
          <p id="linkedin">🌐 ${socialMedia1}</p>
          <p id="github">🌐 ${socialMedia2}</p>
        </section>

        <section>
          <h2>Summary</h2>
          <p id="summary">${summary}</p>
        </section>

        <section>
          <h2>Hobbies</h2>
          <ul id="hobbies">
            <li>${hobbie1}</li>
            <li>${hobbie2}</li>
            <li>${hobbie3}</li>
          </ul>
        </section>

        <section>
          <h2>Languages</h2>
          <p>${language1}</p>
          <p>${language2}</p>
        </section>
      </aside>

      <!-- RIGHT COLUMN -->
      <main class="right-column">
        <section>
          <h2>Career Objective</h2>
          <p id="objective">${careerObjective}</p>
        </section>

        <section>
          <h2>Education</h2>
          <p>
            <strong>${courseName}</strong><br />
            ${collegeName_Year}
          </p>
        </section>

        <section>
          <h2>Skills</h2>
          <p>${skills}</p>
        </section>

        <section>
          <h2>Projects</h2>
          <p><strong>${projectName1}</strong><br />Features: ${features1}</p>
          <p><strong>${projectName2}</strong><br />Features: ${features2}</p>
        </section>

    </div>

    <!-- Download PDF Button at Bottom -->
    <div class="download-container">
      <button id="downloadPdfBtn">📄 Download PDF</button>
    </div>
    </main>
 ${footer}
  <script src="script.js"></script>
  <script src="resume.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
</body>

</html>`;
}

// Contact Me Page
function createPageHTMLContactMe(
  userName,
  formspreeEmailLink,
  emailAdd,
  socialMediaLink1,
  profileName1,
  socialMediaLink2,
  profileName2,
  socialMediaLink3,
  profileName3
) {
  const nav = `
    <header>
      <nav>
        <div id="headingName" class="navContainer"><a href="index.html" class="playball">${userName}</a></div>
        ${navLinks}
      </nav>
    </header>`;
  return `<!DOCTYPE html><html><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Hi, I'm ${userName} — Explore my projects, skills, and experiences.">
    <meta name="keywords" content="${userName}, student, portfolio, web development">
    <meta name="author" content="${userName}">
    <title>${userName}' Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron&family=Playball&family=Pixelify+Sans&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="contactMe.css">
  </head><body>
  ${nav}
    <main>

        <h1>Contact Me</h1>
        <section id="formSection">
            <form action="${formspreeEmailLink}" method="POST">
                <h2>Contact Form</h2>

                <label for="name">Your Name</label>
                <input type="text" name="name" id="name" required placeholder="Enter your name">

                <label for="email">Your Email</label>
                <input type="email" name="email" id="email" required placeholder="you@example.com">

                <label for="message">Your Message</label>
                <textarea name="message" id="message" rows="5" required placeholder="Write your message..."></textarea>

                <button type="submit">Send Message</button>

                <!-- Optional message -->
                <div class="success" id="form-success" style="display:none;">
                    ✅ Message sent! Thank you.
                </div>
            </form>
        </section>
        <section>
            <h2>Email ID</h2>
            <p class="normalFont">Email : <a href="mailto:${emailAdd}">${emailAdd}</a></p>
        </section>
        <section>
            <h2>Social Media</h2>
            <ul>
                <li><a href="${socialMediaLink1}"><img src="${socialMediaIcon1}" alt="Social Media link"> <br>
                        <p class="normalFont">${profileName1}</p>
                    </a></li>
                <li><a href="${socialMediaLink2}"><img src="${socialMediaIcon2}" alt="Social Media link">
                        <br>
                        <p class="normalFont">${profileName2}</p>
                    </a></li>
                <li><a href="${socialMediaLink3}"><img src="${socialMediaIcon3}" alt="Social Media link"> <br>
                        <p class="normalFont">${profileName3}</p>
                    </a></li>
            </ul>
        </section>
    </main>
 ${footer}
  <script src="script.js"></script>
    <script src="contactMe.js"></script>
</body>

</html>`;
}

// remove this function after creating all the pages
function generatePage(title, message) {
  return `<!DOCTYPE html><html><head><title>${title}</title><link rel="stylesheet" href="style.css"></head><body><h1>${message}</h1></body></html>`;
}

// Helper: Get value by ID and trim
function getValue(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : "";
}

// Generate Portfolio
async function generatePortfolio() {
  // Home Page Inputs
  const greeting = getValue("greeting");
  const userName = getValue("userName");
  const profession_Role = getValue("profession_Role");
  const tagLine = getValue("tagLine");

  // About Me Page Inputs
  const introduction = getValue("introduction");
  const education = getValue("education");
  const skillsExpertise = getValue("skillsExpertise");
  const experience_WorkHistory = getValue("experience_WorkHistory");
  const hobbies_Interests = getValue("hobbies_Interests");
  const careerGoals_FutureVision = getValue("careerGoals_FutureVision");
  const whatYouAreCurrentlyDoing = getValue("whatYouAreCurrentlyDoing");

  // Projects Inputs
  const typeOfProject1 = getValue("typeOfProject1");
  const typeOfProject1_projectLink1 = getValue("typeOfProject1_projectLink1");
  const typeOfProject1_project1Name1 = getValue("typeOfProject1_project1Name1");
  const typeOfProject1_projectLink2 = getValue("typeOfProject1_projectLink2");
  const typeOfProject1_project1Name2 = getValue("typeOfProject1_project1Name2");
  const typeOfProject2 = getValue("typeOfProject2");
  const typeOfProject2_projectLink1 = getValue("typeOfProject2_projectLink1");
  const typeOfProject2_project1Name1 = getValue("typeOfProject2_project1Name1");
  const typeOfProject2_projectLink2 = getValue("typeOfProject2_projectLink2");
  const typeOfProject2_project1Name2 = getValue("typeOfProject2_project1Name2");

  // Skills Inputs
  const h2_1 = getValue("h2_1");
  const h2_1_p1 = getValue("h2_1_p1");
  const h2_1_p1_li1 = getValue("h2_1_p1_li1");
  const h2_1_p1_li2 = getValue("h2_1_p1_li2");
  const h2_1_p1_li3 = getValue("h2_1_p1_li3");
  const h2_1_p1_li4 = getValue("h2_1_p1_li4");
  const h2_1_p2 = getValue("h2_1_p2");
  const h2_1_p2_li1 = getValue("h2_1_p2_li1");
  const h2_1_p2_li2 = getValue("h2_1_p2_li2");
  const h2_1_p2_li3 = getValue("h2_1_p2_li3");
  const h2_1_p3 = getValue("h2_1_p3");
  const h2_1_p3_li1 = getValue("h2_1_p3_li1");
  const h2_1_p4 = getValue("h2_1_p4");
  const h2_1_p4_li1 = getValue("h2_1_p4_li1");
  const h2_1_p4_li2 = getValue("h2_1_p4_li2");
  const h2_1_p4_li3 = getValue("h2_1_p4_li3");
  const h2_1_p4_li4 = getValue("h2_1_p4_li4");
  const h2_2 = getValue("h2_2");
  const h2_2_li1 = getValue("h2_2_li1");
  const h2_2_li2 = getValue("h2_2_li2");
  const h2_2_li3 = getValue("h2_2_li3");
  const softSkills_li1 = getValue("softSkills_li1");
  const softSkills_li2 = getValue("softSkills_li2");
  const softSkills_li3 = getValue("softSkills_li3");
  const softSkills_li4 = getValue("softSkills_li4");
  const softSkills_li5 = getValue("softSkills_li5");
  const currentlyLearning_li1 = getValue("currentlyLearning_li1");
  const currentlyLearning_li2 = getValue("currentlyLearning_li2");
  const currentlyLearning_li3 = getValue("currentlyLearning_li3");
  const currentlyLearning_li4 = getValue("currentlyLearning_li4");

  // Resume Inputs
  const current_role_occupation = getValue("current_role_occupation");
  const phoneNumber = getValue("phoneNumber");
  const emailAdd2 = getValue("emailAdd2");
  const socialMedia1 = getValue("socialMedia1");
  const socialMedia2 = getValue("socialMedia2");
  const summary = getValue("summary");
  const hobbie1 = getValue("hobbie1");
  const hobbie2 = getValue("hobbie2");
  const hobbie3 = getValue("hobbie3");
  const language1 = getValue("language1");
  const language2 = getValue("language2");
  const careerObjective = getValue("careerObjective");
  const courseName = getValue("courseName");
  const collegeName_Year = getValue("collegeName_Year");
  const skills = getValue("skills");
  const projectName1 = getValue("projectName1");
  const features1 = getValue("features1");
  const projectName2 = getValue("projectName2");
  const features2 = getValue("features2");

  // Contact Me Inputes
  const formspreeEmailLink = getValue("formspreeEmailLink");
  const emailAdd = getValue("emailAdd");
  const socialMediaLink1 = getValue("socialMediaLink1");
  const profileName1 = getValue("profileName1");
  const socialMediaLink2 = getValue("socialMediaLink2");
  const profileName2 = getValue("profileName2");
  const socialMediaLink3 = getValue("socialMediaLink3");
  const profileName3 = getValue("profileName3");

  // Check for empty fields
  if (
    !greeting ||
    !userName ||
    !profession_Role ||
    !tagLine ||
    !introduction ||
    !education ||
    !skillsExpertise ||
    !experience_WorkHistory ||
    !hobbies_Interests ||
    !careerGoals_FutureVision ||
    !whatYouAreCurrentlyDoing ||
    !formspreeEmailLink ||
    !emailAdd ||
    !socialMediaLink1 ||
    !profileName1 ||
    !socialMediaLink2 ||
    !profileName2 ||
    !socialMediaLink3 ||
    !profileName3 ||
    !h2_1 ||
    !h2_1_p1 ||
    !h2_1_p1_li1 ||
    !h2_1_p1_li2 ||
    !h2_1_p1_li3 ||
    !h2_1_p1_li4 ||
    !h2_1_p2 ||
    !h2_1_p2_li1 ||
    !h2_1_p2_li2 ||
    !h2_1_p2_li3 ||
    !h2_1_p3 ||
    !h2_1_p3_li1 ||
    !h2_1_p4 ||
    !h2_1_p4_li1 ||
    !h2_1_p4_li2 ||
    !h2_1_p4_li3 ||
    !h2_1_p4_li4 ||
    !h2_2 ||
    !h2_2_li1 ||
    !h2_2_li2 ||
    !h2_2_li3 ||
    !softSkills_li1 ||
    !softSkills_li2 ||
    !softSkills_li3 ||
    !softSkills_li4 ||
    !softSkills_li5 ||
    !currentlyLearning_li1 ||
    !currentlyLearning_li2 ||
    !currentlyLearning_li3 ||
    !currentlyLearning_li4 ||
    !current_role_occupation ||
    !phoneNumber ||
    !emailAdd2 ||
    !socialMedia1 ||
    !socialMedia2 ||
    !summary ||
    !hobbie1 ||
    !hobbie2 ||
    !hobbie3 ||
    !language1 ||
    !language2 ||
    !careerObjective ||
    !courseName ||
    !collegeName_Year ||
    !skills ||
    !projectName1 ||
    !features1 ||
    !projectName2 ||
    !features2 ||
    !typeOfProject1 ||
    !typeOfProject1_projectLink1 ||
    !typeOfProject1_project1Name1 ||
    !typeOfProject1_projectLink2 ||
    !typeOfProject1_project1Name2 ||
    !typeOfProject2 ||
    !typeOfProject2_projectLink1 ||
    !typeOfProject2_project1Name1 ||
    !typeOfProject2_projectLink2 ||
    !typeOfProject2_project1Name2
  ) {
    alert("Please fill out all fields before generating the portfolio.");
    return;
  }

  // Home Page HTML
  const generatedHTML = createPageHTML(
    greeting,
    userName,
    profession_Role,
    tagLine
  );

  // About Me Page HTML
  const aboutMeHTML = createPageHTMLAboutMe(
    userName,
    tagLine,
    introduction,
    education,
    skillsExpertise,
    experience_WorkHistory,
    hobbies_Interests,
    careerGoals_FutureVision,
    whatYouAreCurrentlyDoing
  );

  const projectPage = createPageHTMLProjects(
    userName,
    typeOfProject1,
    typeOfProject1_projectLink1,
    typeOfProject1_project1Name1,
    typeOfProject1_projectLink2,
    typeOfProject1_project1Name2,
    typeOfProject2,
    typeOfProject2_projectLink1,
    typeOfProject2_project1Name1,
    typeOfProject2_projectLink2,
    typeOfProject2_project1Name2
  );

  const skillsPage = createPageHTMLSkills(
    userName,
    h2_1,
    h2_1_p1,
    h2_1_p1_li1,
    h2_1_p1_li2,
    h2_1_p1_li3,
    h2_1_p1_li4,
    h2_1_p2,
    h2_1_p2_li1,
    h2_1_p2_li2,
    h2_1_p2_li3,
    h2_1_p3,
    h2_1_p3_li1,
    h2_1_p4,
    h2_1_p4_li1,
    h2_1_p4_li2,
    h2_1_p4_li3,
    h2_1_p4_li4,
    h2_2,
    h2_2_li1,
    h2_2_li2,
    h2_2_li3,
    softSkills_li1,
    softSkills_li2,
    softSkills_li3,
    softSkills_li4,
    softSkills_li5,
    currentlyLearning_li1,
    currentlyLearning_li2,
    currentlyLearning_li3,
    currentlyLearning_li4
  );

  const resumePage = createPageHTMLResume(
    userName,
    current_role_occupation,
    phoneNumber,
    emailAdd2,
    socialMedia1,
    socialMedia2,
    summary,
    hobbie1,
    hobbie2,
    hobbie3,
    language1,
    language2,
    careerObjective,
    courseName,
    collegeName_Year,
    skills,
    projectName1,
    features1,
    projectName2,
    features2
  );

  // Contact Me
  const contactMeHTML = createPageHTMLContactMe(
    userName,
    formspreeEmailLink,
    emailAdd,
    socialMediaLink1,
    profileName1,
    socialMediaLink2,
    profileName2,
    socialMediaLink3,
    profileName3
  );

  // Preview
  document.getElementById("previewFrame").srcdoc = generatedHTML;
  document.getElementById("previewFrameAboutMe").srcdoc = aboutMeHTML;
  document.getElementById("previewFrameProjects").srcdoc = projectPage;
  document.getElementById("previewFrameSkills").srcdoc = skillsPage;
  document.getElementById("previewFrameResume").srcdoc = resumePage;
  document.getElementById("previewFrameContactMe").srcdoc = contactMeHTML;
}
// create the files

async function createPortfolioZIP() {
  const zip = new JSZip();

  zip.file("index.html", document.getElementById("previewFrame").srcdoc);
  zip.file(
    "aboutMe.html",
    document.getElementById("previewFrameAboutMe").srcdoc
  );
  //
  zip.file(
    "projects.html",
    document.getElementById("previewFrameProjects").srcdoc
  );
  zip.file("resume.html", document.getElementById("previewFrameResume").srcdoc);
  zip.file(
    "contactMe.html",
    document.getElementById("previewFrameContactMe").srcdoc
  );
  zip.file("skills.html", document.getElementById("previewFrameSkills").srcdoc);

  zip.file("style.css", sharedCSS);
  zip.file("home.css", homeCSS);
  zip.file("aboutMe.css", aboutMeCSS);
  zip.file("projects.css", projectsCSS);
  zip.file("resume.css", resumeCSS);
  zip.file("contactMe.css", contactMeCSS);
  zip.file("script.js", script_all);
  zip.file("resume.js", resumeJS);
  zip.file("contactMe.js", contactMejs);

  const content = await zip.generateAsync({ type: "blob" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(content);
  a.download = "portfolio.zip";
  a.click();
}
