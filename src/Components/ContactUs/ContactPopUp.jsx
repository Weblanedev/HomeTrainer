import React from "react";
import "./contactPopUp.css";

const ContactPopUp = ({ setOk }) => {
  return (
    <div className="deletealert">
      <div className="deleteoption">
        <div className="undel">{/* <MdCancel className='undo'/> */}</div>
        <p className="new__feature--text">
          Your message has been sent successfully!
        </p>
        <div className="deletediv">
          <button  onClick={() => setOk(false)}> <a href="/">Go to HomePage</a> </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPopUp;
