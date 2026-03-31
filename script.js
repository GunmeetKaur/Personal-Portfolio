/* ================= SCROLL ANIMATION (ADVANCED) ================= */

const elements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
  elements.forEach((el, index) => {
    const position = el.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
      setTimeout(() => {
        el.classList.add("show");
      }, index * 200);   // 🔥 stagger effect
    }
  });
});


/* ================= TYPING ANIMATION (FINAL) ================= */

const textArray = [
  "Gunmeet Kaur 👋",
  "Developer 💻",
  "AWS Enthusiast ☁️",
  "Problem Solver 🚀"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = textArray[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typing").innerHTML = currentText.substring(0, j);

  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1200);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % textArray.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

type();


/* ================= EXTRA: 3D CARD HOVER (CRAZY EFFECT 🔥) ================= */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  });
});