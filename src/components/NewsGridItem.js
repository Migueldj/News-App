import React from 'react';
import { Card } from 'react-bootstrap';

export const NewsGridItem = ( {description, title, date, image, url} ) => {

    const newImage = image && image.thumbnail.contentUrl; //This is due to the "undefined" error of the image property
    
    return (
        <Card style={{ width: '20rem'}}>
            <a href={url}>
            <Card.Img variant="top" src={newImage} alt=""/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {`${description.substr(0,120)}...`}
                </Card.Text>
                <Card.Subtitle>
                    <img id="logo" src="https://preview.pixlr.com/images/800wm/100/1/1001503340.jpg" alt=""></img>
                    { date.substr(0,10) }
                </Card.Subtitle>
            </Card.Body>
            </a>
        </Card>
    )
}

