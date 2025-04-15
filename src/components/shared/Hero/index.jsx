export default function Hero() {
    return(
        <>
                <div id="Home" className="container my-5">
  <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
        Sun Go Kong:
      </h1>
      <p className="lead">
        Perjalanan kera sakti mencari kitab suci di bantu oleh pintu doraemon dan melintasi konoha , membantu naruto menjadi hokage
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Beli?</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Minjem</button>
      </div>
    </div>
    <div className="col-lg-4 offset-lg-1">
  <div className="border border-primary rounded-4 shadow-lg bg-white" style={{ padding: '10px' }}>
    <img
      className="rounded-3"
      src="https://picsum.photos/980/700"
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
      <img src="https://picsum.photos/600/400" className="img-fluid rounded" alt="Tentang Bookstore" />
    </div>
    <div className="col-md-6">
      <h2 className="fw-bold">Tentang iam_store</h2>
      <p className="lead">
        Kami menyediakan berbagai macam buku dari fiksi, non-fiksi, hingga buku edukasi untuk semua kalangan. Dengan harga terjangkau dan kualitas terjamin.
      </p>
      <p>
        Bookstore kami juga menawarkan layanan peminjaman dan rekomendasi buku pilihan setiap minggunya. Ayo mulai membaca!
      </p>
    </div>
  </div>

  <div className="row text-center">
    <h3 className="mb-4 fw-bold">Kategori Buku</h3>
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src="https://picsum.photos/seed/fiksi/300/200" className="card-img-top" alt="Fiksi" />
        <div className="card-body">
          <h5 className="card-title">Fiksi</h5>
          <p className="card-text">Novel, cerita rakyat, hingga dongeng penuh imajinasi.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src="https://picsum.photos/seed/edukasi/300/200" className="card-img-top" alt="Edukasi" />
        <div className="card-body">
          <h5 className="card-title">Edukasi</h5>
          <p className="card-text">Buku pelajaran, pengetahuan umum, dan referensi akademik.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src="https://picsum.photos/seed/nonfiksi/300/200" className="card-img-top" alt="Non-Fiksi" />
        <div className="card-body">
          <h5 className="card-title">Non-Fiksi</h5>
          <p className="card-text">Biografi, sejarah, dan buku motivasi yang inspiratif.</p>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}