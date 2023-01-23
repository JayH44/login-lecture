'use strict';

const id = document.querySelector('#login-Id'),
  password = document.querySelector('#login-Pd'),
  loginBtn = document.querySelector('#btnLogin'),
  createAcc = document.querySelector('#createAcc'),
  loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  login();
});

function login() {
  const req = {
    id: id.value,
    password: password.value,
  };

  fetch('/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = '/';
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error('로그인 중 에러 발생');
      console.error(new Error('로그인 중 에러 발생'));
    });
}

const regId = document.querySelector('#register-Id'),
  regPd = document.querySelector('#register-Pd'),
  regPdC = document.querySelector('#register-PdCd'),
  regName = document.querySelector('#register-Name'),
  btnCreate = document.querySelector('#btnCreate'),
  regiForm = document.querySelector('.register-form'),
  signIn = document.querySelector('#signIn');

createAcc.addEventListener('click', (e) => {
  e.preventDefault();
  regiForm.style.display = 'block';
  loginForm.style.display = 'none';
});

signIn.addEventListener('click', (e) => {
  e.preventDefault();
  regiForm.style.display = 'none';
  loginForm.style.display = 'block';
});

regiForm.addEventListener('submit', (e) => {
  e.preventDefault();
  register();
});

function register() {
  if (!regId.value) return alert('아이디를 입력해주세요');
  if (regPd.value !== regPdC.value) {
    return alert('비밀번호가 일치하지 않습니다.');
  }

  const req = {
    id: regId.value,
    password: regPd.value,
    name: regName.value,
  };

  fetch('/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = '/login';
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error('회원가입 중 에러 발생');
      console.error(new Error('회원가입중 중 에러 발생'));
    });
}
