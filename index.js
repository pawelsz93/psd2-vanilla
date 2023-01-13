import * as workCaruzelaSection from "./workCaruzelaSection.js";

const hireUsTaskWrappers = [...document.querySelectorAll(".taskWrapper")];
const pageWrapper = document.querySelector(".mainPage");
const popupNavigation = document.querySelector(".popupNavigation");

const navButtons = [...document.querySelectorAll(".sideNavigation__link")];
const popupNavButtons = [...document.querySelectorAll(".popupNavigationList__link")];
const popupNavListElements = [...document.querySelectorAll(".popupNavigationList__item")];
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

const homeNavListItem = document.getElementById("01_sideNavListItem");
const worksNavListItem = document.getElementById("02_sideNavListItem");
const aboutNavListItem = document.getElementById("03_sideNavListItem");
const contactNavListItem = document.getElementById("04_sideNavListItem");
const hireUsNavListItem = document.getElementById("05_sideNavListItem");

const allSections = [homeSection, worksSection, aboutSection, contactSection, hireUsSection];
const allLinks = [homeNavListItem, worksNavListItem, aboutNavListItem, contactNavListItem, hireUsNavListItem];

let activeSectionIndex = 2;
let popupMenuActive = false;

function throttle(fn, wait) {
  let time = Date.now();

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
    case 2:
      return worksSection;
    case 3:
      return aboutSection;
    case 4:
      return contactSection;
    case 5:
      return hireUsSection;

    default:
      break;
  }
}

function animateScroll(prevSection, scrollAnimation) {
  if (scrollAnimation == "scrollUp") {
    prevSection.classList.add(`${prevSection.classList[0]}--scrolledUp`);
  }
  if (scrollAnimation == "scrollDown") {
    prevSection.classList.add(`${prevSection.classList[0]}--scrolledDown`);
  }
  if (scrollAnimation == "normal") {
    prevSection.classList.add(`${prevSection.classList[0]}--scrolled`);
  }
}

function setActiveNavLink(chosenLink) {
  allLinks.forEach(link => {
    link.classList.remove("sideNavListItem--active");
  });
  popupNavListElements.forEach(link => {
    link.classList.remove("popupNavigationList__item--active");
  });

  chosenLink.classList.add("sideNavListItem--active");
  popupNavListElements[activeSectionIndex - 1].classList.add("popupNavigationList__item--active");
}

function showHomeSection() {
  homeSection.classList.remove("homeSection--scrolledUp");
  homeSection.classList.remove("homeSection--scrolledDown");
  homeSection.classList.remove("homeSection--scrolled");

  hireUsNavbutton.style.display = "none";
}

function showWorksSection() {
  worksSection.classList.remove("workCaruzelaSection--scrolledUp");
  worksSection.classList.remove("workCaruzelaSection--scrolledDown");
  worksSection.classList.remove("workCaruzelaSection--scrolled");

  hireUsNavbutton.style.display = "block";
}

function showAboutSection() {
  aboutSection.classList.remove("aboutSection--scrolledUp");
  aboutSection.classList.remove("aboutSection--scrolledDown");
  aboutSection.classList.remove("aboutSection--scrolled");

  hireUsNavbutton.style.display = "block";
}

function showContactSection() {
  contactSection.classList.remove("contactSection--scrolledUp");
  contactSection.classList.remove("contactSection--scrolledDown");
  contactSection.classList.remove("contactSection--scrolled");

  hireUsNavbutton.style.display = "block";
}

function showHireUsSection() {
  hireUsSection.classList.remove("hireUsSection--scrolledUp");
  hireUsSection.classList.remove("hireUsSection--scrolledDown");
  hireUsSection.classList.remove("hireUsSection--scrolled");

  hireUsNavbutton.style.display = "none";
}

