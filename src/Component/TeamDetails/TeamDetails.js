import React from 'react';
import './TeamDetails.css';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import image from '../../images/second-banner.jpg';
import maleImage from '../../images/male.png';
import femaleImage from '../../images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const TeamDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const {strCountry, strTeam, intFormedYear, strGender, strTeamBanner, strDescriptionEN, strWebsite, strTwitter, strYoutube} = details;
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
            .then(response => response.json())
            .then(data => {
                const { teams } = data;
                const team = teams[0];
                setDetails(team);
            })
    },[id])
    
    return (
        <div className="container  justify-content-center">
            <div className="image-container  mt-5">
                {
                    strTeamBanner === null || "" ? <img className="home-banner" src={image} alt=""/> : <img className="home-banner" src={strTeamBanner} alt=""/>
                }
                <div className="centered"><img className="logo" src={details.strTeamBadge} alt="" /></div>
            </div>
            <div className=" container-div d-flex mt-2 teamDetails">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mt-2">
                            <h5><FontAwesomeIcon icon={faBroadcastTower} /> {strTeam}</h5>
                            <h5><FontAwesomeIcon icon={faCheckCircle} /> Founded:{intFormedYear} </h5>
                            <h5><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h5>
                            <h5><FontAwesomeIcon icon={faFutbol} /> Sports Type: Football</h5>
                            <h5><FontAwesomeIcon icon={faUser} /> Gender : { strGender}</h5>
                        </div>
                        <div className="col-md-4">
                            {
                                strGender==='Male' ? <img className="teamImage g-5 mr-5 mb-2 mt-2" src={maleImage} alt=""></img> : <img className="teamImage g-5 mr-5 mb-2 mt-2" src={femaleImage} alt=""></img>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-2">
                <p>{strDescriptionEN}</p>
            </div>
            <div className="footer-section text-center justify-content-center ">

                <a className="m-3" target="_blank" href={`https://${strWebsite}`} rel="noreferrer">
                    <FontAwesomeIcon icon={faGlobe} size="2x"/>
                </a>

                <a className="m-3" target="_blank" href={`https://${strTwitter}`} rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="2x"/> 
                </a>

                <a className="m-3" target="_blank" href={`https://${strYoutube}`} rel="noreferrer">
                    <FontAwesomeIcon icon={faYoutube} size="2x"/>
                </a>

            </div>
        </div>
    );
};

export default TeamDetails;