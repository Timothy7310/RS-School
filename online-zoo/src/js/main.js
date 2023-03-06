document.addEventListener('DOMContentLoaded', function () {
    const desktop = window.matchMedia('(min-width: 1000px)');
    const mobile = window.matchMedia('(min-width: 0px) and (max-width: 999px)');
    const pets = [
      {
        "name": "Giant Pandas",
        "src": "assets/img/giant-pandas",
        "typeFood": "banana-bamboo",
        "geo": "Native to Southwest China",
        "tooltipGeo": "Shanghai, China",
        "tooltipName": "Pandas",
        "id": 0
      },
      {
        "name": "Eagles",
        "src": "assets/img/eagles",
        "typeFood": "meet-fish",
        "geo": "Native to South America",
        "tooltipGeo": "Texas, USA",
        "tooltipName": "Eagles",
        "id": 1
      },
      {
        "name": "Gorillas",
        "src": "assets/img/gorillas",
        "typeFood": "banana-bamboo",
        "geo": "Native to Congo",
        "tooltipGeo": "Brazzaville, Congo",
        "tooltipName": "Gorillas",
        "id": 2
      },
      {
        "name": "Two-toed Sloth",
        "src": "assets/img/two-toed-sloth",
        "typeFood": "banana-bamboo",
        "geo": "Mesoamerica, South America",
        "tooltipGeo": "Mesoamerica, RSA",
        "tooltipName": "Sloth",
        "id": 3
      },
      {
        "name": "Cheetahs",
        "src": "assets/img/cheetahs",
        "typeFood": "meet-fish",
        "geo": "Native to Africa",
        "tooltipGeo": "Mesoamerica, RSA",
        "tooltipName": "Cheetahs",
        "id": 4
      },
      {
        "name": "Penguins",
        "src": "assets/img/penguins",
        "typeFood": "meet-fish",
        "geo": "Native to Antarctica",
        "tooltipGeo": "Antarctica",
        "tooltipName": "Penguins",
        "id": 5
      },
    ];
    function shuffleArray(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
      }
      return arr;
    }

    function swiperMode() {
      if (desktop.matches) {
          const testimonialsSwiper = new Swiper('.testimonials-swiper', {

            direction: 'horizontal',
    
            scrollbar: {
                el: '.testimonials-swiper-scrollbar',
                draggable: true,
            },
            breakpoints: {
                320: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                  scrollbar: false
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                  scrollbar: false
                },
                1000: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  scrollbar: {
                    el: '.testimonials-swiper-scrollbar',
                    draggable: true,
                    dragSize: 75,
                  }
                },
                1600: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    scrollbar: {
                      dragSize: 115,
                    }
                }
              },
          });
      } else if (mobile.matches) {
        return false
      }
    }

    class PetsCard {
      constructor(name, src, geo, typeFood, tooltipGeo, tooltipName, id, parentSelector) {
        this.name = name;
        this.src = src;
        this.geo = geo;
        this.typeFood = typeFood;
        this.tooltipGeo = tooltipGeo;
        this.tooltipName = tooltipName;
        this.id = id;
        this.parent = document.querySelector(parentSelector);
      }
  
      render() {
        const element = document.createElement('li');
        element.classList.add('pets-cards__item', 'pets-cards__item--active');
        element.innerHTML = `
          <article class="pets-card" data-index="${this.id}">
            <picture class="pets-card__img-wrap">
              <source
                      srcset="${this.src}@1x.webp 1x,
                      ${this.src}@2x.webp 2x" 
                      type="image/webp">
              <img 
                src="${this.src}@1x.jpg" 
                srcset="${this.src}@2x.jpg 2x" 
                alt="" 
                class="pets-card__img">
            </picture>
            <div class="pets-card__bottom">
              <div class="pets-card__text-wrap">
                <h3 class="pets-card__title">${this.name}</h3>
                <span class="pets-card__geo">${this.geo}</span>
              </div>
              <svg class="pets-card__meal">
                <use href="assets/icons/sprite.svg#${this.typeFood}"></use>
              </svg>
            </div>
            <div class="pets-card__tooltip">
              <span class="pets-card__tooltip-name">${this.tooltipName}</span>
              <span class="pets-card__tooltip-geo">${this.tooltipGeo}</span>
            </div>
          </article>
          `;
        this.parent.append(element);
      }
    }

    window.addEventListener('load', function() {
      swiperMode();
      shuffleArray(pets).forEach(({
        name,
        src,
        typeFood,
        geo,
        tooltipGeo,
        tooltipName,
        id
      }) => {
        new PetsCard(name, src, geo, typeFood, tooltipGeo, tooltipName, id, '.pets-cards').render();
      });
    
    });
    window.addEventListener('resize', function() {
      swiperMode();
    });

    const testimonialsText = document.querySelectorAll('.testimonials-card__text');

    if (mobile.matches) {
      testimonialsText.forEach(item => item.classList.add('clamp-text-2'));
    } else {
      testimonialsText.forEach(item => item.classList.remove('clamp-text-2'));
    }

    const petsBtnPrev = document.querySelector('.pets-slider__btn--prev');
    const petsBtnNext = document.querySelector('.pets-slider__btn--next');

    petsBtnPrev.addEventListener('click', (e) => {

      if (document.querySelectorAll('.pets-cards').length > 1) {
        return;
      }

      const petsList = document.createElement('ul');
      document.querySelector('.pets-cards').classList.add('pets-cards--to-right-prev')
      petsList.classList.add('pets-cards', 'pets-cards--to-left-prev', 'pets-cards--move');
      document.querySelector('.pets-cards-overflow').prepend(petsList);
      shuffleArray(pets).forEach(({
        name,
        src,
        typeFood,
        geo,
        tooltipGeo,
        tooltipName,
        id
      }) => {
        new PetsCard(name, src, geo, typeFood, tooltipGeo, tooltipName, id, '.pets-cards--to-left-prev').render();
      });

      document.querySelectorAll('.pets-cards')[1].addEventListener('animationend', (e) => {
        if(!e.currentTarget.classList.contains('pets-cards--move')) {
          e.currentTarget.remove();
        }
  
        document.querySelector('.pets-cards--move').className = 'pets-cards';
      });
    });

    petsBtnNext.addEventListener('click', (e) => {

      if (document.querySelectorAll('.pets-cards').length > 1) {
        return;
      }

      const petsList = document.createElement('ul');
      document.querySelector('.pets-cards').classList.add('pets-cards--to-left-next')
      petsList.classList.add('pets-cards', 'pets-cards--to-right-next', 'pets-cards--move');
      document.querySelector('.pets-cards-overflow').append(petsList);

      shuffleArray(pets).forEach(({
        name,
        src,
        typeFood,
        geo,
        tooltipGeo,
        tooltipName,
        id
      }) => {
        new PetsCard(name, src, geo, typeFood, tooltipGeo, tooltipName, id, '.pets-cards--to-right-next').render();
      });

      document.querySelector('.pets-cards').addEventListener('animationend', (e) => {
        if(!e.currentTarget.classList.contains('pets-cards--move')) {
          e.currentTarget.remove();
        }
  
        document.querySelector('.pets-cards--move').className = 'pets-cards';
      });
    });

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


  class popupTestimonials {
    constructor(html) {
      this.html = html
    }

    render() {
      const element = document.createElement('div');
      element.classList.add('popup');
      element.innerHTML = `
      <div class="popup__overlay"></div>
      <div class="popup__container">
        <div class="testimonials-card">${this.html}</div>
        <button class="popup__btn" aria-label="Close">
        </button>
      </div>
      `
      document.querySelector('body').append(element);
    }
  }


  const openModal = (popupOverlay, popupContainer) => {
    popupOverlay.classList.add("popup__overlay--visible")
    popupContainer.classList.add("popup__container--visible");
    document.querySelector('body').classList.add("lock");
  }


  const closeModal = (btnSelector, popupOverlay, popupContainer, popup) => {
    return btnSelector.addEventListener('click', () => {
      popupOverlay.classList.remove("popup__overlay--visible");
      popupContainer.classList.remove("popup__container--visible");
      document.querySelector('body').classList.remove("lock");

      popup.remove();
    });
  };

  const testimonialCards = document.querySelectorAll('.swiper-slide--testimonials');

  testimonialCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      if (mobile.matches) {
        const html = e.currentTarget.innerHTML;
        new popupTestimonials(html).render();

        let popupOverlay = document.querySelector('.popup__overlay');
        let popupContainer = document.querySelector('.popup__container');
        let popupBtn = document.querySelector('.popup__btn');
        let popup = document.querySelector('.popup');

        openModal(popupOverlay, popupContainer);

        closeModal(popupBtn, popupOverlay, popupContainer, popup);
        closeModal(popupOverlay, popupOverlay, popupContainer, popup);
      }
    })
  });


}, false);