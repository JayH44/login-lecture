'use strict';

class UserStorage {
  static #users = {
    id: ['개발자1', 'Dev02', '김발자'],
    password: ['1234', '23456', '345678'],
    name: ['우리밋', '나개발', '김팀장'],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUser, field) => {
      if (users.hasOwnProperty(field)) {
        newUser[field] = users[field];
      }
      return newUser;
    }, {});

    return newUsers;
  }
}

module.exports = UserStorage;
