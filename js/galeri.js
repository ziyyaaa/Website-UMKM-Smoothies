const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    const img = card.querySelector("img");
    const text = card.querySelector("p");

    // ES6 #3: Template literal
    const productName = `${img.alt}`;

    // Saat gambar diklik → tampilkan nama produk
    img.addEventListener("click", () => {
        text.textContent = productName;
    });

    // Efek hover dengan classList
    img.addEventListener("mouseover", () => {
        // ES6 #4: classList add
        card.classList.add("hover-aktif");
    });

    img.addEventListener("mouseout", () => {
        // ES6 #5: classList remove
        card.classList.remove("hover-aktif");
    });
});