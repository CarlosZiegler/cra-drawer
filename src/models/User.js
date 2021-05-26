export class User {
  constructor(data) {
    this.id = data.uuid;
    this.email = data.email;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.imageUrl = data.image;
    Object.freeze(this);
  }
  static fromJson(data) {
    return new User(data);
  }
}
