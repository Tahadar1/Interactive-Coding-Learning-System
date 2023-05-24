import React from "react";

const DashCard = (props) => {
  const { imgUrl, title} = props.item;

  const HandleSubmit= () =>{
    
  }
  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>
      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <p className="enroll d-flex align-items-center gap-1">
            <button className="btn" onClick={HandleSubmit}> Enroll Now </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashCard;
