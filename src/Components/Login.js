import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='login'>
      <img className='imgLogo' src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pj6Dwf_F7ucAjn7hRXhZsKvytaqdRZtPVA&s" alt='google-logo' />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign-in</button>
      </form>
    </div>
  );
};

export default Login;   



























// import React, { useState } from 'react';
// import { Link} from "react-router-dom";
// import "./home.css";

// function Login() {
    
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     return (
//         <div className='login'>
//             <Link to='/'>
//                 <img
//                     className="login__logo"
//                     src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
//                 />
//             </Link>

//             <div className='login__container'>
//                 <h1>Sign-in</h1>

//                 <form>
//                     <h5>E-mail</h5>
//                     <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

//                     <h5>Password</h5>
//                     <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

//                     <button type='submit' className='login__signInButton'>Sign In</button>
//                 </form>

//                 <p>
//                     By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale. Please
//                     see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
//                 </p>

//                 <button className='login__registerButton'>Create your Amazon Account</button>
//             </div>
//         </div>
//     )
// }

// export default Login

