import React from "react";
import "./Body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import img7 from "./images/img7.png";
import img8 from "./images/img8.png";
import img9 from "./images/img9.png";
import img10 from "./images/img10.png";
import img11 from "./images/img11.png";
import img12 from "./images/img12.png";
import img13 from "./images/img13.png";
import img14 from "./images/img14.jpg";
import Card from "react-bootstrap/Card";

function Body() {
  return (
    <div className="body">
      <div className="about__us">
        <h1>ABOUT US</h1>
        <img src={img1} alt="" />
        <p>
          We endeavour to build homes for which make it's residents happy and
          proud of their address. Residents are at heart of everything we do, we
          build homes to live in, not houses to stay in.
        </p>
        <img src={img2} alt="" />
        <div className="card__1">
          <Card className="card">
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Text>
                Our track record has been impeccable with project completion on
                time and have surpassed expectations many a time, society
                members have positively received our redevelopment plans and
                encourage our modern and urbane designs to their neighbours.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img variant="top" src={img11} />
            <Card.Body>
              <Card.Text>
                The Hetali Group is a redeveloper like no other with a profound
                focus on quality and long term satisfaction of its residents.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="card__1">
          <Card className="card">
            <Card.Img variant="top" src={img12} />
            <Card.Body>
              <Card.Text>
                They just don't endeavour but build homes which make it's
                residents proud of their address by putting home-owners at the
                heart and soul of everything they do from start to finish and
                post completion.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Img variant="top" src={img13} />
            <Card.Body>
              <Card.Text>
                Hetali Group lives by the ethos of building homes to live and
                not houses to stay in.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="rectangle">
          <p>.</p>
        </div>
        <div className="para">
          <p>
            Established in 1992, Hetali Group is a leading real estate developer
            of residential spaces across Mumbai and have earned an unmatched
            reputation amongst its very loyal customers. The company's
            customer-centric values, project management proficiency and
            technical expertise are amplified with over 6.5 lakh sq.ft. built
            and almost 1 lakh sq.ft underway leading to more than families!
          </p>
          <p>
            The Hetali Group promises a lifestyle second to none. In a span of
            over four decades, the group has proved to be one of the most
            reputed real estate builders in the western suburbs of Mumbai with
            residences in prime locations such as Andheri, Goregaon, Vile Parle
            and Juhu.
          </p>
          <p>
            Spearheaded by Mr Jayesh Pandya, the company's central ideology is
            to provide homes customized to the customer's requirements and
            home’s that are superior in nature keeping in mind the needs of the
            modern home user.
          </p>
        </div>
      </div>
      <div className="vision">
        <h2>Vision</h2>
        <p>
          We aim to ensure top-class service to our stakeholders & diversify our
          business to other service-oriented sectors with the ultimate goal of
          achieving customer satisfaction & end-user interaction.
        </p>
      </div>
      <div className="mission">
        <h2>Mission</h2>
        <img src={img4} alt="" />
        <div className="mission__2">
          <img
            src="https://images.unsplash.com/photo-1510162126413-f644071b8f60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt=""
          />
          <div className="mission__3">
            <div className="mission__31">
              <h2>Personalised</h2>
              <p>
                Our core idealogy is to provide personalised homes to meet the
                very specific needs of residents.
              </p>
            </div>
            <div className="mission__32">
              <p>Committed</p>
            </div>
            <div className="mission__32">
              <p>Quality & Service Oriented</p>
            </div>
            <div className="mission__32">
              <p>Timely</p>
            </div>
          </div>
        </div>
      </div>
      <div className="csr">
        <h2>Corporate Social Responsibility</h2>
        <img src={img4} alt="" />
        <div className="csr__2">
          <div className="mission__3">
            <div className="mission__311">
              <h2>Education for the under-privileged</h2>
              <p>
                We believe that our future lies in the holistic educational
                foundation of the youth and we have nurtured that cause by
                providing the necessary books and monetary support to the
                under-privileged children of Mumbai & also at several villages
                in Gujarat. As the Trustees of the H A Desai Boarding School in
                Matunga, Mumbai, we have been providing living and hospitality
                services to the academically bright students from the weaker
                monetary sections of the society.
              </p>
            </div>
            <div className="mission__32">
              <p>Support for Rural Farmers</p>
            </div>
            <div className="mission__32">
              <p>Spiritual</p>
            </div>
          </div>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
      </div>
      <div className="founder">
        <div className="founder__1">
          <h2>Founder’s Message</h2>
          <img src={img5} alt="" />
          <p className="jayesh">Mr. Jayesh H. Pandya</p>
          <p className="p1">
            “When a customer buys a home, he is giving up a major chunk of his
            life's savings to do so. It is imperative to give him exactly what
            he looks for in his home.”
          </p>
          <p className="p2">
            We bring to our clients much wanted human values, integrity, trust
            and an assurance of responsibility all coupled with our expertise in
            construction, engineering & management. Our biggest assets have
            always been our small but highly trained team of professional
            managers and engineers who are backed by a very able team of
            administrators. We have a clear vision about building on our
            strengths and our achievements while holding dear to us our basic
            principles
          </p>
        </div>
        <img className="img" src={img2} alt="" />
      </div>
      <div className="group">
        <h2>Group Companies</h2>
        <img src={img4} alt="" />
        <div className="group__1">
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
        </div>
      </div>
      <div className="footer">
        <div className="footer__1">
          <img src={img9} alt="" />
          <div className="footer__2">
            <div className="footer__21">
              <p>Quick Links</p>
              <p>Contact Us</p>
              <p>About Us</p>
              <p>Testimonial</p>
              <p>Gallery</p>
              <p>Site Map</p>
            </div>
            <div className="footer__22">
              <p>Flats in Mumbai</p>
              <p>1BHK Andheri West</p>
              <p>2 BHK Andheri West</p>
              <p>2 BHK Andheri West</p>
              <p>1BHK Goregaon East</p>
              <p>2BHK Goregaon East</p>
            </div>
            <div className="footer__23">
              <p>Projects in Mumbai</p>
              <p>Ongoing</p>
              <p>Upcoming</p>
              <p>Completed</p>
              <p>Hetali Blessings</p>
              <p>Hetali Anuchhaya</p>
            </div>
          </div>
        </div>
        <img src={img10} alt="" />
      </div>
    </div>
  );
}

export default Body;
