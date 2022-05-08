import React from 'react';
import coro from "../images/1393385.jpg";
import ms1 from "../images/ms1.jpg";
import parallax from "../images/parallax-mobile-object2.png";
import AI from "../images/AI.jpg";
import code from "../images/code.jpg";
import shando from "../images/shando.jpg";
import Joe from "../images/Joe.jpg";
import grey from "../images/grey.jpg";
import banner from "../images/banner.jpg";

export default function Header() {
  return (
    <div>
    <section>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="radio" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={coro} className="d-block w-200 imgsilde" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text1">THE FASTEST WAY TO GROW YOUR BUSSINESS</h1>
              <h1 className="text2">WE PROVIDE A BETTER WAY</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={ms1} className="d-block w-200 imgsilde" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text1">THE FASTEST WAY TO GROW YOUR BUSSINESS</h1>
              <h1 className="text2">WE PROVIDE A BETTER WAY</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner} className="d-block w-200 imgsilde" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text1">THE FASTEST WAY TO GROW YOUR BUSSINESS</h1>
              <h1 className="text2">WE PROVIDE A BETTER WAY</h1>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <div className="container">
      <div className="row">
        <div className="heading">
          <h1 className="head1">WANT TO SAY SOME MORE?</h1>
          <p className="parag">MSol Technologies strives for your success and therefore, we fix our aim on providing best
            design and
            development services that make your business pillars stronger than ever before. MSol- Top mobile &amp; web
            app
            development company in Central India. we believe in delivering efficient and simple software solutions
            across various domains including Automotive, Financial &amp; Payments, Healthcare &amp; Medical, Government
            Projects, Retail, Hospitality, Education, Travel &amp; Logistics, etc</p>
        </div>
      </div>
    </div>
    <div className="tp">
      <ul className="ulist">
        <li className="item1 lis">
          <div className="diamond">
            <div className="dimond-ic"><i className="fas fa-mobile-android-alt icon3" />&gt;</div>
            <h3>Mobile Application Development</h3>
          </div>
        </li>
        <li className="item2 lis">
          <div className="diamond">
            <div className="dimond-ic"><i className="fab fa-delicious icon3" /></div>
            <h3>UI/UX Designing</h3>
          </div>
        </li>
        <li className="item3 lis">
          <div className="diamond">
            <div className="dimond-ic"><i className="fas fa-laptop icon3" /></div>
            <h3>Web Development</h3>
          </div>
        </li>
        <li className="item4 lis">
          <div className="diamond">
            <div className="dimond-ic"><i className="fas fa-chart-bar icon3" /></div>
            <h3>Digital Marketing</h3>
          </div>
        </li>
        <li className="item5 lis">
          <div className="diamond">
            <div className="dimond-ic"><i className="fal fa-gem icon3" />&gt;</div>
            <h3>Custom Software Development</h3>
          </div>
        </li>
      </ul>
    </div>
    <div className="img2">
      <div className="rect">
        <div className="container mt-10">
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-md-4 text-center">
              <i className="far fa-bars icon4" />
              <h5>Responsive Design</h5>
              <p>Content moves freely across all screen resolutions and all devices</p>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4 text-center">
              <i className="fas fa-eye icon4" />
              <h5>Retina Display</h5>
              <p>Devices show more pixels per square inch, resulting in sharper images</p>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4 text-center">
              <i className="fas fa-file-alt icon4" />
              <h5>Premium Development</h5>
              <p>An emphasis on cutting-edge design and modern usability standards</p>
            </div>
            <div className="col-md-12 text-center mobi">
              <img src={parallax} alt="Mobile" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid text-center">
      <div className="row">
        <div className="heading">
          <h1 className="head2">PROUD PROJECTS THAT MAKE US STAND OUT</h1>
          <p>We go to great lengths to assure your content is delivered in such a way that visitors can easily and
            intuitively find the information they seek, resulting in a pleasant and productive user experience.</p>
        </div>
      </div>
    </div>
    <div className="d-grid gap-2 d-md-block text-center">
      <a className="btn btn-primary butn " href="https://msoltechnology.com/portfolio" role="button">VIEW ALL PORTFOLIO<i className="fa fa-angle-right fa-1x" /></a>
    </div>
    <div className="blog">
      <div className="container">
        <div className="blogsec">
          <div className="blogdiv">
            <h1 className="head2">LATEST BLOG</h1>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 cloud">
                <div className="row">
                  <img src="https://msoltechnology.com/uploads/blog/Cld1.jpg" className="img-responsive zoomeffect" alt="Will Open Compute Fall Victim to the Cloud's Success?" />
                  <h4><a href="https://msoltechnology.com/blog-detail/will-open-compute-fall-victim-to-the-clouds-success">Will
                      Open Compute Fall Victim to the Cloud's Success?</a></h4>
                  <p><small>2021-04-20 12:54:55</small></p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="row">
                  <img src={AI} alt="How Artificial Intelligence in Medicine is Improving Healthcare (and Business)" />
                  <h4><a href="https://msoltechnology.com/blog-detail/how-artificial-intelligence-in-medicine-is-improving-healthcare-and-business">How
                      Artificial Intelligence in Medicine is Improving Healthcare (and Business)</a></h4>
                  <p><small>2021-04-20 01:10:51</small></p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="row">
                  <img src={code} alt="How one founder built a startup around compassion and care facilitated by AI" />
                  <h4><a href="https://msoltechnology.com/blog-detail/how-one-founder-built-a-startup-around-compassion-and-care-facilitated-by-ai">How
                      one founder built a startup around compassion and care facilitated by AI</a></h4>
                  <p><small>2021-04-20 01:31:22</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="test">
      <div className="testimonialfull-overlay">
        <div className="container testimonialfull-data text-center wow fadeInDown">
          <h1 className="head3"><span>TESTIMONIALS</span></h1>
          <div className="testimonialslider">
            <div>
              <div className="section-md">
                <div className="avtarshape">
                  <div className="losange">
                    <div className="los1"><img src={shando} alt="Avatar" /></div>
                  </div>
                </div>
                <h4>Shando Darby USA</h4>
                <p style={{textAlign: 'center'}}><small>CEO</small></p>
                <p style={{textAlign: 'center'}}>The people at MSol are fantastic, reliable, and get the job done
                  promptly.
                  MSol Team are very quick responsive. They revamped my website!</p>
              </div>
            </div>
            <div>
              <div className="section-md">
                <div className="avtarshape">
                  <div className="losange">
                    <div className="los1"><img src={Joe} alt="Avatar" /></div>
                  </div>
                </div>
                <h4>Joe Bradley</h4>
                <p style={{textAlign: 'center'}}><small>Director</small></p>
                <p style={{textAlign: 'center'}}>They helped take my business from offline to online, rebranding and
                  launching social presence and online marketing during covid. The response has been phenomenal.</p>
              </div>
            </div>
            <div>
              <div className="section-md">
                <div className="avtarshape">
                  <div className="losange">
                    <div className="los1"><img src={grey} alt="Avatar" /></div>
                  </div>
                </div>
                <h4>Grey Hoole</h4>
                <p style={{textAlign: 'center'}}><small>CEO Neonplus</small></p>
                <p style={{textAlign: 'center'}}>I can say with conviction that MSol Technologies is truly a reliable
                  company.They are diligent in their work and instilled the trust in me to continue future projects with
                  them.
                </p>
              </div>
            </div>
            <div>
              <div className="section-md">
                <div className="avtarshape">
                  <div className="losange">
                    <div className="los1"><img src="/images/sofia.jpg" alt="Avatar" /></div>
                  </div>
                </div>
                <h4>Shofiya</h4>
                <p style={{textAlign: 'center'}}><small>Founder Atelier</small></p>
                <p style={{textAlign: 'center'}}>I came here to give some words in appreciation to your work but you know
                  what
                  I\'m speechless so it was mind blowing services and growing future for every video content and for
                  every
                  brands do visit here nice to meet you all the team members of creatFx keep going</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 style={{textAlign: 'center'}}>Our Clients</h1>
    <div className="container">
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src="/images/the-diamond-art-logo.png" height={200} width={200} />
          </div>
          <div className="slide">
            <img src="/images/NetproPC_p1.png" height={200} width={200} />
          </div>
          <div className="slide">
            <img src="/images/Sign_Group.png" height={200} width={200} />
          </div>
          <div className="slide">
            <img src="/images/Sign.png" height={200} width={200} />
          </div>
          <div className="slide">
            <img src="/images/2_Sign.jpg" height={200} width={200} />
          </div>
          <div className="slide">
            <img src="/images/vadic_bllom.jpg" height={200} width={200} />
          </div>
          <div className="slide">
            <img src="/images/Central_Meat1.png" height={200} width={200} />
          </div>
          <div className="slide">
            <img src="/images/agr.png" height={200} width={200} />
          </div>
          <div className="slide">
            <img src="/images/butterfly.png" height={200} width={200} />
          </div>
          <div className="slide">
            <img src="/images/logo_new.png" height={200} width={200} />
          </div>
          <div className="slide">
            <img src="/images/IH.jpg" height={200} width={200} />
          </div>
          <div className="slide">
            <img src="/images/I_USA.jpg" height={200} width={200} />
          </div>
          <div className="slide">
            <img src="./images/the-diamond-art-logo.png" height={200} width={200} />
          </div>
          <div className="slide">
            <img src="./images/the-diamond-art-logo.png" height={200} width={200} alt="My Awesome Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
