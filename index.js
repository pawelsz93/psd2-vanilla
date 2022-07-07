const navButtons = [...document.querySelectorAll(".sideNavigation__link")];
const homeSection = document.getElementById("homeSection");
const caruzelaSection = document.getElementById("caruzelaSection");
const aboutSection = document.getElementById("caruzelaSection");
const homeLink = document.getElementById("01_sideNav");
const worksLink = document.getElementById("02_sideNav");
const aboutLink = "";
const menuLinks = [];

function getSectionIndexFromID(id) {
  return id.slice(0, 2);
}

function displaySectionIndex() {}

function showHomeSection() {
  // console.log("home");
  caruzelaSection.style.display = "none";
  homeSection.style.display = "block";
  worksLink.classList.remove("sideNavigation__link--active");
  menuLinks.forEach(element => {});
  homeLink.classList.add("sideNavigation__link--active");
}

function showWorksSection() {
  // console.log("works");
  homeSection.style.display = "none";
  caruzelaSection.style.display = "block";
  homeLink.classList.remove("sideNavigation__link--active");
  worksLink.classList.add("sideNavigation__link--active");
}

function showAboutSection() {
  console.log("about");
  homeSection.style.display = "none";
  caruzelaSection.style.display = "none";
  // aboutSection.style.display = "block";
  homeLink.classList.remove("sideNavigation__link--active");
  worksLink.classList.remove("sideNavigation__link--active");
  aboutLink.classList.add("sideNavigation__link--active");
}

function changeActiveSection(e) {
  // console.log(e.target);
  const { id } = e.target;
  const clickedSectionIndex = getSectionIndexFromID(id);
  // console.log(clickedSectionIndex);
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
      break;

    case "05":
      break;

    default:
      break;
  }
}

navButtons.forEach(button => {
  button.addEventListener("click", e => changeActiveSection(e), true);
  const buttonIndex = getSectionIndexFromID(button.id);
  console.log(button);
  // button.style.setProperty("--buttonBeforeContent", buttonIndex);
});

showWorksSection();
