const navButtons = [...document.querySelectorAll(".sideNavigation__link")];
const hireUsNavbutton = document.querySelector("header .hireUsButton");
const hireUsTaskWrappers = [...document.querySelectorAll(".taskWrapper")];
const toggleBigMenuButton = document.querySelector(".header__hamburgerWrapper");
const pageWrapper = document.querySelector(".mainPage");
const popupNavigation = document.querySelector(".popupNavigation");

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
  prevSection.classList.add("contactSection--scrolledUp");
}

// function animateScrollDown() {
//   worksSection.classList.toggle(".contactSection--scrolledUp");
// }

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
  setTimeout(() => contactSection.classList.remove("contactSection--scrolledUp"), "500");
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
  const prevSection = getActiveSection(activeSectionIndex);

  if (!sectionIndex) {
    const { id } = e.target;
    const clickedSectionIndex = getSectionIndexFromID(id);
    activeSectionIndex = clickedSectionIndex;
  } else {
    activeSectionIndex = sectionIndex;
  }

  switch (activeSectionIndex) {
    case 1:
      // animateScroll(homeSection);
      // setTimeout(() => showHomeSection(), "500");
      showHomeSection();
      break;

    case 2:
      animateScroll(contactSection);
      setTimeout(() => showWorksSection(), "500");
      // showWorksSection();
      break;

    case 3:
      animateScroll(contactSection);
      setTimeout(() => showAboutSection(), "500");
      break;

    case 4:
      animateScroll(contactSection);
      setTimeout(() => showContactSection(), "500");
      break;

    case 5:
      animateScroll(contactSection);
      setTimeout(() => showHireUsSection(), "500");
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
    changeActiveSection(e, activeSectionIndex);
  } else {
    if (activeSectionIndex > 1) {
      activeSectionIndex--;
    }

    changeActiveSection(e, activeSectionIndex);
  }
}

function toggleBigMenu() {
  console.log("zmien menu");
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

window.addEventListener("wheel", e => changeSectionOnScroll(e));

showWorksSection();
