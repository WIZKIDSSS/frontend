import React, { useState } from 'react';
import {doLogin} from './auth/authindex';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // const [message, setMessage] = useState('');

    // const handleLogin = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await axios.post('http://127.0.0.1:5000/login', {
    //             username,
    //             password,
    //         });
    //         if (response.status === 200) {
    //             localStorage.setItem('access_token', response.data.access_token);
    //             setMessage('Login Successful');
    //             console.log(response.data.access_token);
    //             const redirectURL = response.data.redirect_url;
    //             window.location.href = redirectURL;
    //         }
    //     } catch (error) {
    //         setMessage('Invalid username or password');
    //     }
    // };

    async function handleLogin(ev) {
        ev.preventDefault();
        if (username === '' || password === '') {
          toast.error("All Fields must be filled")
        }
        else {
          const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username, password
            }),
          })
          const data = await response.json()
            if (data.token) {
              doLogin(data ,()=>{
                toast.success('login successful')
              });
              
              navigate("/user/home")
            } else {
              toast.error(data.message)
            }
          console.log(data)
        }
      }

    return (
        <div className="login-box">
            <h1 className="log">WizKids </h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" id="username" name="username" className="form-input" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" id="password" name="password" className="form-input" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="button-container">
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
}

