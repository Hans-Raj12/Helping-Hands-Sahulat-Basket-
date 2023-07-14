import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer2 from '../components/Footer2'
const Home2 = () => {


  const [feedbackForm, setFeedbackForm] = useState({
    name:"",
    email:"",
    subject:"",
    message:"",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackForm),
    })
    const data = await response.json();
    console.log(data);
    if (data.message) {
      alert("Message Sent Successfully")
    }
    else {
      alert("Message Not Sent")
    }

  }

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
          <h1>Hands to Change</h1>
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
                  src="assets/img/team/super_visor.jpeg"
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
                <h4>Dr. Faheem Akhtar Rajput</h4>
                <span>Supervisor</span>
              </div>
            </div>
          </div>
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
                  <a href="https://www.linkedin.com/in/hans-raj-110a05202/">
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
                <p>A108 Adam Street, Sukkur, Sindh, Pakistan</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>info.helpinghands@gmail.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Call:</h4>
                <p>+92 304 3458660</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            <form
              onSubmit={handleSubmit}
              className="email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    value={feedbackForm.name}
                    onChange={e=>{
                      setFeedbackForm({
                        ...feedbackForm,
                        name:e.target.value
                      })
                    }}
                    name={feedbackForm.name}
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    value={feedbackForm.email}
                    onChange={e=>{
                      setFeedbackForm({
                        ...feedbackForm,
                        email:e.target.value
                      })
                    }}
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={feedbackForm.subject}
                  onChange={e=>{
                    setFeedbackForm({
                      ...feedbackForm,
                    subject:e.target.value
                    })
                  }}
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  value={feedbackForm.message}
                  onChange={e=>{
                    setFeedbackForm({
                      ...feedbackForm,
                    message:e.target.value
                    })
                  }}
                  rows={5}
                  placeholder="Message"
                  required
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