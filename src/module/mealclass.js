export class Meals {
  constructor(id, name, description, image, youtublink, likes = 0) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.youtublink = youtublink;
    this.likes = likes;
  }

  set likesChanger(value) {
    this.likes = value;
  }
}

export default Meals;