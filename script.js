// SCRIPT SEDERHANA UNTUK WEBSITE

// 1. Auto Active Navbar
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Smoothi:p Siap!');
    
    // Cari link yang aktif berdasarkan URL
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
        
        // Untuk halaman index (beranda)
        if (currentPage === '' && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });
    
    // 2. Animasi tombol
    const buttons = document.querySelectorAll('.btn-primary, .btn-outline-primary');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            console.log('Tombol diklik:', this.textContent);
        });
    });
    
    // 3. Hover effect untuk card
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // 4. Update Instagram link
    const igLinks = document.querySelectorAll('a[href*="instagram"]');
    igLinks.forEach(link => {
        link.href = 'https://www.instagram.com/smoothie.p_25?igsh=MWM0d2ZucHU4a3B3cQ==';
        link.target = '_blank';
    });
});

// 5. Fungsi untuk form pemesanan
function pesanSmoothie() {
    const nama = document.getElementById('nama').value;
    const produk = document.getElementById('produk').value;
    const jumlah = document.getElementById('jumlah').value;
    
    if (!nama || !produk || !jumlah) {
        alert('Harap isi semua data!');
        return false;
    }
    
    alert(`Terima kasih ${nama}!\nPesanan: ${produk} x${jumlah}\nAkan diproses segera.`);
    return false;
}

// 6. Fungsi untuk testimoni
const testimonials = [
    { nama: "Sari", kota: "Panjang", pesan: "Rasanya enak dan segar!" },
    { nama: "Rina", kota: "Batang", pesan: "Cocok untuk diet, sudah langganan." },
    { nama: "Dewi", kota: "Kajen", pesan: "Anak-anak suka, manisnya pas." }
];

function tampilkanTestimoni() {
    const container = document.getElementById('testimoni-container');
    if (!container) return;
    
    let html = '';
    testimonials.forEach(t => {
        html += `
            <div class="col-md-4">
                <div class="testimonial-card">
                    <h5>${t.nama}</h5>
                    <small class="text-muted">${t.kota}</small>
                    <p class="mt-3">"${t.pesan}"</p>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Jalankan saat halaman dimuat
if (document.getElementById('testimoni-container')) {
    tampilkanTestimoni();
}