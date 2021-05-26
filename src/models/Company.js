export class User {
  constructor(data) {
    this.id = data.uuid;
    this.email = data.email;
    this.name = data.name;
    this.phone = data.phone;
    this.country = data.country;
    this.imageUrl = data.image;
    Object.freeze(this);
  }
}
