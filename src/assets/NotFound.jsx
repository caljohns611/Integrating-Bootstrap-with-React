import React from 'react';
import { Container, Row, Col, Button, Image, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import notFoundImage from '../assets/not-found-image.jpg';

const NotFound = () => {
    return (
        <div className='not-found-page' style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            <Container className='d-flex flex-column justify-content-center align-item-center py-5'>
                <Row className='text-center'>
                    <Col>
                        <h1 className='display-4 text-danger'>Page not found</h1>
                        <p className='lead text-muted'>
                            The page you're looking for doesn't exist.
                        </p>
                    </Col>
                </Row>
                <Row className='mb-4'>
                    <Col>
                        <Image src={notFoundImage} alt='Page not found' fluid style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Nav.Link as={NavLink} to='../assets/HomePage.jsx' exact>
                            <Button varient='primary' size='lg'>
                                Go back to Homepage
                            </Button>
                        </Nav.Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;