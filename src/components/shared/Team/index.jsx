export default function Team() {
    return(
        <>
            <div id="Team" className="container-lg my-5">
  <div className="p-4 pb-0 pe-lg-0 pt-lg-5 rounded-3 border shadow-lg bg-light">
    <div className="row text-center">
    <h1 className="display-5 fw-bold lh-1 text-body-emphasis mb-5">
  Team
</h1>
      {/* Kolom 1 */}
      <div className="col-lg-4 mb-4">
        <img
          src="https://i.pinimg.com/736x/6a/44/f0/6a44f0e35b10e6ed063eeebf7ed844f9.jpg"
          alt="Team Member"
          className="rounded-circle mx-auto d-block mb-3 shadow-sm"
          width="160"
          height="160"
        />
        <h2 className="fw-bold">Product Manager</h2>
        <p>Mengelola pengembangan produk (website atau aplikasi) dan pengalaman pengguna,Menentukan fitur baru dan peningkatan berdasarkan umpan balik pengguna,
        Bekerja dengan tim teknis untuk memastikan produk berjalan lancar.
        </p>
        <p><a className="btn btn-outline-primary fw-semibold" href="#">View details &raquo;</a></p>
      </div>

      {/* Kolom 2 */}
      <div className="col-lg-4 mb-4">
        <img
          src="https://i.pinimg.com/474x/59/4a/b0/594ab0742f06f1daa1f085f39cbb29ce.jpg"
          alt="Team Member"
          className="rounded-circle mx-auto d-block mb-3 shadow-sm"
          width="160"
          height="160"
        />
        <h2 className="fw-bold">Content Manager</h2>
        <p>Menyusun dan mengelola konten buku yang ada di website (deskripsi buku, kategori, ulasan),Bekerja dengan penulis, penerbit, atau pemasok buku untuk memastikan konten selalu diperbarui,
        Memastikan konten mudah ditemukan dan menarik bagi pengunjung.
        </p>
        <p><a className="btn btn-outline-primary fw-semibold" href="#">View details &raquo;</a></p>
      </div>

 {/* Kolom 3 */}
 <div className="col-lg-4 mb-4">
        <img
          src="https://i.pinimg.com/474x/a9/43/c8/a943c8b6be75afc8375e8bf67ac8930c.jpg"
          alt="Team Member"
          className="rounded-circle mx-auto d-block mb-3 shadow-sm"
          width="160"
          height="160"
        />
        <h2 className="fw-bold">Web Developer</h2>
        <p>Mengembangkan dan memelihara website atau aplikasi e-commerce tempat buku dijual,Menjaga agar website selalu berjalan dengan baik, cepat, dan aman,
        Memastikan integrasi sistem pembayaran dan fitur lainnya berjalan lancar.
        </p>
        <p><a className="btn btn-outline-primary fw-semibold" href="#">View details &raquo;</a></p>
      </div>

    </div>
  </div>
</div>
        </>
    )
}