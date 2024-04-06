import React from 'react'

function AvailableCar() {
    const cars = [
        { id: 1, model: 'Toyota Camry', rent: '$50' },
        { id: 2, model: 'Honda Civic', rent: '$45' },
        // Add more cars as needed
      ];
  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Available Cars</h1>
      {cars.map((car) => (
        <div key={car.id} className="bg-white p-4 rounded shadow-md mb-4">
          <p className="text-lg font-semibold">{car.model}</p>
          <p className="text-gray-500">Rent: {car.rent+'/hour'}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
            Rent Now
          </button>
        </div>
      ))}
    </div>
  )
}

export default AvailableCar