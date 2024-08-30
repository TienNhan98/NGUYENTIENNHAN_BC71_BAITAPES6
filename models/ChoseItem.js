export class ChoseItem {
  constructor(id, type, name, image, replacementImage = "") {
    this.id = id;
    this.type = type;
    this.name = name;
    this.image = image;
    this.replacementImage = replacementImage;
  }
}
