import { useState } from 'react'

import './Login.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();


    };

    return (
        <div className="login-page">
            <div className="login-form">
                <h1>Sign in.</h1>
                <form onSubmit={handleSubmit}>
                    <h4>Email</h4>
                    <textarea
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h4>Password</h4>
                    <textarea
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button id="signin-btn" type="submit">Sign In</button>
                </form>

                <h5>Don't have an account? <a href="/signup"><u>Sign up</u></a></h5>
            </div>
        </div>
    )
}

export default Login