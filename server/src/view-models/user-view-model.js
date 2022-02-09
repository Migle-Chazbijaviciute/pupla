class UserViewModel {
  constructor({ _id, email, role, name, surname, phoneNumber, country, address, city, zipcode, createdAt, updatedAt }) {
    this.id = _id;
    this.email = email;
    this.role = role;
    this.name = name;
    this.surname = surname;
    this.phoneNumber = phoneNumber;
    this.country = country;
    this.address = address;
    this.city = city;
    this.zipcode = zipcode;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = UserViewModel;
