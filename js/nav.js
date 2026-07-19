// ── TOP NAV BEHAVIOR ────────────────────────────────────────────────────────
(function () {
  const nav = document.getElementById("site-nav");
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!nav) return;

  // Shrink + shadow on scroll
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile menu toggle
  if (toggle && links) {
    const closeMenu = () => {
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      links.classList.remove("open");
    };
    toggle.addEventListener("click", () => {
      const isOpen = toggle.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      links.classList.toggle("open", isOpen);
    });
    // Close menu after tapping a link
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
  }
})();
