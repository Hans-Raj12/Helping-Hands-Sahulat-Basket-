import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer2 from '../components/Footer2'
const Home2 = () => {
    return (
            <>
    <Header/>
  {/* ======= Hero Section ======= */}
  <section
    id="hero"
    className="d-flex align-items-center justify-content-center"
  >
    <div className="container" data-aos="fade-up">
      <div
        className="row justify-content-center"
        data-aos="fade-up"
        data-aos-delay={150}
      >
        <div className="col-xl-6 col-lg-8">
          <h1>
            Need Your Big
          </h1>
          <h1>For Change</h1>
          <h1>The World<span>.</span></h1>
        </div>
      </div>
      <div
        className="row gy-4 mt-5 justify-content-center"
        data-aos="zoom-in"
        data-aos-delay={250}
      >
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-store-line" />
            <h3>
              <Link to='/login'>NGO</Link>
              {/* <a href="">NGO</a> */}
            </h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-bar-chart-box-line" />
            <h3>
              <Link to='/login'>Donor</Link>
              {/* <a href="">Donor</a> */}
            </h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-calendar-todo-line" />
            <h3>
              <Link to='/login'>Needy</Link>
              {/* <a href="">Needy</a> */}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Hero */}


  <main id="main">

    {/* ======= About Section ======= */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="fade-left"
            data-aos-delay={100}
          >
            <img src="assets/img/about.jpg" className="img-fluid" alt="" />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
            data-aos="fade-right"
            data-aos-delay={100}
          >
            <h3>
              Helping Hands (Sahulat Basket)
            </h3>
            <p className="fst-italic">
              Helping Hands (Sahulat Basket) is a platform where authenticated NGOs will be registered
              and donation from the donors will directly go to NGOs which will then manage the records of the donations.
              Moreover, one thing that makes our platfrom unique is that donors can also directly donate to needy people
              in their surrounding, this way we can help many needy people on time.
              There are three types of donation, which a donor can donate and these are, 
            </p>
            <ul>
              <li>
                <i className="ri-check-double-line" /> Food
              </li>
              <li>
                <i className="ri-check-double-line" /> Clothes
              </li>
              <li>
                <i className="ri-check-double-line" /> Money
              </li>
            </ul>
            <p>
              We hope to make lives better by adding our part in this beautifull cause. And I also,
              request to you, if you can are able to help someone, then be the first to donate.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* End About Section */}

    {/* ======= Clients Section ======= */}
    {/* <section id="clients" className="clients">
      <div className="container" data-aos="zoom-in">
        <div className="clients-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide">
              <img
                src="assets/img/clients/client-1.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/client-2.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/client-3.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/client-4.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/client-5.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/client-6.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/client-7.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/client-8.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section> */}

    {/* End Clients Section */}
    {/* ======= Features Section ======= */}
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="image col-lg-6"
            style={{ backgroundImage: 'url("assets/img/features1.jpg")' }}
            data-aos="fade-right"
          />
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay={100}>
            <div
              className="icon-box mt-5 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay={150}
            >
              <i className="bx bx-receipt" />
              <h4>Food waste</h4>
              <p>
                NGOs will request for food to hotels, restaurants, marriage hall etc
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="zoom-in"
              data-aos-delay={150}
            >
              <i className="bx bx-cube-alt" />
              <h4>Cloth waste</h4>
              <p>
                Clothes not in use can be donated to NGOs which will distribute to needy ones
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="zoom-in"
              data-aos-delay={150}
            >
              <i className="bx bx-images" />
              <h4>Fundraising</h4>
              <p>
                Providing platform to NGOs to raise the fund for the people in need by verifying the details of the recipients.
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="zoom-in"
              data-aos-delay={150}
            >
              <i className="bx bx-shield" />
              <h4>Record Maintenance</h4>
              <p>
                Donors will be able to track the history of NGOs and their project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Features Section */}


    {/* ======= Services Section ======= */}
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>Check our Services</p>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="icon-box" id="online-donation-platform">
              <div className="icon">
                <i className="bx bxl-dribbble" />
              </div>
              <h4>
                <a href="">Online Donation Platform</a>
              </h4>
              <p>
              You can create an online platform that facilitates secure 
              and authenticated donations directly to registered NGOs.
              This platform can be accessible via the website or mobile app.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="icon-box" id="ngo-verification">
              <div className="icon">
                <i className="bx bx-file" />
              </div>
              <h4>
                <a href="">NGO verification</a>
              </h4>
              <p>
              To ensure that only legitimate NGOs get registered on the platform, you can introduce a verification process that checks their credentials, registration status, and past performance.
              This will help build trust among donors and increase the credibility of the platform.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <div className="icon-box" id="donor-feedback">
              <div className="icon">
                <i className="bx bx-tachometer" />
              </div>
              <h4>
                <a href="">Donor feedback</a>
              </h4>
              <p>
              To improve the quality of services and increase donor satisfaction,
              the platform can also gather feedback from donors about their donation experience.
              This feedback can help identify areas of improvement and strengthen the platform's overall effectiveness
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="icon-box" id="social-media-integration">
              <div className="icon">
                <i className="bx bx-world" />
              </div>
              <h4>
                <a href="">Social media integration</a>
              </h4>
              <p>
              Since social media is a popular medium for sharing information about donations,
               the platform can also integrate with social media platforms like Facebook, Twitter, and Instagram.
               This will make it easy for donors to share their donation experience with others and encourage more people to donate.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="icon-box" id="user-management">
              <div className="icon">
                <i className="bx bx-slideshow" />
              </div>
              <h4>
                <a href="">User Management</a>
              </h4>
              <p>
              Provide a system for managing registered NGOs,donors and needy including their profiles, impact reports, and donation records.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <div className="icon-box" id="user-support">
              <div className="icon">
                <i className="bx bx-arch" />
              </div>
              <h4>
                <a href="">User Support</a>
              </h4>
              <p>
              Providing customer support to both donors and NGOs 
              to help them with any questions or issues they may encounter while using the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Services Section */}

    {/* ======= Cta Section ======= */}
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="text-center">
          <h3>Call To Action</h3>
          <p>
            {" "}
            Join us in making a difference today by donating to our cause.
             Your donation, no matter how small, can make a huge impact on the lives of those in need.
              Together, we can create a better future for our communities and build a more compassionate world. 
              So, donate now and be a part of our mission to create positive change in the world!
          </p>
          {/* <a className="cta-btn" href="#">
            Donate
          </a> */}
        </div>
      </div>
    </section>
    {/* End Cta Section */}

    {/* ======= Portfolio Section ======= */}
    {/* <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Check our Portfolio</p>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay={100}>
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>
        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 1"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-2.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-3.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-4.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-4.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-5.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-5.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-6.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-6.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-7.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-7.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 1"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-8.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-8.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-9.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-9.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/* End Portfolio Section */}
    {/* ======= Counts Section ======= */}
    {/* <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">
        <div className="row no-gutters">
          <div
            className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"
            data-aos="fade-right"
            data-aos-delay={100}
          />
          <div
            className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch"
            data-aos="fade-left"
            data-aos-delay={100}
          >
            <div className="content d-flex flex-column justify-content-center">
              <h3>Voluptatem dignissimos provident quasi</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
              <div className="row">
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-emoji-smile" />
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={65}
                      data-purecounter-duration={2}
                      className="purecounter"
                    />
                    <p>
                      <strong>Happy Clients</strong> consequuntur voluptas
                      nostrum aliquid ipsam architecto ut.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-journal-richtext" />
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={85}
                      data-purecounter-duration={2}
                      className="purecounter"
                    />
                    <p>
                      <strong>Projects</strong> adipisci atque cum quia
                      aspernatur totam laudantium et quia dere tan
                    </p>
                  </div>
                </div>
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-clock" />
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={35}
                      data-purecounter-duration={4}
                      className="purecounter"
                    />
                    <p>
                      <strong>Years of experience</strong> aut commodi quaerat
                      modi aliquam nam ducimus aut voluptate non vel
                    </p>
                  </div>
                </div>
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-award" />
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={20}
                      data-purecounter-duration={4}
                      className="purecounter"
                    />
                    <p>
                      <strong>Awards</strong> rerum asperiores dolor alias quo
                      reprehenderit eum et nemo pad der
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/* End Counts Section */}
  
    {/* ======= Team Section ======= */}
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Team</h2>
          <p>Check our Team</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={100}>
              <div className="member-img">
                <img
                  src="assets/img/team/hans.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Hans Raj</h4>
                <span>Team Lead</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={200}>
              <div className="member-img">
                <img
                  src="assets/img/team/kashi.jpeg"
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Kashish Kirplani</h4>
                <span>Project Manager</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={300}>
              <div className="member-img">
                <img
                  src="assets/img/team/prem.jpg"
                  className="img-fluid"
                  alt=""
                  
                />
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Prem Sagar</h4>
                <span>Project Leader</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Team Section */}
    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>
        {/* <div>
          <iframe
            style={{ border: 0, width: "100%", height: 270 }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameBorder={0}
            allowFullScreen=""
          />
        </div> */}
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer2/>
  </main>
  
</>
    )
}

export default Home2