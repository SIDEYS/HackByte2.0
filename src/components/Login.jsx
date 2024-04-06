import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here (e.g., API calls, authentication)
        console.log('User logged in');
        navigate('/home');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f2f2f2' }}>
            <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#000' }}>LOGIN</h2>
                <input 
                    type="text" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <button 
                    onClick={handleLogin} 
                    style={{ 
                        width: '100%', 
                        padding: '10px', 
                        backgroundColor: '#008080', 
                        color: '#fff', 
                        border: 'none', 
                        borderRadius: '5px', 
                        margin: '10px 0', 
                        cursor: 'pointer' 
                    }}
                >
                    Login
                </button>
                <p style={{ textAlign: 'center', fontSize: '14px', color: '#555' }}>
                    Not Registered? <span onClick={() => navigate('/register')} style={{ color: '#008080', textDecoration: 'underline', cursor: 'pointer' }}>Register</span>
                </p>
            </div>
        </div>
    );
};

export default LoginComponent;