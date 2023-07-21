import './Footer2.css'
const Footer2 = () => {
    return(
        <div className='footer-container'>
  <footer id="footer">
    <div className="footer-top">
      <div className="footer-container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
              <h3>
                Helping Hands<span>.</span>
              </h3>
              <p>
              Airport Road, Sukkur IBA University, <br />
              Sindh, Pakistan
                <br />
                <br />
                <strong>Phone:</strong> +92 304 3458660
                <br />
                <strong>Email:</strong> info.helpinghands@gmail.com
                <br />
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter" />
                </a>
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook" />
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram" />
                </a>
                <a href="#" className="google-plus">
                  <i className="bx bxl-skype" />
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#hero">Home</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#about">About us</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#services">Services</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#team">Teams</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#contact">Contact US</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#online-donation-platform">Online Donation platform</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#ngo-verification">NGO Verification</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#donor-feedback">Donor Feedback</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#social-media-integration">Social Media Integration</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#user-management">User Management</a>
              </li>
            </ul>
          </div>
          {/* <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" defaultValue="Subscribe" />
            </form>
          </div> */}
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        © Copyright{" "}
        <strong>
          <span>Helping Hands</span>
        </strong>
        . All Rights Reserved
      </div>
    </div>
  </footer>
        </div>
    )
}
export default Footer2