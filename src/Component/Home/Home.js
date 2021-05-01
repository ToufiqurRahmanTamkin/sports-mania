import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import './Home.css';
import image from '../../images/first-banner.jpg'
const Home = () => {
    
    const [ teams, setTeams ] = useState([]);
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain";
        fetch(url)
            .then(response => response.json())
            .then(data => {                
                const { teams } = data;
                setTeams(teams);
            })
            .catch(error => console.log(error))
    },[])

    return (
        <div className="container">
            <div className="image-container mt-5">
                <img className="home-banner" src={image} alt=""/>
                <div className="centered"> <span className="banner-text">Sports Mania</span> </div>
            </div>
            <div className="row">
            {
                teams.map(team=><Teams name={team} key={team.idTeam}></Teams>)
            }
            </div>
        </div>
    );
};

export default Home;