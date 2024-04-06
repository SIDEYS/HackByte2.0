import React,{ useState } from 'react'
import Navbar from './Navbar.jsx';

function GOR() {
    // const [formData, setFormData] = useState({
    //     carType: '',
    //     carModel: '',
    //     carNumber:'',
    //     startTime: '',
    //     endTime: '',
    //     insurance:''
    //   });
    const [carType , setCarType] = useState("");
    const [carModel , setCarModel] = useState("");
    const [carNumber , setCarNumber] = useState("");
    const [startTime , setStartTime] = useState("");
    const [endTime , setEndTime] = useState("");
    //   const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    //   };
      const handleSubmit = (e) => {
        e.preventDefault();
        // Implement registration logic here (e.g., API calls, validation)
        console.log('Form data submitted', formData);
      };

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
    <>
        <Navbar/>
        <div className="register-container" style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2 className='center text-2xl p-4'>REGISTER YOUR CAR</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
  <select
    id="cartype"
    name="cartype"
    value={carType}
    onChange={(e)=> setCarType(e.target.value)}
    style={{
      width: '100%',
      padding: '10px',
      margin: '5px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
    }}
  >
    <option value="">Select Car Type</option>
    <option value="mini">Mini</option>
    <option value="sedan">Sedan</option>
    <option value="SUV">SUV</option>
  </select>
</div>
        <div className="form-group">
        <input 
            type="text" 
            id="carmodel" 
            name="carmodel" 
            placeholder="Enter Car Model" 
            value={carModel} 
            onChange={(e)=> setCarModel(e.target.value)}
            style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div className="form-group">
        <input 
            type="text" 
            id="carnumber" 
            name="carnumber" 
            placeholder="Enter Car Number" 
            value={carNumber} 
            onChange={(e)=> setCarNumber(e.target.value)}
            style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div className="form-group">
        <label>Start Time</label>
        <input 
            type="time" 
            id="starttime" 
            name="starttime" 
            placeholder="Enter Start Time" 
            value={startTime} 
            onChange={(e)=> setStartTime(e.target.value)} 
            style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div className="form-group">
        <label>End Time</label>
        <input 
            type="time" 
            id="endtime" 
            name="endtime" 
            placeholder="Enter Car Model" 
            value={endTime} 
            onChange={(e)=> setEndTime(e.target.value)}
            style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        {/* <div className="form-group">
        <input 
            type="text" 
            id="insurance" 
            name="insurance" 
            placeholder="Is you car insured ?" 
            value={formData.insurance} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div> */}
        <button type="submit" onClick={sendLocationToServer} style={{ 
            width: '100%', 
            padding: '10px', 
            backgroundColor: '#008080', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            margin: '10px 0', 
            cursor: 'pointer',
            fontSize: '16px'
          }}>Submit</button>
        </form>
        </div>

        
    </>
    
  )
}

export default GOR