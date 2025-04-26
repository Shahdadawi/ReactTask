import React from 'react';
import CustomButton from './shared/CustomButton';

function User(props) {
  return (
    <div className="card p-3 mb-3 mx-auto" style={{ maxWidth: '400px' }}>
      <h5 className="card-title mb-2">User Name: {props.name}</h5>
      <p className="card-text mb-3">Email: {props.email}</p>
      <div className="d-flex justify-content-between">
        <CustomButton text="Details" type="secondary" />
        <CustomButton text="Delete" type="danger" />
      </div>
    </div>
  );
}

export default User;
