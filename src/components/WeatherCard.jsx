import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WeatherCard = ({ weatherData }) => {
  return (
    <Card className="text-center">
      {weatherData && (
        <Card.Body>
          <Card.Title>{weatherData.name}</Card.Title>
          <Card.Text>Temperature: {weatherData.main.temp}°C</Card.Text>
          <Card.Text>Max Temperature: {weatherData.main.temp_max}°C</Card.Text>
          <Card.Text>Min Temperature: {weatherData.main.temp_min}°C</Card.Text>
          <Card.Text>
            Description: {weatherData.weather[0].description}
          </Card.Text>
          <Button
            as={Link}
            to={`/details/${weatherData.name}`}
            variant="primary"
          >
            Details
          </Button>
        </Card.Body>
      )}
    </Card>
  );
};

export default WeatherCard;
