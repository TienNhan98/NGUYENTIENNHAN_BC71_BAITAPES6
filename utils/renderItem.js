export const renderItems = (items, containerId) => {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id ${containerId} not found.`);
    return;
  }

  const itemsHtml = items
    .map(
      (item) => `
        <div class="col-md-3 mb-4">
          <div class="card">
            <img src="${item.image}" alt="${item.name}" class="card-img-top" style="width: 100%; height: auto;" onclick="tryOn('${item.type}', '${item.image}')" />
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
            </div>
          </div>
        </div>
      `
    )
    .join("");

  container.innerHTML = itemsHtml;
};
