import React, { Component } from 'react';
import { Container, Alert, Row, Col } from 'react-bootstrap';
import WeatherCard from './WeatherCard';

class HomePage extends Component {
  state = {
    city: '',
    weatherData: null,
    error: null,
    savedCards: JSON.parse(sessionStorage.getItem('savedCards')) || [],
  };

  API_KEY = '84489bd4e6fdb3468bf551b000102b65';
  API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  handleCityChange = (event) => {
    this.setState({ city: event.target.value });
  };

  fetchWeatherData = () => {
    const { city } = this.state;
    fetch(`${this.API_URL}?q=${city}&appid=${this.API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          this.setState({ weatherData: data, error: null });
        } else {
          this.setState({ weatherData: null, error: data.message });
        }
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        this.setState({
          weatherData: null,
          error: 'An error occurred while fetching weather data.',
        });
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchWeatherData();
  };

  handleSaveCard = () => {
    const { weatherData, savedCards } = this.state;
    const newSavedCards = [...savedCards, weatherData];
    this.setState({ savedCards: newSavedCards });
    sessionStorage.setItem('savedCards', JSON.stringify(newSavedCards));
  };

  render() {
    const { city, weatherData, error, savedCards } = this.state;

    return (
      <div>
        <Container fluid className="px-4">
          <Row className="justify-content-center mt-4">
            <Col md={6}>
              <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter city"
                    value={city}
                    onChange={this.handleCityChange}
                  />
                  <button className="btn btn-primary" type="submit">
                    Search
                  </button>
                </div>
              </form>
              {error && <Alert variant="danger">{error}</Alert>}
              {weatherData && (
                <WeatherCard
                  weatherData={weatherData}
                  onSave={this.handleSaveCard}
                />
              )}
            </Col>
          </Row>
          <Row>
            {savedCards.map((card, index) => (
              <Col key={index} md={4}>
                <WeatherCard weatherData={card} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
