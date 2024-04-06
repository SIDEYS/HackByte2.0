import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import register from '../assets/register.jpg';
const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement registration logic here (e.g., API calls, validation)
    console.log('Form data submitted', formData);
  };

  return (
    <div className="register-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f2f2f2', overflow: 'hidden' }}>
      <div style={{ width: '50%', maxWidth: '400px', margin: 'auto', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#008080', fontSize: '24px' }}>REGISTER</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter Full Name" 
              value={formData.name} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #008080' }}
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              id="mobileNumber" 
              name="mobileNumber" 
              placeholder="Mobile Number" 
              value={formData.mobileNumber} 
              onChange={handleChange}  
              style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #008080' }}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #008080' }}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #008080' }}
            />
          </div>
          <button type="submit" style={{ 
            width: '100%', 
            padding: '10px', 
            backgroundColor: '#008080', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            margin: '10px 0', 
            cursor: 'pointer',
            fontSize: '16px'
          }}>Register</button>
        </form>
        <p style={{ textAlign: 'center', fontSize: '14px', color: '#555', marginTop: '20px' }}>Already a member? <span onClick={() => { navigate('/') }} style={{ color: '#008080', textDecoration: 'underline', cursor:'pointer'}}>Login</span></p>
      </div>
      <div style={{ width: '50%', overflow: 'hidden', display: 'flex', justifyContent: 'flex-end', paddingRight: '60px' }}>
        <img src={register} alt="Registration" style={{ width: '80%', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} />
      </div>
    </div>
  );
};

export default Register;