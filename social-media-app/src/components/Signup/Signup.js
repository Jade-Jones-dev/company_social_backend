import React, {useState} from "react";
import "./Signup.css";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");


    const handleSubmit =  (e) => {
        e.preventDefault();
    
    
        const newUser = {
          name,
          password, 
          email,
        }
    
        fetch('http://127.0.0.1:8080/api/auth/signup', {
          method: "post",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(newUser)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
      
     
        setName("");
        setPassword("");
        setEmail("");
        setConfirmPassword("")
      };

	return (
		<div className='signup-wrapper'>
			<h1>Please sign up</h1>
			<form onSubmit={handleSubmit}>
				<label>
					<p>Name</p>
					<input type='text' value={name} onChange={(e) => setName(e.target.value)} />
				</label>
				<label>
					<p>Email</p>
					<input type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
				</label>
				<label>
					<p>Password:</p>
					<input type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
				</label>
				<label>
					<p>Confirm password</p>
					<input type='password' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
				</label>
                <div>
                <button type='submit'>Sign up</button>
                </div>
			</form>
		</div>
	);
};

export default Signup;
