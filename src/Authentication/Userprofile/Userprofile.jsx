import React, { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';
import Logout from './Logout';
import '../Userprofile/Userprofile.css'
import Navbar from '../../Components/Navbar/Navbar';


const Userprofile = () => {
    const token = localStorage.getItem('token');
    const [editing, setEditing] = useState(false);
    const [updatedUser, setUpdatedUser] = useState(null);
    const getuser = JSON.parse(localStorage.getItem('activeuser'));
    const user = JSON.parse(localStorage.getItem('user'));



    if (!token || !getuser || getuser.length === 0) {
        return (
            <div className='profile'>
                <h1>No active user</h1>
            </div>
        );
    }

    const activeUser = getuser.find(user => user.token === token);
    console.log(activeUser);

    const handleEditProfile = () => {
        setEditing(true);
        setUpdatedUser({ ...activeUser });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();

        const updatedUsers = getuser.map(user => {
            if (user.token === token) {
                return { ...user, ...updatedUser };
            }
            return user;
        });
        localStorage.setItem('activeuser', JSON.stringify(updatedUsers));
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setEditing(false);
    };

    return (
        <>
            <Navbar />
            <div className='profile-silder'>

                <div className='left-profile'>
                    <img src='images/profile.jpg' />

                    <h1> {activeUser.name}</h1>

                    <Logout />
                    <div className="editprofile">  <button id='editprofile' onClick={handleEditProfile}> Edit </button>
                    </div>

                    <div className="conatct"><button id='contact'>
                        <NavLink to="/contactus">Contact Now</NavLink>
                    </button></div>

                </div>
                <div className='right-profile'>
                    <div className='userprofile'>

                        {
                            editing ? (
                                <form onSubmit={handleFormSubmit}>
                                    <h1>USER PROFILE</h1>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Firstname</th>
                                                <td>
                                                    <input type='text' name='name' value={updatedUser.name} onChange={handleInputChange} />
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>Email</th>
                                                <td>
                                                    <input type='text' name='email' value={updatedUser.email} onChange={handleInputChange} />
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>Region</th>
                                                <td>
                                                    <select name='region' value={updatedUser.region} onChange={handleInputChange}>

                                                        <option value='Asia'>Asia</option>
                                                        <option value='Europe'>Europe</option>
                                                        <option value='Africa'>Africa</option>


                                                    </select>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>Gender</th>
                                                <td>
                                                    <input type='text' name='gender' value={updatedUser.gender} onChange={handleInputChange} />
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>height</th>
                                                <td>
                                                    <input type='text' name='heigth' value={updatedUser.heigth} onChange={handleInputChange} />
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>Weigth</th>
                                                <td>
                                                    <input type='text' name='weigth' value={updatedUser.weigth} onChange={handleInputChange} />
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    <button id='save' type='submit'>Save</button>
                                </form>

                            ) : (
                                <div>
                                    <h1>USER PROFILE</h1>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Firstname</th>
                                                <td>{activeUser.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td>{activeUser.email}</td>
                                            </tr>
                                            <tr>
                                                <th>Region</th>
                                                <td>{activeUser.region}</td>
                                            </tr>
                                            <tr>
                                                <th>Gender</th>
                                                <td>{activeUser.gender}</td>
                                            </tr>
                                            <tr>
                                                <th>Heigth</th>
                                                <td>{activeUser.heigth}'cm</td>
                                            </tr>
                                            <tr>
                                                <th>Weigth</th>
                                                <td>{activeUser.weigth}'kg</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            )}

                    </div>
                </div>

            </div >

        </>

    );
};

export default Userprofile;