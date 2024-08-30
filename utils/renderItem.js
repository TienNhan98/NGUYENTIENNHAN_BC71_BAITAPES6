export function renderItems(type, items) {
  const container = document.getElementById("tab-content-container");
  container.innerHTML = ""; // Xóa nội dung hiện tại

  const filteredItems = items.filter((item) => item.type === type);

  filteredItems.forEach((item) => {
    const itemHtml = `
      <div class="card">
        <img src="${item.imgSrc_jpg}" alt="${item.name}" class="card-img-top">
        <div class="card-body text-center">
          <h5 class="card-title">${item.name}</h5>
          <button class="btn btn-primary try-btn" onclick="tryOnItem('${item.imgSrc_png}', '${item.type}')">Thử đồ</button>
        </div>
      </div>
    `;
    container.innerHTML += itemHtml;
  });
}
