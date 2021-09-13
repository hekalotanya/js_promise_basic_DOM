'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

promise1
  .then(() => {
    createMessage('message', 'Promise was resolved!');
  });

promise2
  .catch(() => {
    createMessage('error-message', 'Promise was rejected!');
  });

function createMessage(clas, mes) {
  const message = document.createElement('div');

  message.classList.add(`${clas}`);
  message.textContent = `${mes}`;

  document.body.append(message);
};
