/* =========================
   PROJECT FILTER
========================= */

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(item => {
            item.classList.remove("active");
        });

        filter.classList.add("active");

        const category = filter.dataset.filter;

        projects.forEach(project => {

            if (
                category === "all" ||
                project.dataset.category === category
            ) {

                project.style.display = "block";

                setTimeout(() => {
                    project.style.opacity = "1";
                    project.style.transform = "translateY(0)";
                }, 50);

            } else {

                project.style.opacity = "0";
                project.style.transform = "translateY(20px)";

                setTimeout(() => {
                    project.style.display = "none";
                }, 250);

            }

        });

    });

});


/* =========================
   CURSOR
========================= */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {

    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".project-card, .process-item, .about-content"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition =
        "opacity .8s ease, transform .8s ease";

    observer.observe(element);

});