
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
                size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
        });

        document.getElementById('wishBtn').addEventListener('click', function() {
            const flame = document.querySelector('.flame');
            flame.style.animation = 'none';
            setTimeout(() => flame.style.display = 'none', 50);
            
            const particles = document.getElementById('particles-js');
            particles.style.background = 'radial-gradient(circle, rgba(255,105,180,1) 0%, rgba(74,14,46,1) 100%)';
            particles.style.transition = 'background 2s ease';

            this.textContent = 'Wish Granted!';
            this.style.backgroundColor = 'var(--secondary-color)';
        });
    


        document.getElementById('closeBtn').addEventListener('click', function() {
            window.location.href = './index.html';
        });
        
        