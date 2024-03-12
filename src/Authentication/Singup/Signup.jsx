import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import '../Singup/Singup.css'

const Signup = () => {

    const history = useNavigate();

    const [inputvalue, setinput] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        heigth: "",
        weigth: "",
        region: []
    });


    const [data, setdata] = useState([]);


    useEffect(() => {
        const storedata = JSON.parse(localStorage.getItem("user")) || [];
        setdata(storedata);
    }, []);

    console.log(inputvalue);


    const getdata = (e) => {
        console.log(e.target.value);

        const { value, name, type, cheked } = e.target;

        if (type === 'checkbox  ') {
            const updatedRegions = cheked ? [...inputvalue.region, value] : inputvalue.region.filter(region => region !== value);

            setinput(prev => ({ ...prev, region: updatedRegions }));
        } else {
            setinput(prev => ({ ...prev, [name]: value }));
        }

        console.log(value, name);
        setinput((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const adddata = (e) => {
        e.preventDefault();

        console.log(inputvalue);

        const { name, email, password, gender } = inputvalue;

        if (name === "") {
            alert('name field required');
        }
        else if (email === "") {
            alert('email field required');
        }
        else if (password === "") {
            alert('password field required');
        }
        else if (gender === "") {
            alert('gender field required');
        } else {
            const newdata = Array.isArray(data) ? [...data, inputvalue] : [inputvalue];

            setdata(newdata);
            localStorage.setItem("user", JSON.stringify(newdata));
            console.log("data add");
            alert("singup successfully done");
            history("/")
        }

    }

    return (
        <>
            <div className="section">
                <div className='signup-info'>
                    <h1>Signup </h1>

                    <div className='signup-details'>

                        <label>Username</label>
                        <input type='email' name='name' placeholder='enter your name' onChange={getdata}></input><br /><br />


                        <label>Email</label>
                        <input type='email' placeholder='enter your email' name='email' onChange={getdata}></input><br /><br />


                        <label>password</label>
                        <input type='password' placeholder='enter your passsword' name='password' onChange={getdata} /><br /><br />


                        <div className='gender'>
                            <input type='radio' id='male' name='gender' value='male' onChange={getdata} />
                            <label htmlFor='male'>Male</label>

                            <input type='radio' id='female' name='gender' value='female' onChange={getdata} />
                            <label htmlFor='female' >Female</label><br />
                        </div>

                        <label>Height</label>
                        <input type='number' placeholder="enter your height (in cm)" name='heigth' onChange={getdata} /><br /><br />


                        <label >weigth</label>
                        <input type='number' placeholder="enter your weigth (in cm)" name='weigth' onChange={getdata} /><br /><br />

                        <label>Region</label><br />
                        <div className='region'>

                            <input type='checkbox' id='asia' name='region' value='Asia' onChange={getdata} />
                            <label htmlFor='asia'>Asia</label>
                            <input type='checkbox' id='europe' name='region' value='Europe' onChange={getdata} />
                            <label htmlFor='europe'>Europe</label>
                            <input type='checkbox' id='africa' name='region' value='Africa' onChange={getdata} />
                            <label htmlFor='africa'>Africa</label><br />
                        </div>

                        <button onClick={adddata} >Continue</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup