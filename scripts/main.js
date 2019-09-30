let myImage = document.querySelector('#nik-1');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/nik-1.jpg') {
        myImage.setAttribute('src', 'images/nik-2.jpg');
    }
    else {
        myImage.setAttribute('src', 'images/nik-1.jpg');
    }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
  let myName = prompt('Введите пожалуйста Ваше имя.');
    if(!myName || myName === null) {
      setUserName();
    } 
    else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Спорт для ловких и смелых, как ' + myName + ' !';
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Спорт для ловких и смелых, как ' + storedName + ' !';
  }

  myButton.onclick = function() {
    setUserName();
  }