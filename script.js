function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => page.classList.remove("active"));

  document.getElementById(pageId).classList.add("active");

  document.getElementById("navLinks").classList.remove("active");

  window.scrollTo(0, 0);
}

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    assunto: document.getElementById("assunto").value,
    mensagem: document.getElementById("mensagem").value,
  };

  console.log("Formulário enviado:", formData);

  alert(
    "Obrigado pela sua mensagem! Entraremos em contato em breve. 😊\n\n(TODO: Integrar envio real de e-mail)"
  );

  event.target.reset();
}

document.addEventListener("click", function (event) {
  const nav = document.querySelector("nav");
  const navLinks = document.getElementById("navLinks");
  const menuToggle = document.querySelector(".menu-toggle");

  if (!nav.contains(event.target) && navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".carousel-slide");
  let currentSlide = 0;
  const slideInterval = 5000;

  if (slides.length > 0) {
    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      
      currentSlide = (currentSlide + 1) % slides.length;
      
      slides[currentSlide].classList.add("active");
    }, slideInterval);
  }
});
