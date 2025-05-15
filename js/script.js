// Inisialisasi Swiper pada Slider Gambar
const swiper = new Swiper(".banner-swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Form Validation untuk Contact Us
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const destination = document.getElementById("destination");
  const messageBox = document.getElementById("formMessage");

  let isValid = true;
  let message = "";

  if (name.value.trim() === "") {
    isValid = false;
    message += "Nama tidak boleh kosong.<br>";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    isValid = false;
    message += "Format email tidak valid.<br>";
  }

  if (destination.value === "") {
    isValid = false;
    message += "Silakan pilih destinasi.<br>";
  }

  if (!isValid) {
    messageBox.innerHTML = message;
  } else {
    messageBox.style.color = "green";
    messageBox.innerHTML = "Form berhasil dikirim!";
    // Reset form (optional)
    this.reset();
  }
});

