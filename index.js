const navButtons = [...document.querySelectorAll(".sideNavigation__link")];
const homeSection = document.getElementById("homeSection");
const caruzelaSection = document.getElementById("caruzelaSection");
const aboutSection = document.getElementById("aboutSection");
const homeLink = document.getElementById("01_sideNav");
const worksLink = document.getElementById("02_sideNav");
const aboutLink = document.getElementById("03_sideNav");
const contactLink = document.getElementById("04_sideNav");
const hireUsLink = document.getElementById("05_sideNav");

function getSectionIndexFromID(id) {
  return id.slice(0, 2);
}

function showHomeSection() {
  caruzelaSection.style.display = "none";
  aboutSection.style.display = "none";
  homeSection.style.display = "block";
  worksLink.classList.remove("sideNavigation__link--active");
  homeLink.classList.add("sideNavigation__link--active");
  aboutLink.classList.remove("sideNavigation__link--active");
}

function showWorksSection() {
  homeSection.style.display = "none";
  aboutSection.style.display = "none";
  caruzelaSection.style.display = "block";
  homeLink.classList.remove("sideNavigation__link--active");
  worksLink.classList.add("sideNavigation__link--active");
  aboutLink.classList.remove("sideNavigation__link--active");
}

function showAboutSection() {
  homeSection.style.display = "none";
  caruzelaSection.style.display = "none";
  aboutSection.style.display = "block";
  homeLink.classList.remove("sideNavigation__link--active");
  worksLink.classList.remove("sideNavigation__link--active");
  aboutLink.classList.add("sideNavigation__link--active");
}

function showContactSection() {}

function showHireUsSection() {}

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

navButtons.forEach(button => {
  button.addEventListener("click", e => changeActiveSection(e), true);
  const buttonIndex = getSectionIndexFromID(button.id);
});

showWorksSection();
