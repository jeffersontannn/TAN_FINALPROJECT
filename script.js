document.addEventListener("DOMContentLoaded", function() {
    // Initialize Swiper instances
    var swiperTSA6 = new Swiper('#swiper-tsa6', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '#next-tsa6',
            prevEl: '#prev-tsa6',
        },
        pagination: {
            el: '.swiper-pagination-tsa6',
            clickable: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar-tsa6',
        },
    });

    var swiperTSA7 = new Swiper('#swiper-tsa7', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '#next-tsa7',
            prevEl: '#prev-tsa7',
        },
        pagination: {
            el: '.swiper-pagination-tsa7',
            clickable: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar-tsa7',
        },
    });

    var swiperTSA8 = new Swiper('#swiper-tsa8', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '#next-tsa8',
            prevEl: '#prev-tsa8',
        },
        pagination: {
            el: '.swiper-pagination-tsa8',
            clickable: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar-tsa8',
        },
    });

    // Functions to handle next and previous navigation
    function nextSlide(swiper) {
        swiper.slideNext();
    }

    function prevSlide(swiper) {
        swiper.slidePrev();
    }

    // Event listeners for next and previous buttons
    document.getElementById('next-tsa6').addEventListener('click', function() {
        nextSlide(swiperTSA6);
    });

    document.getElementById('prev-tsa6').addEventListener('click', function() {
        prevSlide(swiperTSA6);
    });

    document.getElementById('next-tsa7').addEventListener('click', function() {
        nextSlide(swiperTSA7);
    });

    document.getElementById('prev-tsa7').addEventListener('click', function() {
        prevSlide(swiperTSA7);
    });

    document.getElementById('next-tsa8').addEventListener('click', function() {
        nextSlide(swiperTSA8);
    });

    document.getElementById('prev-tsa8').addEventListener('click', function() {
        prevSlide(swiperTSA8);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const typedTextSpan = document.querySelector(".typed-text");
    const textArray = ["Project 6", "Project 7", "Project 8"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; 
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }


    setTimeout(type, newTextDelay + 250);


    const filterButtons = document.querySelectorAll('.portfolio-categories .btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            portfolioItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    document.getElementById("year").textContent = new Date().getFullYear();
});
