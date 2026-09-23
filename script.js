// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Scroll reveal animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});