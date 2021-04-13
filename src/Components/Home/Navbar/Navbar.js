import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar d-flex navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link mx-3 text-dark" aria-current="page" href="/#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3 text-dark" href="/#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3 text-dark" href="/#">Dental Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3 text-light" href="/#">Reviews</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3 text-light" href="/#">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3 text-light" href="/#">Contact us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;