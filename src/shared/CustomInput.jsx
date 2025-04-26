import React from 'react';

function CustomInput(props) {
  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>

      {props.type === "checkbox" ? (
        <div className="form-check form-switch">
          <input
            type="checkbox"
            className="form-check-input"
            id={props.id}
            name={props.name}
          />
          <label className="form-check-label" htmlFor={props.id}>
            No / Yes
          </label>
        </div>
      ) : (
        <input
          type={props.type}
          className="form-control"
          id={props.id}
          name={props.name}
        />
      )}
    </div>
  );
}

export default CustomInput;
