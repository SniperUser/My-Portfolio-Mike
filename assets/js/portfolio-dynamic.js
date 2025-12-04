document.addEventListener("DOMContentLoaded", () => {
  const portfolioContainer = document.getElementById("portfolio-container");
  if (!portfolioContainer) return;

  const categories = [
    {
      filter: "filter-creative",
      categoryName: "Inventory System",
      title: "Visual Identity System",
      tags: ["React", "Node.js"],
      year: 2025,
      images: Array.from(
        { length: 15 },
        (_, i) => `assets/img/portfolio/Inventory/Screenshot (${631 + i}).png`
      ),
    },
    {
      filter: "filter-digital",
      categoryName: "Hotel Booking Management",
      title: "Interactive Web Platform",
      tags: ["React", "Node.js"],
      year: 2023,
      images: Array.from(
        { length: 4 },
        (_, i) => `assets/img/portfolio/Hotel/Screenshot (${714 + i}).png`
      ),
    },
    {
      filter: "filter-strategy",
      categoryName: "Car Rental Management",
      title: "Interactive Web Platform",
      tags: ["React", "Node.js"],
      year: 2024,
      images: Array.from(
        { length: 6 },
        (_, i) => `assets/img/portfolio/car-rental/Screenshot (${708 + i}).png`
      ),
    },
    {
      filter: "filter-development",
      categoryName: "Point of Sale",
      title: "Custom Application",
      tags: ["React", "Node.js"],
      year: 2025,
      images: Array.from(
        { length: 10 },
        (_, i) => `assets/img/portfolio/POS/Screenshot (${666 + i}).png`
      ),
    },
  ];

  // Generate portfolio items
  categories.forEach((cat, catIndex) => {
    cat.images.forEach((imgSrc) => {
      const col = document.createElement("div");
      col.className = `col-lg-4 col-md-6 portfolio-item isotope-item ${cat.filter}`;
      col.innerHTML = `
        <div class="portfolio-card">
          <div class="portfolio-image-container">
            <img src="${imgSrc}" alt="${
        cat.categoryName
      }" class="img-fluid" loading="lazy" />
            <div class="portfolio-overlay">
              <div class="portfolio-info">
                <span class="project-category">${cat.categoryName}</span>
                <h4>${cat.title}</h4>
              </div>
              <div class="portfolio-actions">
                <a href="${imgSrc}" class="glightbox" data-gallery="gallery-${catIndex}">
                  <i class="bi bi-plus-lg"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="portfolio-meta">
            <div class="project-tags">
              ${cat.tags
                .map((tag) => `<span class="tag">${tag}</span>`)
                .join("")}
            </div>
            <div class="project-year">${cat.year}</div>
          </div>
        </div>
      `;
      portfolioContainer.appendChild(col);
    });
  });

  // Initialize Isotope after all items are appended
  const iso = new Isotope(portfolioContainer, {
    itemSelector: ".isotope-item",
    layoutMode: "masonry",
    filter: "*",
  });

  // Filter buttons
  const filterButtons = document.querySelectorAll(".portfolio-filters li");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from previous
      document
        .querySelector(".portfolio-filters .filter-active")
        ?.classList.remove("filter-active");
      btn.classList.add("filter-active");

      const filterValue = btn.getAttribute("data-filter");
      iso.arrange({ filter: filterValue });
    });
  });

  // Initialize GLightbox after items
  const glightbox = GLightbox({
    selector: ".glightbox",
    loop: true,
    touchNavigation: true,
  });
});
