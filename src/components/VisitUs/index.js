import React,{useEffect} from "react";
import "./visitus-styles.css";
import Separator from "../../shared/separator";

const VisitUs = () => {

  return (
    <div className="visit-us-container">
      <header
        style={{
          backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, .35), rgba(0, 0, 0, .35)),url("assets/img/visit-us.jpg")`,
        }}
      >
        <div className="text-container">
          <h3 class="visitus-heading">Visit Us </h3>
          <div class="visitus-subtext">
            <p>Mount Horeb Victorious Church International – London Branch</p>
          </div>
          <div className="sep-space">
            <Separator type={"sep1"} />
          </div>
        </div>
      </header>

      <div className="visit-us-form">
        <div className="card-form">
          <div className="form-1">
            <h3>How to get to us</h3>
            <p>
              <strong className="head">Buses</strong> <br /> 321 from New cross,
              321 from Lewisham, 126 from Bromley, 124 from Catford, 160 from
              Sidcup, 286 from Greenwich
            </p>
            <p>
              <strong className="head">Train</strong> <br /> Eltham train
              station then 5 minutes walk
            </p>
            <div className="line-break"></div>
          </div>
          <div className="embedded-map">
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
                <textarea name="" id="" cols="160" rows="12"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitUs;
