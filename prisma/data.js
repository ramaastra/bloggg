const users = [
  {
    id: 1,
    username: 'johndoe_',
    password: 'a',
    name: 'John Doe'
  },
  {
    id: 2,
    username: 'janesmith_',
    password: 'a',
    name: 'Jane Smith'
  },
  {
    id: 3,
    username: 'davidjohnson_',
    password: 'a',
    name: 'David Johnson'
  }
]

const categories = [
  {
    id: 1,
    name: 'Programming',
    labelColor: '#0d6efd',
    icon: 'bi-code',
  },
  {
    id: 2,
    name: 'Kesehatan',
    labelColor: '#dc3545',
    icon: 'bi-patch-plus',
  },
  {
    id: 3,
    name: 'Fotografi',
    labelColor: '#fd7e14',
    icon: 'bi-camera',
  },
  {
    id: 4,
    name: 'Lingkungan',
    labelColor: '#198754',
    icon: 'bi-tree',
  }
]

const blogs = [
  {
    title: 'Pengenalan JavaScript',
    body: 'JavaScript adalah bahasa pemrograman serbaguna yang dapat digunakan untuk pengembangan front-end dan back-end. Biasanya digunakan untuk menambahkan interaktivitas pada website dan aplikasi web. JavaScript adalah bahasa pemrograman dinamis dan berorientasi objek yang mendukung pemrograman berbasis peristiwa (event-driven) serta menawarkan berbagai fungsi bawaan.\n\nJavaScript juga memiliki ekosistem yang kuat dan banyak pustaka atau kerangka kerja populer seperti React, Angular, dan Vue yang memudahkan dalam membangun aplikasi web yang kompleks.\n\nDengan beharga jutaan pengembang di seluruh dunia, JavaScript terus berkembang dan menjadi bahasa yang sangat penting dalam dunia pemrograman.',
    image: 'javascript.webp',
    categoryId: 1,
    authorId: 1
  },
  {
    title: 'Manfaat Meditasi',
    body: 'Meditasi adalah praktik yang melibatkan fokus pikiran dan mencapai keadaan tenang dan relaksasi. Meditasi memiliki banyak manfaat bagi kesehatan fisik dan mental. Meditasi secara teratur dapat mengurangi stres, meningkatkan konsentrasi, meningkatkan kesejahteraan emosional, dan meningkatkan kejernihan pikiran secara keseluruhan.\n\nSelain manfaat kesehatan, meditasi juga membantu dalam meningkatkan kreativitas, kebahagiaan, dan pemahaman diri. Dengan meditasi, kita dapat mengembangkan kualitas hidup yang lebih baik dan menjalani kehidupan dengan lebih sadar dan damai.',
    image: 'meditasi.png',
    categoryId: 2,
    authorId: 2
  },
  {
    title: 'Pentingnya Daur Ulang',
    body: 'Daur ulang memainkan peran penting dalam melestarikan lingkungan kita dan menjaga sumber daya alam. Dengan mendaur ulang material seperti kertas, plastik, kaca, dan logam, kita dapat mengurangi jumlah limbah yang berakhir di tempat pembuangan sampah dan meminimalkan kebutuhan akan ekstraksi bahan baku.\n\nDaur ulang juga membantu mengurangi polusi, menghemat energi, dan melawan perubahan iklim. Melibatkan diri dalam kegiatan daur ulang adalah kontribusi yang penting bagi kita semua untuk menjaga keberlanjutan planet ini.',
    image: 'daur-ulang.jpeg',
    categoryId: 4,
    authorId: 3
  },
  {
    title: 'Panduan Pemula Fotografi',
    body: 'Fotografi adalah seni yang memungkinkan kita untuk menangkap dan memperindah momen-momen dalam waktu. Baik Anda menggunakan ponsel pintar atau kamera profesional, memahami dasar-dasar fotografi dapat sangat meningkatkan keterampilan Anda.\n\nKonsep-konsep kunci yang harus dipahami meliputi komposisi, pencahayaan, eksposur, dan teknik pengolahan foto. Dengan latihan dan eksperimen, Anda dapat mengembangkan gaya unik Anda sendiri dan menciptakan gambar-gambar yang memikat yang menceritakan kisah.\n\nMenjadi seorang fotografer memungkinkan kita melihat dunia dari perspektif yang berbeda dan menangkap keindahan yang ada di sekitar kita.',
    image: 'fotografi.jpg',
    categoryId: 3,
    authorId: 2
  },
  {
    title: 'Perjalanan Saya dengan Pemrograman Python',
    body: 'Dalam tulisan blog ini, saya ingin berbagi perjalanan dan pengalaman pribadi saya dengan pemrograman Python. Ketika pertama kali mempelajari Python, saya terkesan dengan kesederhanaan dan keberagaman fungsionalitasnya. Sintaksis yang bersih dan mudah dibaca membuat saya lebih mudah memahami dasar-dasar pemrograman.\n\nSemakin dalam saya mempelajari Python, saya menemukan ekosistem yang luas dengan berbagai pustaka dan kerangka kerja yang membuka kemungkinan yang tak terbatas. Mulai dari pengembangan web hingga analisis data dan pembelajaran mesin, Python menjadi bahasa utama saya untuk berbagai proyek.\n\nYang paling saya sukai dari Python adalah komunitasnya. Saya bergabung dengan forum online dan menghadiri pertemuan lokal, di mana saya bertemu dengan sesama penggemar Python yang selalu siap membantu dan berbagi pengetahuan mereka. Sifat kolaboratif komunitas Python sangat berharga dalam perjalanan belajar saya.\n\nMelalui Python, saya telah membangun banyak proyek pribadi, menaklukkan tantangan pemrograman, dan bahkan berkontribusi pada proyek open-source. Ini benar-benar menjadi passion saya, dan saya sangat antusias untuk terus menjelajahi lebih dalam dalam pemrograman Python.',
    image: 'python.png',
    categoryId: 1,
    authorId: 1
  }
]

module.exports = { users, categories, blogs }
