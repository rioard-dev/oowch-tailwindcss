// Konfigurasi Pagination
let currentPage = 1;
const totalPages = 15;
const maxVisible = 2;
const articlesPerPage = 4; // Jumlah artikel per halaman

const paginationContainer = document.getElementById('pagination');
const currentPageDisplay = document.getElementById('current-page-display');
const articleGrid = document.getElementById('article-grid');

// Data contoh artikel (bisa diganti dengan data dari API/database)
const allArticles = [{
    title: "Tips Belajar Tailwind CSS dengan Cepat",
    category: "Web Development",
    date: "2 April 2026",
    readTime: "8 menit",
    image: "https://picsum.photos/id/1015/600/400",
    excerpt: "Pelajari cara mempercepat workflow desain web kamu menggunakan Tailwind CSS."
},
    {
        title: "Membangun Pagination yang Elegan dengan Tailwind",
        category: "Frontend",
        date: "1 April 2026",
        readTime: "12 menit",
        image: "https://picsum.photos/id/201/600/400",
        excerpt: "Tutorial lengkap membuat pagination modern dan responsif."
    },
    {
        title: "Tren Desain Web 2026 yang Harus Kamu Ketahui",
        category: "Design",
        date: "31 Maret 2026",
        readTime: "10 menit",
        image: "https://picsum.photos/id/237/600/400",
        excerpt: "Apa saja tren terbaru di dunia desain web tahun ini?"
    },
    {
        title: "Optimasi Performa Website untuk Mobile",
        category: "Performance",
        date: "30 Maret 2026",
        readTime: "7 menit",
        image: "https://picsum.photos/id/870/600/400",
        excerpt: "Cara meningkatkan kecepatan website di perangkat mobile."
    },
    {
        title: "Mengapa Next.js Masih Jadi Pilihan Utama di 2026",
        category: "Framework",
        date: "29 Maret 2026",
        readTime: "15 menit",
        image: "https://picsum.photos/id/1018/600/400",
        excerpt: "Analisis mendalam mengenai keunggulan Next.js."
    },
    {
        title: "Cara Membuat Dark Mode dengan Tailwind CSS",
        category: "UI/UX",
        date: "28 Maret 2026",
        readTime: "6 menit",
        image: "https://picsum.photos/id/133/600/400",
        excerpt: "Implementasi dark mode yang simpel dan elegan."
    },
    {
        title: "Tips Belajar Tailwind CSS dengan Cepat",
        category: "Web Development",
        date: "2 April 2026",
        readTime: "8 menit",
        image: "https://picsum.photos/id/1015/600/400",
        excerpt: "Pelajari cara mempercepat workflow desain web kamu menggunakan Tailwind CSS."
    },
    {
        title: "Membangun Pagination yang Elegan dengan Tailwind",
        category: "Frontend",
        date: "1 April 2026",
        readTime: "12 menit",
        image: "https://picsum.photos/id/201/600/400",
        excerpt: "Tutorial lengkap membuat pagination modern dan responsif."
    },
    {
        title: "Tren Desain Web 2026 yang Harus Kamu Ketahui",
        category: "Design",
        date: "31 Maret 2026",
        readTime: "10 menit",
        image: "https://picsum.photos/id/237/600/400",
        excerpt: "Apa saja tren terbaru di dunia desain web tahun ini?"
    },
    {
        title: "Optimasi Performa Website untuk Mobile",
        category: "Performance",
        date: "30 Maret 2026",
        readTime: "7 menit",
        image: "https://picsum.photos/id/870/600/400",
        excerpt: "Cara meningkatkan kecepatan website di perangkat mobile."
    },
    {
        title: "Mengapa Next.js Masih Jadi Pilihan Utama di 2026",
        category: "Framework",
        date: "29 Maret 2026",
        readTime: "15 menit",
        image: "https://picsum.photos/id/1018/600/400",
        excerpt: "Analisis mendalam mengenai keunggulan Next.js."
    },
    {
        title: "Cara Membuat Dark Mode dengan Tailwind CSS",
        category: "UI/UX",
        date: "28 Maret 2026",
        readTime: "6 menit",
        image: "https://picsum.photos/id/133/600/400",
        excerpt: "Implementasi dark mode yang simpel dan elegan."
    },
    {
        title: "Tips Belajar Tailwind CSS dengan Cepat",
        category: "Web Development",
        date: "2 April 2026",
        readTime: "8 menit",
        image: "https://picsum.photos/id/1015/600/400",
        excerpt: "Pelajari cara mempercepat workflow desain web kamu menggunakan Tailwind CSS."
    },
    {
        title: "Membangun Pagination yang Elegan dengan Tailwind",
        category: "Frontend",
        date: "1 April 2026",
        readTime: "12 menit",
        image: "https://picsum.photos/id/201/600/400",
        excerpt: "Tutorial lengkap membuat pagination modern dan responsif."
    },
    {
        title: "Tren Desain Web 2026 yang Harus Kamu Ketahui",
        category: "Design",
        date: "31 Maret 2026",
        readTime: "10 menit",
        image: "https://picsum.photos/id/237/600/400",
        excerpt: "Apa saja tren terbaru di dunia desain web tahun ini?"
    },
    {
        title: "Optimasi Performa Website untuk Mobile",
        category: "Performance",
        date: "30 Maret 2026",
        readTime: "7 menit",
        image: "https://picsum.photos/id/870/600/400",
        excerpt: "Cara meningkatkan kecepatan website di perangkat mobile."
    },
    {
        title: "Mengapa Next.js Masih Jadi Pilihan Utama di 2026",
        category: "Framework",
        date: "29 Maret 2026",
        readTime: "15 menit",
        image: "https://picsum.photos/id/1018/600/400",
        excerpt: "Analisis mendalam mengenai keunggulan Next.js."
    },
    {
        title: "Cara Membuat Dark Mode dengan Tailwind CSS",
        category: "UI/UX",
        date: "28 Maret 2026",
        readTime: "6 menit",
        image: "https://picsum.photos/id/133/600/400",
        excerpt: "Implementasi dark mode yang simpel dan elegan."
    }
    // Tambahkan lebih banyak artikel jika diperlukan (total minimal 90 agar cukup untuk 15 halaman)
];

// Fungsi untuk membuat card artikel
function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = "bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group";
    card.innerHTML = `
    <div class="relative">
    <img src="${article.image}" alt="${article.title}"
    class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300">
    <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-2xl text-xs font-medium text-gray-700">
    ${article.category}
    </div>
    </div>
    <div class="p-6">
    <div class="flex items-center gap-3 text-gray-500 text-sm mb-4">
    <span>${article.date}</span>
    <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
    <span>${article.readTime}</span>
    </div>
    <h3 class="font-semibold text-xl leading-tight text-gray-800 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
    ${article.title}
    </h3>
    <p class="text-gray-600 text-[15px] line-clamp-3 mb-6">
    ${article.excerpt}
    </p>
    <button onclick="alert('Membuka artikel: ${article.title}')"
    class="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors">
    Baca Selengkapnya
    <i class="fas fa-arrow-right text-xs"></i>
    </button>
    </div>
    `;
    return card;
}

// Fungsi untuk menampilkan artikel sesuai halaman
function renderArticles() {
    articleGrid.innerHTML = '';

    const start = (currentPage - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    const currentArticles = allArticles.slice(start, end);

    if (currentArticles.length === 0) {
        articleGrid.innerHTML = `<p class="col-span-3 text-center text-gray-500 py-12">Tidak ada artikel di halaman ini.</p>`;
        return;
    }

    currentArticles.forEach(article => {
        const card = createArticleCard(article);
        articleGrid.appendChild(card);
    });
}

// Fungsi pagination (tetap sama seperti sebelumnya)
function renderPagination() {
    paginationContainer.innerHTML = '';

    // Previous Button
    const prevBtn = document.createElement('button');
    prevBtn.className = `flex items-center gap-1 pr-2 py-3 rounded-xl font-medium transition-all duration-200
    ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed': 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'}`;
    prevBtn.innerHTML = `
    <i class="fas fa-chevron-left"></i>
    <span class="hidden sm:inline">Previous</span>
    `;
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
        if (currentPage > 1) changePage(currentPage - 1);
    };
    paginationContainer.appendChild(prevBtn);

    // Page Numbers
    let startPage = Math.max(2, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage + 1 < maxVisible) {
        startPage = Math.max(1, endPage - maxVisible + 1);
    }

    if (startPage > 1) {
        addPageButton(1);
        if (totalPages < endPage + 2) {
            addEllipsis();
            if (endPage + 1 > totalPages) {
                addPageButton(endPage - 2);
            }
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        addPageButton(i);
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            addEllipsis();
        }
        addPageButton(totalPages);
    }

    // Next Button
    const nextBtn = document.createElement('button');
    nextBtn.className = `flex items-center gap-1 pl-2 py-3 rounded-xl font-medium transition-all duration-200
    ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed': 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'}`;
    nextBtn.innerHTML = `
    <span class="hidden sm:inline">Next</span>
    <i class="fas fa-chevron-right"></i>
    `;
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
        if (currentPage < totalPages) changePage(currentPage + 1);
    };
    paginationContainer.appendChild(nextBtn);
}

function addPageButton(page) {
    const btn = document.createElement('button');
    btn.className = `w-10 h-10 flex items-center justify-center rounded-xl font-semibold transition-all duration-200
    ${page === currentPage ? 'bg-indigo-600 text-white shadow-md scale-105': 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'}`;
    btn.textContent = page;
    btn.onclick = () => changePage(page);
    paginationContainer.appendChild(btn);
}

function addEllipsis() {
    const ellipsis = document.createElement('span');
    ellipsis.className = "w-10 h-10 flex items-center justify-center text-gray-400 font-medium";
    ellipsis.textContent = "...";
    paginationContainer.appendChild(ellipsis);
}

function changePage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    currentPageDisplay.textContent = currentPage;

    renderArticles();
    renderPagination();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Inisialisasi
renderArticles();
renderPagination();