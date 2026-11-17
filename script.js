// Проверка формы обратной связи на странице «Контакты»

const form = document.querySelector('.form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const result = document.querySelector('#result');

// Показываем сообщение под формой: красное при ошибке, зелёное при успехе
function showResult(text, isError) {
  result.textContent = text;
  result.className = isError ? 'form__result form__result--error' : 'form__result form__result--success';
}

form.addEventListener('submit', function (event) {
  // Отменяем перезагрузку страницы
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '') {
    showResult('Введите имя', true);
    return;
  }

  // В email должны быть @ и точка
  if (!email.includes('@') || !email.includes('.')) {
    showResult('Введите правильный email', true);
    return;
  }

  if (message.length < 10) {
    showResult('Сообщение должно быть не короче 10 символов', true);
    return;
  }

  showResult('Спасибо, ' + name + '! Сообщение отправлено', false);
  form.reset();
});
