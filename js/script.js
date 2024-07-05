// preloader assets

$('.preloader').delay(100).fadeOut('slow');

$(document).ready(function() {
    var $loadingText = $('.preloader__inner__text');
    $({ counter: 0 }).animate({ counter: 100 }, {
        duration: 100,
        easing: 'linear',
        step: function() {
            $loadingText.text(Math.floor(this.counter));
        },
        complete: function() {
            $loadingText.text(this.counter);
        }
    });
});

// preloader assets end


// nav links

$(document).ready(function() {
    $("a.menu__inner__item__item, .header__inner__wrapper__link, a.intro__wrapper__text__btn").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 0,
            easing: "easeInOutCubic"
        });
        return false;
    });
});

// nav links end

// paralax intro + services


// paralax intro + services end

// header logo


document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector('.intro__wrapper__text__title');
    const text = title.textContent;
    title.innerHTML = '';

    setTimeout(() => {
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            title.appendChild(span);

            setTimeout(() => {
                span.classList.add('visible');
            }, index * 25 + 25);
        });
    }, 1000);
});

// intro title end

// fade in animation

$(document).ready(function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                $(entry.target).removeClass('active');

                setTimeout(() => {
                    $(entry.target).addClass('active');
                }, 10); 
                
            } else {
                $(entry.target).removeClass('active');
            }
        });
    }, { threshold: 0.1 });

    $('.fade-in').each(function() {
        observer.observe(this);
    });

});

