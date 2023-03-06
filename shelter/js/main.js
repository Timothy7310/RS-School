document.addEventListener('DOMContentLoaded', function () {

  const pets = [{
      "name": "Jennifer",
      "src": "assets/img/pets/jennifer",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"],
      "id": 0
    },
    {
      "name": "Sophia",
      "src": "assets/img/pets/sophia",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"],
      "id": 1
    },
    {
      "name": "Woody",
      "src": "assets/img/pets/woody",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"],
      "id": 2
    },
    {
      "name": "Scarlett",
      "src": "assets/img/pets/scarlett",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"],
      "id": 3
    },
    {
      "name": "Katrine",
      "src": "assets/img/pets/katrine",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"],
      "id": 4
    },
    {
      "name": "Timmy",
      "src": "assets/img/pets/timmy",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"],
      "id": 5
    },
    {
      "name": "Freddie",
      "src": "assets/img/pets/freddie",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"],
      "id": 6
    },
    {
      "name": "Charly",
      "src": "assets/img/pets/charly",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"],
      "id": 7
    }
  ]


  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
  }

  const randomPets = shuffleArray(pets)



  // BURGER MENU
  const links = document.querySelectorAll('.header__nav-link');

  const openMenu = () => {
    document.querySelector('body').classList.add('lock');
    document.querySelector('.body-overlay').classList.add('body-overlay--visible');
    document.querySelector('.header__burger').classList.add('active');
    document.querySelector('.header__burger').classList.remove('not-active');
    document.querySelector('.header__nav').classList.add('active');
    links.forEach(link => link.classList.add('header__nav-link--burger'));
    document.querySelector('.header__burger').setAttribute('aria-label', 'Close menu');
  }

  const closeMenu = () => {
    document.querySelector('.header__burger').classList.remove('header__burger--active');
    document.querySelector('body').classList.remove('lock');
    document.querySelector('.body-overlay').classList.remove('body-overlay--visible');
    document.querySelector('.header__burger').classList.remove('active');
    document.querySelector('.header__burger').classList.add('not-active');
    document.querySelector('.header__nav').classList.remove('active');
    links.forEach(link => link.classList.remove('header__nav-link--burger'));
    document.querySelector('.header__burger').setAttribute('aria-label', 'Open menu');
  }

  document.querySelector('#burger').addEventListener('click', () => {
    if (document.querySelector('.not-active')) {
      openMenu();
    } else if (document.querySelector('.active')) {
      closeMenu();
    }
  });

  links.forEach(link => link.addEventListener('click', () => {
    if (document.querySelector('.header__nav-link--burger')) {
      closeMenu();
    }
  }))

  document.querySelector('.body-overlay').addEventListener('click', closeMenu);





  class PetsCard {
    constructor(src, type, name, id, parentSelector, cardSelector) {
      this.src = src;
      this.type = type;
      this.name = name;
      this.id = id;
      this.parent = document.querySelector(parentSelector);
      this.cardClass = cardSelector;
    }

    render() {
      const element = document.createElement('li');
      element.classList.add(...this.cardClass);
      element.innerHTML = `
        <article class="card" data-index="${this.id}">
          <picture class="card__img-container">
              <source 
                srcset="${this.src}@1x.webp 1x,
                        ${this.src}@2x.webp 2x" 
                type="image/webp"
              >
              <img src="${this.src}@1x.jpg"
                  srcset="${this.src}@2x.jpg 2x" 
                  alt="${this.type}"
                  class="card__img"
                  data-index="${this.id}"
              >
          </picture>
          <h3 class="card__name" data-index="${this.id}">
              ${this.name}
          </h3>
          <button href="#" class="btn btn--other" data-index="${this.id}">Learn more</button>
        </article>
        `;
      this.parent.append(element);
    }
  }

  class popupCard {
    constructor(name, type, breed, description, age, inoculations, diseases, parasites, src) {
      this.name = name;
      this.type = type;
      this.breed = breed;
      this.description = description;
      this.age = age;
      this.inoculations = inoculations;
      this.diseases = diseases;
      this.parasites = parasites;
      this.src = src;
    }

    render() {
      const element = document.createElement('div');
      element.classList.add('popup');
      element.innerHTML = `
      <div class="popup__overlay"></div>
      <div class="popup__container">
          <picture class="popup__img-container">
              <source 
                  srcset="${this.src}@1x.webp 1x,
                          ${this.src}@2x.webp 2x" 
                          type="image/webp">
              <img src="${this.src}@1x.jpg" 
                  srcset="${this.src}@2x.jpg 2x"
                  alt="${this.type}" 
                  class="popup__img"
              >
          </picture>
          <div class="popup__text-container">
              <h3 class="popup__text-name">${this.name}</h3>
              <span class="popup__text-type">${this.type} - ${this.breed}</span>
              <p class="popup__text-info">
                  ${this.description}
              </p>
              <ul class="popup__list">
                  <li class="popup__item">
                      <span class="popup__item-info">Age: </span>
                      <span class="popup__item-data">${this.age}</span>
                  </li>
                  <li class="popup__item">
                      <span class="popup__item-info">Inoculations: </span>
                      <span class="popup__item-data">${this.inoculations}</span>
                  </li>
                  <li class="popup__item">
                      <span class="popup__item-info">Diseases: </span>
                      <span class="popup__item-data">${this.diseases}</span>
                  </li>
                  <li class="popup__item">
                      <span class="popup__item-info">Parasites: </span>
                      <span class="popup__item-data">${this.parasites}</span>
                  </li>
              </ul>
          </div>
          <button class="popup__btn" aria-label="Close">
              <svg class="popup__btn-img">
                  <use xlink:href="assets/icons/sprite.svg#close"></use>
              </svg>
          </button>
      </div>
      `
      document.querySelector('body').append(element);
    }
  }






  let focusedElementBeforeModal;
  const openModal = (popupOverlay, popupContainer) => {
    popupOverlay.classList.add("popup__overlay--visible")
    popupContainer.classList.add("popup__container--visible");
    document.querySelector('body').classList.add("lock");
    // Сохранение фокуса
    focusedElementBeforeModal = document.activeElement;




    // Находим все элементы для фокуса 
    let focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    let focusableElements = popupContainer.querySelectorAll(focusableElementsString);

    focusableElements = Array.prototype.slice.call(focusableElements);

    let firstTabStop = focusableElements[0];
    let lastTabStop = focusableElements[focusableElements.length - 1];
    firstTabStop.focus();

    function trapTabKey(e) {
      // Check for TAB key press
      if (e.keyCode === 9) {

        // SHIFT + TAB
        if (e.shiftKey) {
          if (document.activeElement === firstTabStop) {
            e.preventDefault();
            lastTabStop.focus();
          }

          // TAB
        } else {
          if (document.activeElement === lastTabStop) {
            e.preventDefault();
            firstTabStop.focus();
          }
        }
      }
    }

    popupContainer.addEventListener('keydown', trapTabKey);

  }


  const closeModal = (btnSelector, popupOverlay, popupContainer, popup) => {
    return btnSelector.addEventListener('click', () => {
      popupOverlay.classList.remove("popup__overlay--visible");
      popupContainer.classList.remove("popup__container--visible");
      document.querySelector('body').classList.remove("lock");

      popup.remove();
      focusedElementBeforeModal.focus();
    });
  };



  



  randomPets.forEach(({
    src,
    type,
    name,
    id
  }) => {
    new PetsCard(src, type, name, id, '.swiper-wrapper', ['swiper-slide']).render();
  });









  const swiper = new Swiper('.swiper--main', {
    direction: 'horizontal',
    loop: true,

    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    navigation: {
      nextEl: '.our-friends__btn--next',
      prevEl: '.our-friends__btn--prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
        slidesPerGroup: 2
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 90,
        slidesPerGroup: 3
      }
    }


  });


  const swiperMain = document.querySelector('.swiper--main');


  swiperMain.addEventListener('click', (e) => {
    const id = e.target.getAttribute('data-index');

    randomPets.forEach(item => {
      if(item.id == id){
        new popupCard(item.name, item.type, item.breed, item.description, item.age, item.inoculations, item.diseases, item.parasites, item.src).render();
      }
    })

    let popupOverlay = document.querySelector('.popup__overlay');
    let popupContainer = document.querySelector('.popup__container');
    let popupBtn = document.querySelector('.popup__btn');
    let popup = document.querySelector('.popup');

    openModal(popupOverlay, popupContainer);


    closeModal(popupBtn, popupOverlay, popupContainer, popup);
    closeModal(popupOverlay, popupOverlay, popupContainer, popup);
  })


  console.log(randomPets);


}, false);