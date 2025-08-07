document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
      
        this.classList.add('active');
    });
});


const typingText = document.querySelector('.typing-text');
const professions = ["Web Developer", "UI/UX Designer", "Programmer","Booster","Resolver"];
let i = 0;
let j = 0;
let currentProfession = '';
let isDeleting = false;
let isEnd = false;

function type() {
    isEnd = false;
    currentProfession = professions[i];
    
    if (isDeleting) {
        typingText.textContent = currentProfession.substring(0, j--);
        if (j == 0) {
            isDeleting = false;
            i++;
            if (i == professions.length) {
                i = 0;
            }
        }
    } else {
        typingText.textContent = currentProfession.substring(0, j++);
        if (j == currentProfession.length) {
            isEnd = true;
            isDeleting = true;
        }
    }

    const speed = isDeleting ? 100 : isEnd ? 2000 : 150;
    setTimeout(type, speed);
}


setTimeout(type, 2000);


window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) { // Adjust offset as needed
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// JavaScript for animating skill circles on scroll
const skillCircles = document.querySelectorAll('.skill-circle');
const skillsSection = document.getElementById('skills');

const animateSkillCircles = () => {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) { // When section is 75% in view
        skillCircles.forEach(circle => {
            const percent = circle.dataset.percent;
            const progressCircle = circle.querySelector('.progress-circle');
            const radius = progressCircle.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (percent / 100) * circumference;

            progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
            progressCircle.style.strokeDashoffset = circumference; // Start fully hidden

            // Animate the stroke-dashoffset
            setTimeout(() => {
                progressCircle.style.transition = 'stroke-dashoffset 1.5s ease-out';
                progressCircle.style.strokeDashoffset = offset;
            }, 100); // Small delay to ensure initial state is set
        });
        window.removeEventListener('scroll', animateSkillCircles); // Run animation once
    }
};

window.addEventListener('scroll', animateSkillCircles);
animateSkillCircles();

 
 const closeBtn = document.querySelector('.closeBtn');
const dialog = document.getElementById('aboutme');
const about = document.getElementById('aboutmeButton');
about.addEventListener('click', function () {
    dialog.style.display = 'block';
});




closeBtn.addEventListener('click', () => {
    dialog.style.display = 'none';
  });