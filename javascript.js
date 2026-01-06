// Smooth Scroll untuk Navigasi
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
    // Tambah kelas active pada menu yang dipilih
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

// Tampilkan tombol "Kembali ke Atas" saat scroll
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Kontrol Video Player
const videoPlayer = document.getElementById('mainVideo');
const playVideoBtn = document.getElementById('playVideo');
const pauseVideoBtn = document.getElementById('pauseVideo');

playVideoBtn.addEventListener('click', () => videoPlayer.play());
pauseVideoBtn.addEventListener('click', () => videoPlayer.pause());

// Kontrol Audio Player
const audioPlayer = document.getElementById('mainAudio');
const playAudioBtn = document.getElementById('playAudio');
const pauseAudioBtn = document.getElementById('pauseAudio');

playAudioBtn.addEventListener('click', () => audioPlayer.play());
pauseAudioBtn.addEventListener('click', () => audioPlayer.pause());

// Galeri Gambar (Tampilkan Gambar Besar saat diklik)
const galleryImgs = document.querySelectorAll('.gallery-img');
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');

galleryImgs.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});
// Validasi Form Kontak
const contactForm = document.getElementById('contactForm');
const successMsg = document.getElementById('successMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Ambil nilai input
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  
  // Validasi input
  let isValid = true;
  if (!fullName) {
    alert('Nama lengkap tidak boleh kosong!');
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Masukkan alamat email yang valid!');
    isValid = false;
  } else if (!subject) {
    alert('Subjek pesan tidak boleh kosong!');
    isValid = false;
  } else if (!message) {
    alert('Pesan tidak boleh kosong!');
    isValid = false;
  }
  
  // Tampilkan pesan sukses jika valid
  if (isValid) {
    contactForm.reset();
    successMsg.style.display = 'block';
    // Sembunyikan pesan setelah 5 detik
    setTimeout(() => successMsg.style.display = 'none', 5000);
  }
});