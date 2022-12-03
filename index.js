import * as workCaruzelaSection from "./workCaruzelaSection.js";

const hireUsTaskWrappers = [...document.querySelectorAll(".taskWrapper")];
const pageWrapper = document.querySelector(".mainPage");
const popupNavigation = document.querySelector(".popupNavigation");

const navButtons = [...document.querySelectorAll(".sideNavigation__link")];
const hireUsNavbutton = document.querySelector("header .hireUsButton");
const toggleBigMenuButton = document.querySelector(".header__hamburgerWrapper");
const switchLeftCaruzelaButton = document.getElementById("caruzela_leftButton");
const switchRightCaruzelaButton = document.getElementById("caruzela_RightButton");

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

let activeSectionIndex = 2;

function throttle(fn, wait) {
  let time = Date.now();
  console.log(time);
  return function () {
    if (time + wait - Date.now() < 0) {
      fn.apply(this, arguments);
      time = Date.now();
    }
  };
}

const onScroll = throttle(e => changeSectionOnScroll(e), 1000);

function getSectionIndexFromID(id) {
  const index = Number(id.slice(0, 2));
  return index;
}

function getActiveSection(index) {
  switch (index) {
    case 1:
      return homeSection;
      break;
    case 2:
      return worksSection;
      break;
    case 3:
      return aboutSection;
      break;
    case 4:
      return contactSection;
      break;
    case 5:
      return hireUsSection;
      break;

    default:
      break;
  }
}

function animateScroll(prevSection) {
  prevSection.classList.add(`${prevSection.classList[0]}--scrolledUp`);
}

function setActiveNavLink(chosenLink) {
  allLinks.forEach(link => {
    link.classList.remove("sideNavigation__link--active");
  });
  chosenLink.classList.add("sideNavigation__link--active");
}

function showHomeSection() {
  hireUsNavbutton.style.display = "none";

  homeSection.classList.remove("homeSection--scrolledUp");
}

function showWorksSection() {
  hireUsNavbutton.style.display = "block";

  worksSection.classList.remove("workCaruzelaSection--scrolledUp");
}

function showAboutSection() {
  hireUsNavbutton.style.display = "block";

  aboutSection.classList.remove("aboutSection--scrolledUp");
}

function showContactSection() {
  hireUsNavbutton.style.display = "block";

  contactSection.classList.remove("contactSection--scrolledUp");
}

function showHireUsSection() {
  hireUsNavbutton.style.display = "none";

  hireUsSection.classList.remove("hireUsSection--scrolledUp");
}

function changeActiveSection(e, sectionIndex) {
  const prevSection = getActiveSection(activeSectionIndex);

  if (!sectionIndex) {
    const { id } = e.target;
    const clickedSectionIndex = getSectionIndexFromID(id);
    if (activeSectionIndex == clickedSectionIndex) return;
    activeSectionIndex = clickedSectionIndex;
  } else {
    activeSectionIndex = sectionIndex;
  }

  switch (activeSectionIndex) {
    case 1:
      animateScroll(prevSection);
      setActiveNavLink(homeLink);
      setTimeout(() => showHomeSection(), "500");
      break;

    case 2:
      animateScroll(prevSection);
      setActiveNavLink(worksLink);
      setTimeout(() => showWorksSection(), "500");
      break;

    case 3:
      animateScroll(prevSection);
      setActiveNavLink(aboutLink);
      setTimeout(() => showAboutSection(), "500");
      break;

    case 4:
      animateScroll(prevSection);
      setActiveNavLink(contactLink);
      setTimeout(() => showContactSection(), "500");
      break;

    case 5:
      animateScroll(prevSection);
      setActiveNavLink(hireUsLink);
      setTimeout(() => showHireUsSection(), "500");
      break;

    default:
      console.log("błędny numer");
      break;
  }
}

function changeSectionOnScroll(e) {
  let nextSectionIndex = activeSectionIndex;

  if (e.deltaY > 0) {
    if (nextSectionIndex < 5) {
      nextSectionIndex++;
    } else {
      nextSectionIndex = 1;
    }
    console.log(nextSectionIndex);
    changeActiveSection(e, nextSectionIndex);
  } else {
    if (nextSectionIndex > 1) {
      nextSectionIndex--;
    } else {
      nextSectionIndex = 5;
    }

    changeActiveSection(e, nextSectionIndex);
  }
}

function toggleBigMenu() {
  pageWrapper.classList.toggle("mainPage--minimalized");
  popupNavigation.classList.toggle("popupNavigation--opened");
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

window.addEventListener("wheel", e => onScroll(e));

switchLeftCaruzelaButton.addEventListener("click", workCaruzelaSection.switchLeft);
switchRightCaruzelaButton.addEventListener("click", workCaruzelaSection.switchRight);

changeActiveSection(false, 2);
