import React from "react";
import interim3 from "../../interim3.svg";
import "./upcoming-styles.css";
import {cardInfo} from '../../data/upcoming-events-info';



const UpcomingEvents = () => {
  return (
    <div className="events-container">
      <h1 className="events-heading">Upcoming Events</h1>
      <img className="interimImage" src={interim3} alt="Interim" />
      <div className="events-grid">
        {/* Card 1 */}
        {cardInfo.map((info, index) => {
          const { headTitle, date, content ,imageUrl } = info;
          return (
            <div className="card-container">
              <div className="image-container">
                <img src={imageUrl} alt="Events-img"/>
              </div>
              <div key={index} className="card-header">
                <a href="#">{headTitle}</a>
              </div>
              <div className="card-date">{date}</div>
              <div className="card-text">{content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingEvents;

