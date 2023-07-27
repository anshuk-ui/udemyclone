import React from "react";

import {Button, Card} from "react-bootstrap";

const CardItemComponent = (props) =>{

    const addItem = () =>{
        console.log(props.card);
    }

    return (
        <>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
            <Card>
                <Card.Img variant="top" src={props.card.imgurl}/>
                <Card.Body>
                    <Card.Title>{props.card.name}</Card.Title>
                    <Card.Text>
                        <strong>${props.card.price}</strong>
                    </Card.Text>
                    <Button variant="success" onClick={addItem}>Add</Button>
                </Card.Body>
            </Card>
        </div>
    </>
    );
};

export default CardItemComponent;