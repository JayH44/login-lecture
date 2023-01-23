'use strict';

const fs = require('fs').promises;

class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static getUsers(...fields) {
    // const users = this.#users;
    const newUsers = fields.reduce((newUser, field) => {
      if (users.hasOwnProperty(field)) {
        newUser[field] = users[field];
      }
      return newUser;
    }, {});

    return newUsers;
  }

  static getUserInfo(id) {
    return fs
      .readFile('./src/databases/users.json')
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);
  }

  static save(user) {
    // const users = this.#users;
    users.id.push(user.id);
    users.password.push(user.password);
    users.name.push(user.name);
    return { success: true };
  }
}

module.exports = UserStorage;
