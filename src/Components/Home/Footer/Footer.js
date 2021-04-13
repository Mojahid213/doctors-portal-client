import React from "react";
import "./Footer.css";
import "../../../../node_modules/bootstrap-icons/font/bootstrap-icons.css"


const Footer = () => {
  return (
    <div className="mt-5">
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="/#">Teeth Removing</a>
                  </li>
                  <li>
                    <a href="/#">Check up</a>
                  </li>
                  <li>
                    <a href="/#">Emergency Dental Care</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="/#">Company</a>
                  </li>
                  <li>
                    <a href="/#">Team</a>
                  </li>
                  <li>
                    <a href="/#">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Company Name</h3>
                <p>
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                  Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                  quis tristique lectus. Aliquam in arcu eget velit pulvinar
                  dictum vel in justo.
                </p>
              </div>
              <div className="col item social">
                <a href="/#">
                <i class="bi bi-facebook"></i>
                </a>
                <a href="/#">
                <i class="bi bi-instagram"></i>
                </a>
                <a href="/#">
                <i class="bi bi-twitter"></i>
                </a>
              </div>
            </div>
            <p className="copyright">Dentist Web © {(new Date().getFullYear())}</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
