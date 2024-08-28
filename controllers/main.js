import { ChoseItem } from "../models/ChoseItem.js";
import { ListChosen } from "../models/ListChosen.js";

// Khởi tạo danh sách các mục đã chọn
const listChosen = new ListChosen();

// Dữ liệu cho các loại item
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
      3,
      "bikinibottom",
      "Pants 1",
      "./../assets/images/clothes/bottomcloth1_show.jpg"
    ),
    new ChoseItem(
      4,
      "bikinibottom",
      "Pants 2",
      "./../assets/images/clothes/bottomcloth2_show.jpg"
    ),
  ],
  shoes: [
    new ChoseItem(
      5,
      "feet",
      "Shoes 1",
      "./../assets/images/clothes/shoes1_show.jpg"
    ),
    new ChoseItem(
      6,
      "feet",
      "Shoes 2",
      "./../assets/images/clothes/shoes2_show.jpg"
    ),
  ],
  handbags: [
    new ChoseItem(
      7,
      "handbag",
      "Handbag 1",
      "./../assets/images/clothes/handbag1_show.jpg"
    ),
    new ChoseItem(
      8,
      "handbag",
      "Handbag 2",
      "./../assets/images/clothes/handbag2_show.jpg"
    ),
  ],
  necklaces: [
    new ChoseItem(
      9,
      "necklace",
      "Necklace 1",
      "./../assets/images/clothes/necklace1_show.jpg"
    ),
    new ChoseItem(
      10,
      "necklace",
      "Necklace 2",
      "./../assets/images/clothes/necklace2_show.jpg"
    ),
  ],
  hairstyles: [
    new ChoseItem(
      11,
      "hairstyle",
      "Hairstyle 1",
      "./../assets/images/clothes/hairstyle1_show.jpg"
    ),
    new ChoseItem(
      12,
      "hairstyle",
      "Hairstyle 2",
      "./../assets/images/clothes/hairstyle2_show.jpg"
    ),
  ],
  backgrounds: [
    new ChoseItem(
      13,
      "background",
      "Background 1",
      "./../assets/images/clothes/background1_show.jpg"
    ),
    new ChoseItem(
      14,
      "background",
      "Background 2",
      "./../assets/images/clothes/background2_show.jpg"
    ),
  ],
};

// Hàm render các item cho từng tab
const renderTabItems = (type) => {
  if (data[type]) {
    const container = document.getElementById("item-container");
    container.innerHTML = "";
    data[type].forEach((item) => {
      const div = document.createElement("div");
      div.className = "item";
      div.style.margin = "10px"; // Add some margin for better spacing
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width: 100px; height: 100px; object-fit: cover;">
        <p>${item.name}</p>
        <button class="btn btn-primary" onclick="tryOn('${item.type}', '${item.image}')">Thử Đồ</button>
      `;
      container.appendChild(div);
    });
  }
};

// Render các tab khi trang được load
window.onload = () => {
  renderTabItems("shirt"); // Mặc định hiển thị áo trước
};

// Xử lý khi người dùng click vào một item
window.tryOn = (type, image) => {
  console.log(`Trying on: ${type} with image ${image}`);
  listChosen.removeItem(type);
  listChosen.addItem(new ChoseItem(0, type, "", image));
  updateModel();
};

// Cập nhật model sau khi người dùng chọn item
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
      document.querySelector(`.${part}`).style.backgroundSize = "cover"; // Ensure image covers the container
      document.querySelector(`.${part}`).style.backgroundPosition = "center"; // Center the image
    } else {
      document.querySelector(`.${part}`).style.backgroundImage = "";
    }
  });
};

// Xử lý sự kiện khi nhấn vào các tab
document.querySelectorAll(".nav-pills .nav-link").forEach((tab) => {
  tab.addEventListener("click", function () {
    const type = this.getAttribute("data-type");
    renderTabItems(type);
  });
});
