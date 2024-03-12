import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ProfileData from '../../Data/Data.json';
import '../Details/Details.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Details = () => {
    const { imdbID } = useParams();
    const [profile, setprofile] = useState('');
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const selectprofile = ProfileData.find(profile => profile.imdbID === imdbID);
        setprofile(selectprofile);
        setloading(false);
    }, [imdbID]);


    if (loading) {
        return <p>loading</p>
    }


    return (
        <>
            <Navbar />
            <div>
                {profile ? (
                    <div className="section">
                        <div className="seccontainer grid">

                            <div className='container flex'>

                                <div className='main'>
                                    <div key={profile.imdbID} className='box-info'>
                                        <img src={`${process.env.PUBLIC_URL}/${profile.image}`} alt={profile.name} />

                                    </div>
                                </div>
                                <div className='content-info'>

                                    <p>{profile.name}</p><br /><hr />
                                    <h1>categories</h1>
                                    <h2> {profile.categories}</h2>
                                    <h1>Age</h1>
                                    <h2> {profile.age} Years old</h2>
                                    <h1>Education</h1>
                                    <h2> {profile.Education} Education</h2>
                                    <h1>Profession</h1>
                                    <h2> {profile.Profession} Profession</h2>
                                    <NavLink to='/' className='read'>
                                        <button id='back'>Back</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>



                ) :
                    (
                        <p>loading...</p>
                    )
                }
            </div>
            <Footer />
        </>


    )
}

export default Details