import React from 'react';
import './aboutus-styles.css';
import Separator from "../../shared/separator";

const AboutUsComponent = () => {

  return (
    <div className="visit-us-container">
      <header
        style={{
          backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, .35), rgba(0, 0, 0, .35)),url("assets/img/visit-us.jpg")`,
        }}
      >
        <div className="text-container">
          <h3 class="visitus-heading">Our History</h3>
          <div class="visitus-subtext">
            <p>An incredible journey from a remote village to Great success through the Grace and Power of Jesus Christ</p>
          </div>
          <div className="sep-space">
            <Separator type={"sep2"} />
          </div>
        </div>
      </header>

      <div className="visit-us-form">
        <div className="card-form">
          <div className="about-us-1">
            <h3>How it all began</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque <span style={{color:"#5f6cfa",fontWeight:"600"}} >penatibus</span> et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p id="highlighted">Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <p>
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            </p>
            
            <Separator type={"sep3"} />
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p>
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            </p>
          </div>
          {/* <div className="embedded-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9945.683209720313!2d0.054306!3d51.450430000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a973087ea747%3A0xaa0bebdc88e2723f!2sPassey%20Pl%2C%20Eltham%2C%20London%20SE9%205DQ!5e0!3m2!1sen!2suk!4v1610701509229!5m2!1sen!2suk"
              width="100%"
              height="450"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div className="contact-form">
            <h3>Send us mail</h3>
            <form>
              <div className="name">
                <label>
                  Name <span>*</span>
                </label>
                <input type="text" />
              </div>
              <div className="email">
                <label>
                  E-mail <span>*</span>
                </label>
                <input type="email" />
              </div>
              <div className="subject">
                <label>
                  Subject <span>*</span>
                </label>
                <input type="text" />
              </div>
              <div className="message">
                <label>
                  Message <span>*</span>
                </label>
                <textarea name="" id="" cols="129" rows="12"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
