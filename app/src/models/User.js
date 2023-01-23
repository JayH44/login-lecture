'use strict';
const UserStorage = require('./UserStorage');

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const { id, password } = UserStorage.getUserInfo(this.body.id);

    if (id) {
      if (id === this.body.id && password === this.body.password) {
        return { success: true };
      }
      return { success: false, msg: '비밀번호가 같지 않습니다.' };
    }
    return { success: false, msg: '사용자 아이디가 없습니다.' };
  }

  register() {
    const result = UserStorage.save(this.body);
    return result;
  }
}

module.exports = User;
