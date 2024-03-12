import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Login/Login.css'


const Login = () => {
    const history = useNavigate();

    const [inputvalue, setinput] = useState({
        email: '',
        password: '',
    });

    console.log(inputvalue);

    const getlogindata = (e) => {
        const { value, name } = e.target;

        setinput((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };


    var random = () => {
        return Math.random().toString(36).substr(2);
    };

    var token = () => {
        return random() + "/" + random() + "-" + random() + random();
    };

    console.log(token());


    const logindata = (e) => {
        e.preventDefault();

        const getuser = localStorage.getItem('user');
        console.log(getuser);

        const { email, password } = inputvalue;

        if (email === '') {
            alert('Email field required');
        } else if (password === '') {
            alert('Password field required');
        } else {

            const userlogged = localStorage.getItem('token');

            if (userlogged) {
                alert('Another user is already logged in.');
            } else if (getuser) {
                const userdata = JSON.parse(getuser);

                if (userdata && userdata.length > 0) {

                    const userlogin = userdata.find((index) => {
                        return index.email === email && index.password === password;
                    });

                    if (!userlogin) {
                        alert('Invalid email or password');
                    } else {
                        const createtoken = token();
                        const storetoken = { ...userlogin, token: createtoken };


                        const updatedata = userdata.map(user =>
                            user.email === email ? storetoken : user
                        );

                        localStorage.setItem('user', JSON.stringify(updatedata));

                        const activeuser = localStorage.getItem('activeuser');

                        localStorage.removeItem('activeuser', JSON.stringify(storetoken));
                        localStorage.setItem('token', createtoken);
                        localStorage.setItem('activeuser', JSON.stringify(updatedata));

                        alert('Login successful');
                        history("/");
                    }
                } else {
                    alert('User not registered. Please sign up.');
                }
            } else {
                alert('User not registered. Please sign up.');
            }
        }
    };

    return (
        <div className="section">
            <div className='sec-container'>
                <h1>Login </h1>
                <div className='login-details'>
                    <label>Email </label>
                    <br />
                    <input type='email' placeholder='enter your Email Address' name='email' onChange={getlogindata} />
                    <br />
                    <br />

                    <label>Password </label>
                    <br />
                    <input type='password' placeholder='enter your password' name='password' onChange={getlogindata} />

                    <button onClick={logindata}>Login</button>
                    <div className='signup'>
                        <p>Have not Account you?</p>
                        <div className='link'>
                            <NavLink to='/signup' style={{ textDecoration: 'none' }}>
                                <h6>SIGN UP</h6>
                            </NavLink>
                        </div>
                    </div>
                    <div className='logout'></div>
                </div>
            </div>
        </div>
    );
};

export default Login;