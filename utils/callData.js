export const renderItems = (items, containerId) => {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id ${containerId} not found.`);
    return;
  }
  container.innerHTML = items
    .map(
      (item) => `
      <div class="col-md-3">
        <img src="${item.image}" alt="${item.name}" class="img-thumbnail" onclick="tryOn('${item.type}', '${item.image}')" />
      </div>
    `
    )
    .join("");
};
