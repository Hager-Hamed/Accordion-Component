// #endregion Accordion functionality
let accordionBtnsList = window.document.querySelectorAll(".accordion__button");

accordionBtnsList.forEach((btn) => {
  btn.addEventListener("click", () => {
    const accordionItem = btn.closest(".accordion__item");
    // const accordionItem = btn.parentElement.parentElement;
    accordionItem.classList.toggle("open");
  });
});

// #endregion

// #region Start  Accordion functionality seperated closed
// Caching the needed Dom Elements
// let accordionBtnsList = window.document.querySelectorAll(".accordion__button");
// let accordionItemList = window.document.querySelectorAll(".accordion__item");

// accordionBtnsList.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const accordionItem = btn.closest(".accordion__item");

//     accordionItemList.forEach((item) => {
//       if (item === accordionItem) {
//         item.classList.toggle("open");
//       } else {
//         item.classList.remove("open");
//       }
//     });
//     // const accordionItem = btn.parentElement.parentElement;
//     // accordionItem.classList.toggle('open');
//   });
// });

// #endregion

// #region Start   auto update Current year functionality
// Caching the needed Dom Elements
const currentYearElements = window.document.querySelectorAll(".current-year");
const currentYear = new Date().getFullYear();

currentYearElements.forEach((ele) => {
  ele.textContent = currentYear;
});

// #endregion
