import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import './HomePage.css';
import welcomeImage from '../assets/welcome-image.jpg';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Card className="mb-4 p-4 shadow-lg" style={{ borderRadius: '10px', backgroundColor: '#f8f9fa' }}>
        <Card.Body>
          <Card.Title className="text-center" style={{ fontSize: '2rem', color: '#333' }}>
            Welcome to Our Shop!
          </Card.Title>
          <Card.Text className="text-center" style={{ color: '#555' }}>
            Explore our wide range of products. Great deals are waiting for you.
          </Card.Text>
          <div className="d-flex justify-content-center">
            <Button variant="primary" size="lg" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
              Shop Now
            </Button>
          </div>
        </Card.Body>
      </Card>
      <div className="text-center">
        <Image src={welcomeImage} alt="Welcome" fluid style={{ borderRadius: '10px' }} />
      </div>
    </div>
  );
};

export default HomePage;