const { faker } = require('@faker-js/faker');

module.exports = {
  generateUser: () => {
    return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: 'Test@1234'
    };
  }
};