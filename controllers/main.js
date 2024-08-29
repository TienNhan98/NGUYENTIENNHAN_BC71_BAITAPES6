import { ChoseItem } from "../models/ChoseItem.js";
import { ListChosen } from "../models/ListChosen.js";
import { renderItems } from "../utils/renderItems.js";

const data = {
  shirt: [
    new ChoseItem(
      1,
      "bikinitop",
      "Shirt 1",
      "./../assets/images/topcloth1_show.jpg"
    ),
    new ChoseItem(
      2,
      "bikinitop",
      "Shirt 2",
      "/assets/images/clothes/topcloth1_show.jpg"
    ),
  ],
  pants: [
    new ChoseItem(
      1,
      "bikinibottom",
      "Pants 1",
      "/assets/images/clothes/topcloth1_show.jpg"
    ),
    new ChoseItem(
      2,
      "bikinibottom",
      "Pants 2",
      "/assets/images/clothes/topcloth1_show.jpg"
    ),
  ],
  shoes: [
    new ChoseItem(
      1,
      "feet",
      "Shoes 1",
      "/assets/images/clothes/topcloth1_show.jpg"
    ),
    new ChoseItem(
      2,
      "feet",
      "Shoes 2",
      "/assets/images/clothes/topcloth1_show.jpg"
    ),
  ],
  handbags: [
    new ChoseItem(
      1,
      "handbag",
      "Handbag 1",
      "/assets/images/clothes/topcloth1_show.jpg"
    ),
    new ChoseItem(
      2,
      "handbag",
      "Handbag 2",
      "/assets/images/clothes/topcloth1_show.jpg"
    ),
  ],
  necklaces: [
    new ChoseItem(
      1,
      "necklace",
      "Necklace 1",
      "/assets/images/clothes/topcloth1_show.jpg"
    ),
    new ChoseItem(
      2,
      "necklace",
      "Necklace 2",
      "/assets/images/clothes/topcloth1_show.jpg"
    ),
  ],
  hairstyles: [
    new ChoseItem(
      1,
      "hairstyle",
      "Hairstyle 1",
      "/assets/images/clothes/topcloth1_show.jpg"
    ),
    new ChoseItem(
      2,
      "hairstyle",
      "Hairstyle 2",
      "/assets/images/clothes/topcloth1_show.jpg"
    ),
  ],
  backgrounds: [
    new ChoseItem(
      1,
      "background",
      "Background 1",
      "/assets/images/clothes/topcloth1_show.jpg"
    ),
    new ChoseItem(
      2,
      "background",
      "Background 2",
      "/assets/images/clothes/topcloth1_show.jpg"
    ),
  ],
};

const listChosen = new ListChosen();

const initializeApp = () => {
  renderItems(data.shirt, "item-container");
};

window.onload = initializeApp;

window.tryOn = (type, image) => {
  console.log(`Trying on: ${type} with image ${image}`);
  listChosen.removeItem(type);
  listChosen.addItem(new ChoseItem(0, type, "", image));
  updateModel();
};

const updateModel = () => {
  const parts = [
    "bikinitop",
    "bikinibottom",
    "feet",
    "handbag",
    "necklace",
    "hairstyle",
    "background",
  ];
  parts.forEach((part) => {
    const item = listChosen.getItemByType(part);
    if (item) {
      const element = document.querySelector(`.${part}`);
      if (element) {
        element.style.backgroundImage = `url(${item.image})`;
        element.style.backgroundSize = "cover";
        element.style.backgroundPosition = "center";
      }
    } else {
      const element = document.querySelector(`.${part}`);
      if (element) {
        element.style.backgroundImage = "";
      }
    }
  });
};

document.querySelectorAll(".nav-pills .nav-link").forEach((tab) => {
  tab.addEventListener("click", function (event) {
    event.preventDefault();
    const type = this.getAttribute("data-type");
    if (data[type]) {
      renderItems(data[type], "item-container");
      document.querySelectorAll(".nav-pills .nav-link").forEach((navLink) => {
        navLink.classList.remove("active");
      });
      this.classList.add("active");
    }
  });
});
