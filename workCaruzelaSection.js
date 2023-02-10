let activeWorkElement = 3;
const works = [...document.querySelectorAll(".workElement")];
const work1 = { element: works[0], index: 1 };
const work2 = { element: works[1], index: 2 };
const work3 = { element: works[2], index: 3 };
const worksObjects = [work1, work2, work3];

function fadeOutAndIn(worksObjects) {
  worksObjects.forEach(workObj => {
    workObj.element.classList.toggle("caruzela__workElement--fadedOut");
  });
}

export function switchRight() {
  fadeOutAndIn(worksObjects);

  setTimeout(() => {
    worksObjects.forEach(work => {
      work.index--;
      if (work.index == 0) work.index = 3;
      if (work.index == 2) {
        work.element.classList.add("caruzela__workElement--active");
      } else {
        work.element.classList.remove("caruzela__workElement--active");
      }
      work.element.style.order = work.index;

      setTimeout(() => {
        fadeOutAndIn(worksObjects);
      }, 300);
    });
  }, 300);
}

export function switchLeft() {
  fadeOutAndIn(worksObjects);

  setTimeout(() => {
    worksObjects.forEach(work => {
      work.index++;
      if (work.index == 4) work.index = 1;
      if (work.index == 2) {
        work.element.classList.add("caruzela__workElement--active");
      } else {
        work.element.classList.remove("caruzela__workElement--active");
      }
      work.element.style.order = work.index;

      setTimeout(() => {
        fadeOutAndIn(worksObjects);
      }, 300);
    });
  }, 300);
}
