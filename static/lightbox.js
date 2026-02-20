document.addEventListener("DOMContentLoaded", () => {
  const links = Array.from(
    document.querySelectorAll(".dbl-gallery a, a[data-dbl-lightbox]")
  );
  if (!links.length) return;

  let currentIndex = 0;

  const overlay = document.createElement("div");
  overlay.id = "dbl-lightbox";
  overlay.innerHTML = `
    <button class="dbl-close" aria-label="Close">&times;</button>
    <button class="dbl-prev" aria-label="Previous">&#8249;</button>
    <img alt="Portfolio image">
    <button class="dbl-next" aria-label="Next">&#8250;</button>
  `;
  document.body.appendChild(overlay);

  const img = overlay.querySelector("img");
  const closeBtn = overlay.querySelector(".dbl-close");
  const prevBtn = overlay.querySelector(".dbl-prev");
  const nextBtn = overlay.querySelector(".dbl-next");

  const open = (index) => {
    currentIndex = (index + links.length) % links.length;
    const src =
      links[currentIndex].getAttribute("data-dbl-src") ||
      links[currentIndex].getAttribute("href");
    if (!src) return;
    img.src = src;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(() => {
      img.src = "";
    }, 120);
  };

  const next = () => open(currentIndex + 1);
  const prev = () => open(currentIndex - 1);

  links.forEach((link, idx) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      open(idx);
    });
  });

  closeBtn.addEventListener("click", close);
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });

  document.addEventListener("keydown", (event) => {
    if (!overlay.classList.contains("open")) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowRight") next();
    if (event.key === "ArrowLeft") prev();
  });
});
