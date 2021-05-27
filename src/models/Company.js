export class Company {
  constructor(data) {
    this.email = data.email;
    this.name = data.name;
    this.phone = data.phone;
    this.country = data.country;
    this.imageUrl = data.imageUrl;
    Object.freeze(this);
  }
  static fromJson(data) {
    return new Company({ ...data, imageUrl: data.image });
  }
}
