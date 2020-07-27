export default class User {

  constructor(id, firstName, lastName, email, phone) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.address = {}
    this.address.city = 'Moscow';
    this.address.zip = '115419';
    this.address.state = 'Moscow';
    this.address.streetAddress = 'Москва, ул. Орджоникидзе, 11';
    this.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, voluptate molestias dolores.'
  }
}
