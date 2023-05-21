import React from "react";

export default function NoteItem(props) {
  const { element } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
          <h5 className="card-title">{element.title}</h5>
          <i className="fa-regular fa-trash-can mx-2"></i>
          <i className="fa-regular fa-pen-to-square mx-2"></i>
          </div>
          <p className="card-text">{element.description}</p>
        </div>
      </div>
    </div>
  );
}
