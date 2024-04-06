import React from 'react'

function History() {
    const carHistory = [
        { id: 1, carName: 'Toyota Camry', rentDate: '2023-05-10', paymentReceived: '$200' },
        { id: 2, carName: 'Honda Civic', rentDate: '2023-05-15', paymentReceived: '$180' },
        // Add more history entries as needed
      ];
  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Car Rental History</h1>
      {carHistory.map((history) => (
        <div
          key={history.id}
          className="bg-white p-4 rounded shadow-md mb-4"
        >
          <p className="text-lg font-semibold">{history.carName}</p>
          <p className="text-gray-500">Rented on {history.rentDate}</p>
          <p className="text-green-500">Payment Received: {history.paymentReceived}</p>
        </div>
      ))}
    </div>
  )
}

export default History