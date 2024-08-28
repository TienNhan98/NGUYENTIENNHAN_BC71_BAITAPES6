// controllers/main.js
import { ChoseItem } from "../models/ChoseItem.js";
import { ListChosen } from "../models/ListChosen.js";
import { renderItems } from "../utils/renderItems.js";

// Dữ liệu tĩnh
const data = {
  shirt: [
    new ChoseItem(
      1,
      "bikinitop",
      "Shirt 1",
      "./../assets/images/clothes/topcloth1_show.jpg"
    ),
    new ChoseItem(
      2,
      "bikinitop",
      "Shirt 2",
      "./../assets/images/clothes/topcloth2_show.jpg"
    ),
  ],
  pants: [
    new ChoseItem(
      1,
      "bikinibottom",
      "Pants 1",
      "./../assets/images/clothes/bottomcloth1_show.jpg"
    ),
    new ChoseItem(
      2,
      "bikinibottom",
      "Pants 2",
      "./../assets/images/clothes/bottomcloth2_show.jpg"
    ),
  ],
  shoes: [
    new ChoseItem(
      1,
      "feet",
      "Shoes 1",
      "./../assets/images/shoes/shoe1_show.jpg"
    ),
    new ChoseItem(
      2,
      "feet",
      "Shoes 2",
      "./../assets/images/shoes/shoe2_show.jpg"
    ),
  ],
  handbags: [
    new ChoseItem(
      1,
      "handbag",
      "Handbag 1",
      "./../assets/images/handbags/handbag1_show.jpg"
    ),
    new ChoseItem(
      2,
      "handbag",
      "Handbag 2",
      "./../assets/images/handbags/handbag2_show.jpg"
    ),
  ],
  necklaces: [
    new ChoseItem(
      1,
      "necklace",
      "Necklace 1",
      "./../assets/images/necklaces/necklace1_show.jpg"
    ),
    new ChoseItem(
      2,
      "necklace",
      "Necklace 2",
      "./../assets/images/necklaces/necklace2_show.jpg"
    ),
  ],
  hairstyles: [
    new ChoseItem(
      1,
      "hairstyle",
      "Hairstyle 1",
      "./../assets/images/hairstyles/hairstyle1_show.jpg"
    ),
    new ChoseItem(
      2,
      "hairstyle",
      "Hairstyle 2",
      "./../assets/images/hairstyles/hairstyle2_show.jpg"
    ),
  ],
  backgrounds: [
    new ChoseItem(
      1,
      "background",
      "Background 1",
      "./../assets/images/backgrounds/background1_show.jpg"
    ),
    new ChoseItem(
      2,
      "background",
      "Background 2",
      "./../assets/images/backgrounds/background2_show.jpg"
    ),
  ],
};

const listChosen = new ListChosen();

// Hàm khởi tạo ứng dụng
const initializeApp = () => {
  renderItems(data.shirt, "item-container"); // Hiển thị áo mặc định
};

// Khởi tạo ứng dụng khi trang được load
window.onload = initializeApp;

// Xử lý khi người dùng click vào một item
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
      document.querySelector(
        `.${part}`
      ).style.backgroundImage = `url(${item.image})`;
      document.querySelector(`.${part}`).style.backgroundSize = "cover";
      document.querySelector(`.${part}`).style.backgroundPosition = "center";
    } else {
      document.querySelector(`.${part}`).style.backgroundImage = "";
    }
  });
};

// Xử lý sự kiện cho các tab
document.querySelectorAll(".nav-pills .nav-link").forEach((tab) => {
  tab.addEventListener("click", function () {
    const type = this.getAttribute("data-type");
    if (data[type]) {
      renderItems(data[type], "item-container");
    }
  });
});
