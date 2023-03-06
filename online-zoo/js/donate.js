document.addEventListener('DOMContentLoaded', function () {
  // BURGER MENU

  const burgerSpans = document.querySelectorAll('.header__burger-span');
  const openMenu = () => {
    document.querySelector('body').classList.add('lock');
    document.querySelector('.body-overlay').classList.add('body-overlay--visible');
    document.querySelector('.header__burger').classList.add('header__burger--active');
    burgerSpans.forEach(span => span.classList.add('header__burger-span--active'));
    document.querySelector('.header__nav').classList.add('header__nav--active');
    document.querySelector('.header__logo').classList.add('header__logo--active');
    document.querySelector('.header__burger').setAttribute('aria-label', 'Close menu');
  }

  const closeMenu = () => {
    document.querySelector('.header__burger').classList.remove('header__burger--active');
    document.querySelector('body').classList.remove('lock');
    document.querySelector('.body-overlay').classList.remove('body-overlay--visible');
    document.querySelector('.header__burger').classList.remove('header__burger--active');
    burgerSpans.forEach(span => span.classList.remove('header__burger-span--active'));
    document.querySelector('.header__nav').classList.remove('header__nav--active');
    document.querySelector('.header__logo').classList.remove('header__logo--active');
    document.querySelector('.header__burger').setAttribute('aria-label', 'Open menu');
  }

  document.querySelector('#burger').addEventListener('click', () => {
    if (!document.querySelector('.header__burger').classList.contains('header__burger--active')) {
      openMenu();
    } else if (document.querySelector('.header__burger').classList.contains('header__burger--active')) {
      closeMenu();
    }
  });

  document.querySelector('.body-overlay').addEventListener('click', closeMenu);

  document.querySelector('#donate-choice6').checked = true;
  const inputPrice = document.querySelector('.donate-app-form__custom-price');
  const checkedInput = document.querySelector('.donate-app-form__progress-bar-input:checked');
  inputPrice.value = checkedInput.value;
  const form = document.querySelector('.donate-app-form');
  let checkedInputVar = checkedInput;

  const priceArr = [5000, 2000, 1000, 500, 250, 100, 50, 25];

  form.addEventListener('input', (e) => {
    inputPrice.value = e.target.value;

    if (priceArr.includes(+inputPrice.value)) {
      checkedInputVar = document.querySelector(`[data-price="${inputPrice.value}"]`);
      checkedInputVar.checked = true;
    } else {
      checkedInputVar.checked = false;
    }
  });

  inputPrice.addEventListener('input', (e) => {
    inputPrice.value = inputPrice.value.replace(/\D/g, '');

    if (inputPrice.value.length >= 5) {
      inputPrice.value = inputPrice.value.slice(0, 4);
    }
  });

}, false);