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
          src="https://picsum.photos/200?random=1"
          alt="Team Member"
          className="rounded-circle mx-auto d-block mb-3 shadow-sm"
          width="160"
          height="160"
        />
        <h2 className="fw-bold">Team 1</h2>
        <p>Ahli strategi dan penyusun rencana luar biasa. Kalau ada yang ribet, dia yang uraiin!</p>
        <p><a className="btn btn-outline-primary fw-semibold" href="#">View details &raquo;</a></p>
      </div>

      {/* Kolom 2 */}
      <div className="col-lg-4 mb-4">
        <img
          src="https://picsum.photos/200?random=2"
          alt="Team Member"
          className="rounded-circle mx-auto d-block mb-3 shadow-sm"
          width="160"
          height="160"
        />
        <h2 className="fw-bold">Team 2</h2>
        <p>Master implementasi. Coding siang malam dan ngopi tanpa batas. Sang legenda debugging!</p>
        <p><a className="btn btn-outline-primary fw-semibold" href="#">View details &raquo;</a></p>
      </div>

 {/* Kolom 3 */}
 <div className="col-lg-4 mb-4">
        <img
          src="https://picsum.photos/200?random=9"
          alt="Team Member"
          className="rounded-circle mx-auto d-block mb-3 shadow-sm"
          width="160"
          height="160"
        />
        <h2 className="fw-bold">Team 3</h2>
        <p>Master implementasi. Coding siang malam dan ngopi tanpa batas. Sang legenda debugging!</p>
        <p><a className="btn btn-outline-primary fw-semibold" href="#">View details &raquo;</a></p>
      </div>

    </div>
  </div>
</div>
        </>
    )
}