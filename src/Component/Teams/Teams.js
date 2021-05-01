import React from 'react';
import './Teams.css';
import { useHistory } from 'react-router';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Teams = (props) => {
    const { idTeam, strTeam, strTeamBadge } = props.name;
    const history = useHistory();

    const showDetails = id => {
        const url = `teamDetails/${id}`;
        history.push(url);
    }

    return (
        <div className="col-md-3 align-items-center mt-5">
            <div className="d-flex justify-content-around">
            <Card id="card" className="">
                <Card.Img id="team-image" variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>Sports type: Football</Card.Text>
                    <Button id="teamBtn" onClick={() => showDetails(idTeam)}>Explore <FontAwesomeIcon icon={faArrowRight} /> </Button>
                </Card.Body>
            </Card>
            </div>

        </div>

    );
};

export default Teams;