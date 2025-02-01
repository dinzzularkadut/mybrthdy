// Daftar gambar dari direktori GitHub
const images = [
    'https://raw.githubusercontent.com/dinzzularkadut/mybrthdy/main/images/image1.jpg',
    'https://raw.githubusercontent.com/dinzzularkadut/mybrthdy/main/images/image2.jpg',
    'https://raw.githubusercontent.com/dinzzularkadut/mybrthdy/main/images/image3.jpg'
  ];
  
  // Fungsi untuk membuat halaman
  function createBookPages() {
    const book = document.querySelector('.book');
  
    images.forEach((image, index) => {
      // Halaman kiri
      const pageLeft = document.createElement('div');
      pageLeft.classList.add('page', 'page-left');
      pageLeft.style.backgroundImage = url('${image}');
  
      // Halaman kanan
      const pageRight = document.createElement('div');
      pageRight.classList.add('page', 'page-right');
      pageRight.style.backgroundImage = url('${image}');
  
      // Tambahkan halaman ke buku
      book.appendChild(pageLeft);
      book.appendChild(pageRight);
    });
  }
  
  // Panggil fungsi saat halaman dimuat
  document.addEventListener('DOMContentLoaded', createBookPages);