/* =========================
   DVIJET SCRIPT (FINAL)
   ========================= */

/* MOBILE NAV */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* SCROLL REVEAL */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(
    ".service-card, .why-card, .process-step, .stat-box"
).forEach(el => observer.observe(el));

/* BUTTON FEEDBACK */
document.querySelectorAll(".btn-primary, .btn-secondary").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.97)";
        setTimeout(() => btn.style.transform = "scale(1)", 120);
    });
});