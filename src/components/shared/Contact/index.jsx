export default function Contact() {
    return(
        <>
            <div id="Contact" className="container my-5">
  <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 className="display-5 fw-bold lh-1 text-body-emphasis">
        Contact Me 📬
      </h1>
      <p className="lead">
      Apakah Anda memiliki masukan atau saran untuk pengembangan website saya? ,Silahkan kirim pesan ke saya  
      </p>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-semibold">Nama</label>
          <input type="text" className="form-control" id="name" placeholder="Masukkan namamu" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Masukkan email aktif" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label fw-semibold">Pesan</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Tulis pesanmu di sini..."></textarea>
        </div>
        <button type="submit" className="btn btn-primary px-4 fw-bold">Kirim</button>
      </form>
    </div>
    <div className="col-lg-4 offset-lg-1">
      <div className="border border-success rounded-4 shadow-lg bg-light" style={{ padding: '10px' }}>
        <img
          className="rounded-3"
          src="https://i.pinimg.com/474x/fe/ac/02/feac02a10c521b276e70c1a24e683837.jpg"
          alt="Contact Illustration"
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  </div>
</div>
        </>
    )
}