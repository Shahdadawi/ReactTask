import React from 'react';
import CustomInput from './shared/CustomInput';
import CustomButton from './shared/CustomButton';

function AddUser() {
    return (
        <div className="container mt-5">
            <div className="card p-4 mx-auto mb-4"  style={{ maxWidth: '400px' }}>
                <h2 className="mb-4 text-center">Add New User</h2>
                <form>
                    <CustomInput label="Name" name="name" type="text" id="name" />
                    <CustomInput label="Email" name="email" type="email" id="email" />
                    <CustomInput label="Age" name="age" type="number" id="age" />
                    <CustomInput label="Blocked?" name="isBlocked" type="checkbox" id="isBlocked" />
                    <CustomButton type="primary" text="Add User" />
                </form>
            </div>
        </div>
    );
}

export default AddUser;
