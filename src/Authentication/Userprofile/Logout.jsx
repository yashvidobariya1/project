import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    const navigate = useNavigate();

    const logout = () => {
        const tokenremove = localStorage.getItem("token");

        if (tokenremove) {
            const userdata = JSON.parse(localStorage.getItem('user'));

            console.log(userdata);

            if (userdata && userdata.length > 0) {

                const updatedata = userdata.map(user => {

                    if (user.token === tokenremove) {
                        const { token, ...deleteusertoken } = user;
                        console.log("token delete");
                        return deleteusertoken;
                    } else {
                        console.log("not deleted")
                    }
                    return user;
                });
                localStorage.setItem('user', JSON.stringify(updatedata));
            }
        }

        localStorage.removeItem("token");
        localStorage.removeItem("activeuser");
        alert("Are you sure you want to logout??");
        navigate("/home");
    }
    return (
        <>

            <div className='logout'>
                <button onClick={logout}>logout</button>
            </div></>

    )
}

export default Logout