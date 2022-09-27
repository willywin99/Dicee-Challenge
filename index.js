
// document.querySelectorAll('img')[0].setAttribute('src', 'images/dice6.png');
// document.querySelectorAll('img')[1].setAttribute('src', 'images/dice6.png');
// let images = document.querySelectorAll('img');
// console.log(images);

// document.getElementsByTagName('img')[0].setAttribute('src', 'images/dice6.png');
// document.getElementsByTagName('img')[1].setAttribute('src', 'images/dice6.png');

let img1 = document.getElementsByClassName('img1')[0].setAttribute('src', 'images/dice6.png');
document.getElementsByClassName('img2')[0].setAttribute('src', 'images/dice6.png');

// let images = document.getElementsByTagName('img');
// console.log(images);
// images[0].src = 'images/dice6.png';
// images[1].src = 'images/dice6.png';

let randomNumber1 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1);

// img1.setAttribute('src', `images/dice${randomNumber1}.png`);
// img1.src = `images/dice${randomNumber1}.png`;

document.getElementsByClassName('img1')[0].setAttribute('src', `images/dice${randomNumber1}.png`);