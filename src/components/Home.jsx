import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Map from './Map.jsx'; 

const HomePage = () => {
    function sendLocationToServer() {
        navigator.geolocation.getCurrentPosition(async function(position) {
            const { latitude, longitude } = position.coords;
    console.log(position.coords);
            // Send location data to the server
            const response = await fetch('/getallcars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: 'user123', // Assuming you have a userId
                    latitude: latitude,
                    longitude: longitude
                })
            });
            const data = await response.json();
            console.log(data);
        }, function(error) {
            console.error('Error getting location:', error);
        });
    }
    
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar /> {/* Render the Navbar component */}
      <div className="container mx-auto p-4">
        <Map /> {/* Render the Map component */}
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
          Search Dropoff Location
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={sendLocationToServer}>
          Use Current Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
