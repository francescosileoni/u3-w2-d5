import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { city } = useParams();

  return (
    <div>
      <h1>Details Page</h1>
      <p>City: {city}</p>
    </div>
  );
};

export default DetailsPage;
