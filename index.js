const navButtons = [...document.querySelectorAll(".sideNavigation__link")];
const homeSection = document.getElementById("homeSection");
const caruzelaSection = document.getElementById("caruzelaSection");
const homeLink = document.getElementById("01_sideNav");
const worksLink = document.getElementById("02_sideNav");
const menuLinks = [];

function getSectionIndexFromID(id) {
  return id.slice(0, 2);
}

function showHomeSection() {
  console.log("home");
  caruzelaSection.style.display = "none";
  homeSection.style.display = "block";
  worksLink.classList.remove("sideNavigation__link--active");
  menuLinks.forEach(element => {});
  homeLink.classList.add("sideNavigation__link--active");
}

function showWorkCaruzelaSection() {
  console.log("caruzela");
  homeSection.style.display = "none";
  caruzelaSection.style.display = "block";
  homeLink.classList.remove("sideNavigation__link--active");
  worksLink.classList.add("sideNavigation__link--active");
}

function changeActiveSection(e) {
  console.log(e.target);
  const { id } = e.target;
  const clickedSectionIndex = getSectionIndexFromID(id);
  console.log(clickedSectionIndex);
  switch (clickedSectionIndex) {
    case "01":
      showHomeSection();
      break;

    case "02":
      showWorkCaruzelaSection();
      break;

    case "03":
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
});
