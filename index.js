const navButtons = [...document.querySelectorAll(".sideNavigation__link")];
const hireUsNavbutton = document.querySelector("header .hireUsButton");
const hireUsTaskWrappers = [...document.querySelectorAll(".taskWrapper")];

const homeSection = document.getElementById("homeSection");
const worksSection = document.getElementById("worksSection");
const aboutSection = document.getElementById("aboutSection");
const contactSection = document.getElementById("contactSection");
const hireUsSection = document.getElementById("hireUsSection");

const homeLink = document.getElementById("01_sideNav");
const worksLink = document.getElementById("02_sideNav");
const aboutLink = document.getElementById("03_sideNav");
const contactLink = document.getElementById("04_sideNav");
const hireUsLink = document.getElementById("05_sideNav");

const allSections = [homeSection, worksSection, aboutSection, contactSection, hireUsSection];
const allLinks = [homeLink, worksLink, aboutLink, contactLink, hireUsLink];

function getSectionIndexFromID(id) {
  return id.slice(0, 2);
}

function showHomeSection() {
  hireUsNavbutton.style.display = "none";

  allSections.forEach(section => {
    section.style.display = "none";
  });
  homeSection.style.display = "block";

  allLinks.forEach(link => {
    link.classList.remove("sideNavigation__link--active");
  });
  homeLink.classList.add("sideNavigation__link--active");
}

function showWorksSection() {
  hireUsNavbutton.style.display = "block";

  allSections.forEach(section => {
    section.style.display = "none";
  });
  worksSection.style.display = "block";

  allLinks.forEach(link => {
    link.classList.remove("sideNavigation__link--active");
  });
  worksLink.classList.add("sideNavigation__link--active");
}

function showAboutSection() {
  hireUsNavbutton.style.display = "block";

  allSections.forEach(section => {
    section.style.display = "none";
  });
  aboutSection.style.display = "block";

  allLinks.forEach(link => {
    link.classList.remove("sideNavigation__link--active");
  });
  aboutLink.classList.add("sideNavigation__link--active");
}

function showContactSection() {
  hireUsNavbutton.style.display = "block";

  allSections.forEach(section => {
    section.style.display = "none";
  });
  contactSection.style.display = "block";

  allLinks.forEach(link => {
    link.classList.remove("sideNavigation__link--active");
  });
  contactLink.classList.add("sideNavigation__link--active");
}

function showHireUsSection() {
  hireUsNavbutton.style.display = "none";

  allSections.forEach(section => {
    section.style.display = "none";
  });
  hireUsSection.style.display = "block";

  allLinks.forEach(link => {
    link.classList.remove("sideNavigation__link--active");
  });
  hireUsLink.classList.add("sideNavigation__link--active");
}

function changeActiveSection(e) {
  const { id } = e.target;
  const clickedSectionIndex = getSectionIndexFromID(id);
  switch (clickedSectionIndex) {
    case "01":
      showHomeSection();
      break;

    case "02":
      showWorksSection();
      break;

    case "03":
      showAboutSection();
      break;

    case "04":
      showContactSection();
      break;

    case "05":
      showHireUsSection();
      break;

    default:
      break;
  }
}

const toggleTaskCheckbox = taskWrapper => {
  const taskCheckbox = taskWrapper.querySelector(".taskWrapper__checkbox");
  taskCheckbox.checked = !taskCheckbox.checked;
};

navButtons.forEach(button => {
  button.addEventListener("click", e => changeActiveSection(e), true);
  const buttonIndex = getSectionIndexFromID(button.id);
});

hireUsTaskWrappers.forEach(taskWrapper => {
  taskWrapper.addEventListener("click", () => toggleTaskCheckbox(taskWrapper));
});

showHireUsSection();
