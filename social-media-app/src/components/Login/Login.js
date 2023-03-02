import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';


import './Login.css'

const Login = () => {
  const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

  const handleSubmit =  (e) => {
    e.preventDefault();

    fetch('http://127.0.0.1:8080/api/auth/login', {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({email, password})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
     
    setPassword("");
    setEmail("");
    navigate("/dashboard")
  };

	return (
		<div className='login-wrapper'>
			<form onSubmit={handleSubmit}>
				<label>
					<p>Email</p>
					<input type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
				</label>
				<label>
					<p>Password</p>
					<input type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
				</label>
        <div>
        <button type='submit'>Log in</button>
        </div>			
			</form>
		</div>
	);
};

export default Login;
