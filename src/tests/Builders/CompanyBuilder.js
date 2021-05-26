export class CompanyBuilder {
  constructor(data) {
    const values = {
      email: 'konopelski.eveline@kreiger.info',
      name: 'Green Group',
      phone: '+8404012719660',
      country: 'Netherlands',
      imageUrl: 'http://lesch.com',
      ...data,
    };
    Object.assign(this, values);
  }

  static aCompany(data) {
    return new CompanyBuilder(data);
  }

  build() {
    return this;
  }
}
