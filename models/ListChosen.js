export class ListChosen {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.removeItem(item.type);
    this.items.push(item);
  }

  removeItem(type) {
    this.items = this.items.filter((item) => item.type !== type);
  }

  getItemByType(type) {
    return this.items.find((item) => item.type === type);
  }
}
