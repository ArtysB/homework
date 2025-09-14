

//Бургер
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const mobileNav = document.querySelector('.mobile-nav');
  const navLinks = document.querySelectorAll('.mobile-nav__list a');

  
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      mobileNav.classList.remove('active');
    });
  });
});


// slider
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      init: function () {
        const pagination = document.querySelector('.swiper-pagination-custom');
        pagination.innerHTML = '';
        const realSlides = this.slides.length;
        for (let i = 0; i < realSlides; i++) {
          const line = document.createElement('div');
          line.classList.add('pagination-line');
          if (i === this.activeIndex) line.classList.add('active');
          pagination.appendChild(line);
        }
      },
      slideChange: function () {
        const lines = document.querySelectorAll('.pagination-line');
        lines.forEach((line, index) => {
          line.classList.toggle('active', index === this.activeIndex);
        });
      },
    },
  });
});



// input

const tags = document.querySelectorAll(".tag");
const input = document.querySelector(".search__input");

tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    const tagText = tag.textContent.trim();
    const current = input.value.trim();

    // Проверка: если тег уже есть — не добавляем
    if (!current.includes(tagText)) {
      input.value = current ? current + ", " + tagText : tagText;
    }

    input.focus();
  });
});
