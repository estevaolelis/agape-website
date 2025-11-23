// NAVIGATION
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => page.classList.remove("active"));

  // Show selected page
  document.getElementById(pageId).classList.add("active");

  // Close mobile menu if open
  document.getElementById("navLinks").classList.remove("active");

  // Scroll to top
  window.scrollTo(0, 0);
}

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// FORM SUBMISSION
function handleSubmit(event) {
  event.preventDefault();

  // Get form data
  const formData = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    assunto: document.getElementById("assunto").value,
    mensagem: document.getElementById("mensagem").value,
  };

  // TODO: Integrar com backend ou serviço de e-mail
  console.log("Formulário enviado:", formData);

  alert(
    "Obrigado pela sua mensagem! Entraremos em contato em breve. 😊\n\n(TODO: Integrar envio real de e-mail)"
  );

  // Reset form
  event.target.reset();
}

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const nav = document.querySelector("nav");
  const navLinks = document.getElementById("navLinks");
  const menuToggle = document.querySelector(".menu-toggle");

  if (!nav.contains(event.target) && navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  }
});

// Smooth scroll for better UX
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
    }
  });
});
