const filters = document.querySelectorAll(".filters button");
const projects = document.querySelectorAll(".project");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(button => {
            button.classList.remove("active");
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
                }, 300);

            }

        });

    });

});



/* ==========================
   REVEAL ON SCROLL
========================== */

const elements = document.querySelectorAll(
    ".project, .process-card, .about-content, .contact-box"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: .15
    }

);


elements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});