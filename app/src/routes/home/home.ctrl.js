'use strict';

const User = require('../../models/User');

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    let response = 0;
    if (!user.body?.name) {
      response = await user.login();
    } else {
      response = await user.register();
    }
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
