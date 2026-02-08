// select all reveal elements
const reveals = document.querySelectorAll(".reveal");

// create observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15
  }
);

// observe each element
reveals.forEach((el) => observer.observe(el));
