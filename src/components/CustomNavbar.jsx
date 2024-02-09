import React, { useState } from 'react';
import { Navbar, Nav, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = ({ fetchWeather }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    fetchWeather(city);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Weather App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <InputGroup className="ms-auto">
          <FormControl
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button variant="outline-success" onClick={handleSearch}>
            Search
          </Button>
        </InputGroup>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
