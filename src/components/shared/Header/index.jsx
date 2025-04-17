export default function Header() {
    return (
        <>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="/" className="d-inline-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <i className="fa-solid fa-book fa-2xl" style={{color:"#74C0FC"}}>
          </i>
          <span className="ms-2 fs-4">Mr-Store</span>
          </a>
          
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#Home" className="nav-link px-2 ">Home</a></li>
            <li><a href="#Product" className="nav-link px-2 link-blue">Product</a></li>
            <li><a href="#Team" className="nav-link px-2 link-blue">Team</a></li>
            <li><a href="#Contact" className="nav-link px-2 link-blue">Contact</a></li>
            
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>
        </>
    )
}