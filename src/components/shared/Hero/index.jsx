export default function Hero() {
    return(
        <>
                <div id="Home" className="container my-5">
  <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
        Platinum Member Card :
      </h1>
      <p className="lead">
      Platinum Card memberikan keuntungan eksklusif seperti diskon khusus, poin reward lebih besar, akses prioritas layanan, undangan event VIP, dan promo spesial saat ulang tahun.
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Beli </button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Lewati </button>
      </div>
    </div>
    <div className="col-lg-4 offset-lg-1">
  <div className="border border-primary rounded-4 shadow-lg bg-white" style={{ padding: '10px' }}>
    <img
      className="rounded-3"
      src="https://i.pinimg.com/474x/1b/cd/37/1bcd37831cacbdf80154a2329cecfe3a.jpg"
      alt="Bootstrap Docs"
      style={{ display: 'block', width: '100%', height: 'auto' }}
    />
  </div>
</div>

  </div>
</div>

<div id="Home" className="container py-5">
  <div className="row align-items-center mb-5">
    <div className="col-md-6">
      <img src="https://i.pinimg.com/474x/ce/39/3a/ce393a3cace432748c4106cc8a27d96b.jpg" className="img-fluid rounded" alt="Tentang Bookstore" />
    </div>
    <div className="col-md-6">
      <h2 className="fw-bold">📚 Tentang Mr-Store</h2>
      <p className="lead">
      Selamat datang di Mr-Store, surganya para pecinta buku! Kami hadir dengan koleksi lengkap mulai dari fiksi yang memikat, non-fiksi yang menggugah, hingga buku edukasi untuk semua usia. Semua bisa kamu temukan di sini—dengan harga bersahabat dan kualitas yang nggak main-main.
      Nggak cuma jualan buku, kami juga punya layanan peminjaman dan rekomendasi mingguan yang dikurasi khusus buat kamu yang haus bacaan keren dan berkualitas.
      </p>
      <p>
      ✨ Ingin lebih banyak keuntungan?
      Gabung jadi member dengan Mr-Store Member Card! Dapatkan diskon spesial, akses eksklusif ke buku pilihan, poin reward, dan berbagai promo menarik setiap bulannya.
      Ayo mulai petualangan membacamu bersama Mr-Store—karena cerita terbaik selalu menunggu untuk ditemukan.
      </p>
    </div>
  </div>

  <div className="row text-center">
    <h3 className="mb-4 fw-bold">Kategori Buku</h3>
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src="https://i.pinimg.com/474x/ba/af/44/baaf445663cbc3c42924cb08f49085f4.jpg" className="card-img-top" alt="Fiksi" />
        <div className="card-body">
          <h5 className="card-title">Fiksi</h5>
          <p className="card-text">Fiksi adalah cerita yang dibuat dari imajinasi penulis, bukan berdasarkan kenyataan. Cerita fiksi bisa tentang apa saja, seperti petualangan, cinta, atau 
                                   dunia yang penuh dengan sihir. Contoh genre fiksi termasuk fantasi, misteri, romantis, dan horor. Intinya, fiksi adalah cerita yang tidak terjadi di dunia nyata, 
                                   tapi bisa membawa kita ke tempat yang seru dan menarik! </p>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src="https://i.pinimg.com/474x/e9/ef/e8/e9efe81d0b624be7fbc578a78837e71d.jpg" className="card-img-top" alt="Edukasi" />
        <div className="card-body">
          <h5 className="card-title">Edukasi</h5>
          <p className="card-text">buku edukasi adalah buku yang dirancang untuk mengajarkan hal-hal baru, baik itu tentang sains, matematika, sejarah, atau keterampilan lainnya.
                                    Intinya, edukasi membantu seseorang untuk berkembang dan belajar sesuatu yang baru, baik untuk keperluan pribadi atau profesional.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src="https://i.pinimg.com/474x/84/2a/06/842a06c6a19ffc806f04da54bbb7c567.jpg" className="card-img-top" alt="Non-Fiksi" />
        <div className="card-body">
          <h5 className="card-title">Non-Fiksi</h5>
          <p className="card-text">Non-fiksi adalah jenis tulisan yang berbasis pada kenyataan atau fakta yang ada di dunia nyata. Cerita atau informasi dalam buku non-fiksi menggambarkan hal-hal yang benar-benar terjadi atau dapat dibuktikan secara objektif, seperti biografi, panduan, buku ilmiah, atau laporan berita.</p>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}