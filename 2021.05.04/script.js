window.addEventListener("load", e => {
    const container = document.createElement("div");
    container.className = "container";
    document.body.appendChild(container);

    images.forEach(img => {
        const el = document.createElement("div");
        el.className = "card";
        el.setAttribute("data-src", img);
        el.style.backgroundImage = `url(${img})`;
        container.appendChild(el);
    });

    //////////////////////////////////////////////////

    const lbx = document.querySelector(".lightbox");
    const cross = lbx.querySelector(".cross");
    const next = lbx.querySelector(".arrow.right");
    const prev = lbx.querySelector(".arrow.left");
    const cards = document.querySelectorAll(".card");

    const showLightbox = (e) => {
        document.body.classList.add("light");
        lbx.firstElementChild.style.backgroundImage = `url(${e.target.getAttribute("data-src")})`;
    }
    const hideLightbox = () => {
        document.body.classList.remove("light");
    }


    cards.forEach(card => {
        card.addEventListener("click", showLightbox);
    });
    cross.addEventListener("click", hideLightbox);
    document.body.addEventListener("keydown", (e) => {
        // console.log(e.key);
        if (e.key === "Escape") {
            hideLightbox();
        }
    })

});