const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");
const toast = document.querySelector("#toast");
const photo = document.querySelector("#photoCard");

menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// Small click feedback for interactive buttons.
document.querySelectorAll(".btn, .explore-card, .text-link").forEach(el => {
  el.addEventListener("click", () => {
    toast.textContent = "Opening our little world ✦";
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1200);
  });
});

// Gentle pointer interaction on the main photo for desktop.
if (window.matchMedia("(pointer:fine)").matches && photo) {
  photo.addEventListener("pointermove", e => {
    const r = photo.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    photo.style.animation = "none";
    photo.style.transform =
      `perspective(900px) rotateX(${y * -5}deg) rotateY(${x * 7}deg) translateY(-5px)`;
  });

  photo.addEventListener("pointerleave", () => {
    photo.style.animation = "";
    photo.style.transform = "";
  });
}
