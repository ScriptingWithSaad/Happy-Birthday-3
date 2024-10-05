
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.innerText = ['🎈', '🎉', '🎊'][Math.floor(Math.random() * 3)];
    balloon.style.left = Math.random() * window.innerWidth + 'px';
    balloon.style.top = window.innerHeight + 'px';
    balloon.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(balloon);

    const animation = balloon.animate([
        { transform: `translateY(0px)` },
        { transform: `translateY(${-window.innerHeight - 100}px)` }
    ], {
        duration: Math.random() * 3000 + 5000,
        easing: 'linear',
        fill: 'forwards'
    });

    animation.onfinish = () => balloon.remove();
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = -10 + 'px';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(confetti);

    let fall = confetti.animate([
        { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
        { transform: `translateY(${window.innerHeight}px) rotate(${360 + Math.random() * 360}deg)`, opacity: 0 }
    ], {
        duration: Math.random() * 2000 + 3000,
        easing: 'cubic-bezier(0.37, 0, 0.63, 1)'
    });

    fall.onfinish = () => confetti.remove();
}

function adjustBalloonCreation() {
    let balloonInterval;
    if (window.innerWidth < 481) {
        balloonInterval = 300; // Mobile
    } else if (window.innerWidth < 1025) {
        balloonInterval = 250; // Tablet
    } else {
        balloonInterval = 200; // Larger devices
    }
    clearInterval(balloonCreationInterval);
    balloonCreationInterval = setInterval(createBalloon, balloonInterval);
}

let balloonCreationInterval = setInterval(createBalloon, 200);
setInterval(createConfetti, 100);


const messages = [
    "Wishing you a day filled with happiness and a year filled with joy!",
    "May all your dreams come true!",
    "Another adventure-filled year awaits you!",
    "Here's to another year of success and happiness!"
];

document.getElementById('gift').addEventListener('click', () => {
    const messageElement = document.getElementById('message');
    messageElement.textContent = messages[Math.floor(Math.random() * messages.length)];
    messageElement.style.opacity = 1;
    setTimeout(() => {
        messageElement.style.opacity = 0;
    }, 3000);
});

document.getElementById('photo').addEventListener('click', () => {
    Swal.fire({
        title: 'Birthday Memories',
        text: 'Swipe through the photos to relive the moments!',
        showConfirmButton: false,
        showCloseButton: true,
        html: `
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="./DSC00360.jpg" alt="Memory 1"></div>
                    <div class="swiper-slide"><img src="./DSC00366.jpg" alt="Memory 2"></div>
                    <div class="swiper-slide"><img src="./DSC00368.jpg" alt="Memory 3"></div>
                    <div class="swiper-slide"><img src="./DSC08383.jpg" style="object-position: top;" alt="Memory 4"></div>

                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        `,
        customClass: {
            container: 'photo-popup'
        },
        didOpen: () => {
            new Swiper('.photo-popup .swiper', {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    });
});

window.addEventListener('resize', adjustBalloonCreation);
adjustBalloonCreation();