function changeActiveSection(e, nextSectionIndex, scrollAnimation = "normal") {
  const prevSection = getActiveSection(activeSectionIndex);

  if (!nextSectionIndex) {
    const { id } = e.target;
    const clickedSectionIndex = getSectionIndexFromID(id);
    if (activeSectionIndex == clickedSectionIndex) return;
    activeSectionIndex = clickedSectionIndex;
  } else {
    activeSectionIndex = nextSectionIndex;
  }

  switch (activeSectionIndex) {
    case 1:
      animateScroll(prevSection, scrollAnimation);
      setActiveNavLink(homeNavListItem);
      setTimeout(() => showHomeSection(), "500");
      break;

    case 2:
      animateScroll(prevSection, scrollAnimation);
      setActiveNavLink(worksNavListItem);
      setTimeout(() => showWorksSection(), "500");
      break;

    case 3:
      animateScroll(prevSection, scrollAnimation);
      setActiveNavLink(aboutNavListItem);
      setTimeout(() => showAboutSection(), "500");
      break;

    case 4:
      animateScroll(prevSection, scrollAnimation);
      setActiveNavLink(contactNavListItem);
      setTimeout(() => showContactSection(), "500");
      break;

    case 5:
      animateScroll(prevSection, scrollAnimation);
      setActiveNavLink(hireUsNavListItem);
      setTimeout(() => showHireUsSection(), "500");
      break;

    default:
      console.log("błędny numer");
      break;
  }
}

function changeSectionOnScroll(e) {
  if (popupMenuActive) return; //ignore scrolling

  let nextSectionIndex = activeSectionIndex;
  let scrollAnimation = "normal";

  if (e.deltaY > 0) {
    if (nextSectionIndex < 5) {
      scrollAnimation = "scrollDown";
      nextSectionIndex++;
    } else {
      nextSectionIndex = 1;
    }
    changeActiveSection(e, nextSectionIndex, scrollAnimation);
  } else {
    if (nextSectionIndex > 1) {
      scrollAnimation = "scrollUp";
      nextSectionIndex--;
    } else {
      nextSectionIndex = 5;
    }
    changeActiveSection(e, nextSectionIndex, scrollAnimation);
  }
}

function handlePopupMenuChange(e) {
  toggleBigMenu();
  changeActiveSection(e);
}

function handleSideNavChange(e) {
  let scrollAnimation = "normal";
  const { id } = e.target;
  const clickedSectionIndex = getSectionIndexFromID(id);
  if (clickedSectionIndex > activeSectionIndex) {
    scrollAnimation = "scrollDown";
  }
  if (clickedSectionIndex < activeSectionIndex) {
    scrollAnimation = "scrollDown";
  }
  console.log(scrollAnimation);
  changeActiveSection(e);
}

function toggleBigMenu() {
  popupMenuActive = !popupMenuActive;

  if (popupMenuActive) {
    pageWrapper.addEventListener("click", toggleBigMenu, { capture: true, once: true });
  } else {
    pageWrapper.removeEventListener("click", toggleBigMenu, { capture: true, once: true });
  }
  pageWrapper.classList.toggle("mainPage--minimalized");
  popupNavigation.classList.toggle("popupNavigation--opened");
}

const toggleTaskCheckbox = taskWrapper => {
  const taskCheckbox = taskWrapper.querySelector(".taskWrapper__checkbox");
  taskCheckbox.checked = !taskCheckbox.checked;
};

navButtons.forEach(button => {
  button.addEventListener("click", e => handleSideNavChange(e));
});

popupNavButtons.forEach(button => {
  button.addEventListener("click", e => handlePopupMenuChange(e), true);
});

hireUsTaskWrappers.forEach(taskWrapper => {
  taskWrapper.addEventListener("click", () => toggleTaskCheckbox(taskWrapper));
});

toggleBigMenuButton.addEventListener("click", e => toggleBigMenu(e));

window.addEventListener("wheel", e => onScroll(e));

switchLeftCaruzelaButton.addEventListener("click", workCaruzelaSection.switchLeft);
switchRightCaruzelaButton.addEventListener("click", workCaruzelaSection.switchRight);

changeActiveSection(false, 1);
