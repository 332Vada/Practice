let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3500); // Изменение слайда каждые 2.5 секунды
}

showSlides();

function changeSlide(n) {
  slideIndex += n;
  let slides = document.getElementsByClassName("slide");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

document.querySelector('.prev').addEventListener('click', function() {
  changeSlide(-1);
});

document.querySelector('.next').addEventListener('click', function() {
  changeSlide(1);
});

function changeSlide(n) {
  slideIndex += n;
  let slides = document.getElementsByClassName("slide");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

document.getElementById('passengersField').addEventListener('click', function() {
  document.getElementById('passengersMenu').style.display = 'block';
});

document.querySelectorAll('#passengersMenu li').forEach(item => {
  item.addEventListener('click', function() {
      document.getElementById('passengersField').value = this.getAttribute('data-value');
      document.getElementById('passengersMenu').style.display = 'none';
  });
});

function validateForm() {
  const name = document.getElementById('name-field').value;
  const surname = document.getElementById('surname-field').value;
  const documents = document.getElementById('documents-field').value;
  const phone = document.getElementById('phone-field').value;
  const password = document.getElementById('password-field').value;
  const repeatPassword = document.getElementById('repeat-password-field').value;
  const errorMessage = document.getElementById('error-message');

  if (!name || !surname || !documents || !phone || !password || !repeatPassword) {
    errorMessage.textContent = "Ошибка! Пожалуйста, заполните все поля.";
    return;
  }

  if (password.length < 7 || !/\d/.test(password) || !['!', '*', '$'].some(char => password.includes(char))) {
    errorMessage.textContent = "Ошибка! Пароль должен содержать не менее 7 символов, цифры и один из символов: !, *, $";
    return;
  }

  if (password !== repeatPassword) {
    errorMessage.textContent = "Ошибка! Пароли не совпадают";
    return;
  }

  // Если все проверки пройдены, можно отправить форму
  errorMessage.textContent = "Данные заполнены корректно. Форма отправлена!";
}

function validateLogin() {
  const phone = document.getElementById('phone-field').value;
  const password = document.getElementById('password-field').value;
  const errorMessage = document.getElementById('error-message');

  if (!phone || !password) {
    errorMessage.textContent = "Ошибка! Пожалуйста, заполните все поля.";
    return;
  }

  if (phone !== '89991234567' || password !== 'password12*') {
    errorMessage.textContent = "Ошибка! Неправильный телефон или пароль.";
    return;
  }

  // Если все проверки пройдены, можно выполнить вход
  errorMessage.textContent = "Успешный вход!";
  // Дополнительные действия при успешном входе
}
