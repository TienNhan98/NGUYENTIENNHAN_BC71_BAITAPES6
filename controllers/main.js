// main.js

import { ChoseItem } from "../models/ChoseItem.js";
import { ListChosen } from "../models/ListChosen.js";
import { renderItems } from "../utils/renderItem.js";

const listChosen = new ListChosen();

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event fired");
  fetch("../data/Data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log("Data fetched:", data);
      renderNavPills(data.navPills, data.tabPanes);
      renderItems("topclothes", data.tabPanes);
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function renderNavPills(navPills, tabPanes) {
  console.log("Rendering nav pills");
  const navContainer = document.getElementById("nav-pills-container");
  navPills.forEach((pill) => {
    const navItem = document.createElement("a");
    navItem.classList.add("nav-item", "nav-link");
    navItem.setAttribute("id", pill.tabName);
    navItem.setAttribute("data-type", pill.type);
    navItem.innerText = pill.showName;

    navItem.addEventListener("click", () => {
      renderItems(pill.type, tabPanes);
    });

    navContainer.appendChild(navItem);
  });
}

window.tryOnItem = (imgSrc, type) => {
  const modelPart = document.querySelector(`.${type}`);
  if (modelPart) {
    modelPart.style.backgroundImage = `url(${imgSrc})`;
  }
};
