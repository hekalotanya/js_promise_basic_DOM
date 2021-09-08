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
    const message = document.createElement('div');

    message.classList.add('message');
    message.textContent = 'Promise was resolved!';

    document.body.append(message);
  });

promise2
  .catch(() => {
    const message = document.createElement('div');

    message.classList.add('error-message');
    message.textContent = 'Promise was rejected!';

    document.body.append(message);
  });
