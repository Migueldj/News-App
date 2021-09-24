import React from 'react';
import { Container, Row} from 'react-bootstrap';
import { NewsGridItem } from './NewsGridItem';

export const NewsGrid = ( {category, news} ) => {
    
    return (
        <>  
            <h1>{category}</h1>
            <Container fluid className="animate__animated animate__fadeInUp">
                <Row xs={2} md={4} lg={6}>
                    {
                        news.map( report => 
                            <NewsGridItem
                                key = {report.title}
                                {...report}
                            />
                        )
                    }
                </Row>  
            </Container>
            
        </>
    )
}
