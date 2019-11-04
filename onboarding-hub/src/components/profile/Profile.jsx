import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './profile.scss';

const Profile = () => {
    const [checked, setChecked] = useState(false);
    const [edit, setEdit] = useState(false)
    // const [user, setUser] = useState({})

    const handleCheck = event => {
        setChecked(event.target.checked)
        console.log(event.target.checked)
    };

    const handleEdit = event => {

    };

    useEffect(() => {
        // Grab the current user from cookies and feed it into the axios call
        axios
            .get(`https://projectfirefly.herokuapp.com/users/{id}`)
            .then(response => {
                // setUser(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const user = {
        email: 'email@email.com',
        password: '123456789',
        first_name: 'John',
        last_name: 'Doe',
        phone_number: '101 101 1234',
        academic_research: true,
        parent_age: 20,
        marital_status: 'Married',
        relation_to_child: 'Parent',
        education: 'College',
        address: '1234 East Westington',
        city: 'Nowhere',
        state: 'NA',
        country: 'United Nowhere',
        zip: '12345'
    }

    const stripeInfo = {
        subscription: 'Monthly',
    }

    return (
        <div className='container-profile'>
            {/**=============== Left Side  ======================= */}
            {edit ? <div>
                <div className="flex">
                    <div>
                        {/**=============== Account Information  ======================= */}
                        <div className="flex-one">
                            <h2>Account Information</h2>
                            <span><p>Email:</p> <input value={user.email}></input></span>
                            <span><p>Password:</p> <input value={user.password}></input></span>
                        </div>
                        {/**=============== Payment Information  ======================= */}
                        <div>
                            <h2>Payment Information</h2>
                            <span><p>Subscription:</p></span>
                        </div>
                        {/**=============== Educational Research Participation Toggle  ======================= */}
                        <div>
                            <h2>Educational Research Information</h2>
                        </div>
                        {/**=============== Educational Research Information  ======================= */}
                        {checked ? <div>
                            <div>
                                <span><p>Phone Number:</p><input value={user.phone_number}></input></span>
                                <span><p>Academic Research:</p><input value={user.academic_research}></input></span>
                                <span><p>Parent Age:</p><input value={user.parent_age}></input></span>
                                <span><p>Marital Status:</p><input value={user.marital_status}></input></span>
                                <span><p>Relation to Child:</p><input value={user.relation_to_child}></input></span>
                                <span><p>Education:</p><input value={user.education}></input></span>
                                <span> <p>Address: <input value={user.address}></input></p></span>
                                <span> <p>City: <input value={user.city}></input></p></span>
                                <span> <p>State: <input value={user.state}></input></p></span>
                                <span> <p>country: <input value={user.country}></input></p></span>
                                <span> <p>Zip: <input value={user.zip}></input></p></span>
                            </div>
                        </div> : <span><input
                            type='checkbox'
                            name='Educational-Research'
                            checked={checked}
                            onChange={handleCheck}
                        />
                                <p>I would like to participate in the Educational Research</p></span>}
                    </div>

                    <div className="flex-two">
                        {/**=============== Manage Profile  ======================= */}
                        <div>
                            <h2>Manage Profile</h2>
                            <p>Place Holder Info</p>
                        </div>
                    </div>

                </div>
            </div> : <div>
                    <div className="flex">
                        <div>
                            {/**=============== Account Information  ======================= */}
                            <div className="flex-one">
                                <h2>Account Information</h2>
                                <span><p>Email:</p> <p>{user.email}</p></span>
                                <span><p>Password:</p> <p>{user.password}</p></span>
                            </div>
                            {/**=============== Payment Information  ======================= */}
                            <div>
                                <h2>Payment Information</h2>
                                <span><p>Subscription:</p><p>{stripeInfo.subscription}</p></span>
                            </div>
                            {/**=============== Educational Research Participation Toggle  ======================= */}
                            <div>
                                <h2>Educational Research Information</h2>
                            </div>
                            {/**=============== Educational Research Information  ======================= */}
                            {checked ? <div>
                                <div>
                                    <span><p>Phone Number:</p><p> {user.phone_number}</p></span>
                                    <span><p>Academic Research:</p><p>{user.academic_research}</p></span>
                                    <span><p>Parent Age:</p><p> {user.parent_age}</p></span>
                                    <span><p>Marital Status:</p><p> {user.marital_status}</p></span>
                                    <span><p>Relation to Child:</p><p> {user.relation_to_child}</p></span>
                                    <span><p>Education:</p><p>{user.education}</p></span>
                                    <span><p>Address: {user.address}</p></span>
                                    <span><p>City: {user.city}</p></span>
                                    <span><p>State: {user.state}</p></span>
                                    <span><p>country: {user.country}</p></span>
                                    <span> <p>Zip: {user.zip}</p></span>
                                </div>
                            </div> : <span><input
                                type='checkbox'
                                name='Educational-Research'
                                checked={checked}
                                onChange={handleCheck}
                            />
                                    <p>I would like to participate in the Educational Research</p></span>}
                        </div>

                        <div className="flex-two">
                            {/**=============== Manage Profile  ======================= */}
                            <div>
                                <h2>Manage Profile</h2>
                                <p>Place Holder Info</p>
                            </div>
                        </div>

                    </div>
                </div>
            }

            <div className="right-align">
                <button onClick={() => setChecked(false)}>Opt Out</button>
                <button onClick={() => setEdit(true)}>Edit</button>
                <button onClick={() => setEdit(false)}>Save</button>
            </div>

        </div>
    )
}

export default Profile;