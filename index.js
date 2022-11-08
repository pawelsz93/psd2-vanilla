const navButtons = [...document.querySelectorAll(".sideNavigation__link")];
const hireUsNavbutton = document.querySelector("header .hireUsButton");
const hireUsTaskWrappers = [...document.querySelectorAll(".taskWrapper")];
const toggleBigMenuButton = document.querySelector(".header__hamburgerWrapper");
const pageWrapper = document.querySelector(".wrapper");

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

let activeSectionIndex = 0;

function getSectionIndexFromID(id) {
  const index = Number(id.slice(0, 2));
  console.log(index);
  return index;
}

function animateScrollUp() {}

function animateScrollDown() {}

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

function changeActiveSection(e, sectionIndex) {
  if (!sectionIndex) {
    const { id } = e.target;
    const clickedSectionIndex = getSectionIndexFromID(id);
    activeSectionIndex = clickedSectionIndex;
  } else {
    activeSectionIndex = sectionIndex;
  }
  console.log(activeSectionIndex);
  switch (activeSectionIndex) {
    case 1:
      showHomeSection();
      break;

    case 2:
      showWorksSection();
      break;

    case 3:
      showAboutSection();
      break;

    case 4:
      showContactSection();
      break;

    case 5:
      showHireUsSection();
      break;

    default:
      console.log("błędny numer");
      break;
  }
}

function changeSectionOnScroll(e) {
  //funkcja debounce
  if (e.deltaY > 0) {
    if (activeSectionIndex < 5) {
      activeSectionIndex++;
    }
    animateScrollUp();
    changeActiveSection(e, activeSectionIndex);
    console.log(activeSectionIndex);
  } else {
    if (activeSectionIndex > 1) {
      activeSectionIndex--;
    }
    animateScrollDown();

    changeActiveSection(e, activeSectionIndex);
    console.log(activeSectionIndex);
  }
}

function toggleBigMenu() {
  console.log("zmien menu");
  pageWrapper.classList.toggle("wrapper--minimalized");
}

const toggleTaskCheckbox = taskWrapper => {
  const taskCheckbox = taskWrapper.querySelector(".taskWrapper__checkbox");
  taskCheckbox.checked = !taskCheckbox.checked;
};

navButtons.forEach(button => {
  button.addEventListener("click", e => changeActiveSection(e), true);
});

hireUsTaskWrappers.forEach(taskWrapper => {
  taskWrapper.addEventListener("click", () => toggleTaskCheckbox(taskWrapper));
});

toggleBigMenuButton.addEventListener("click", () => toggleBigMenu());

window.addEventListener("wheel", e => changeSectionOnScroll(e));

showContactSection();
