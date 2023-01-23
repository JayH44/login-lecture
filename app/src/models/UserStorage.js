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

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
  static save(user) {
    const users = this.#users;
    users.id.push(user.id);
    users.password.push(user.password);
    users.name.push(user.name);
    return { success: true };
  }
}

module.exports = UserStorage;
