export class Meals {
  constructor(id, name, image, likes = 0, description) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.likes = likes;
  }

  set likesChanger(value) {
    this.likes = value;
  }
}

export default Meals;