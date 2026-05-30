import './Login.css'


const Login = () => {
    return (
        <div className="login-page">
            <div className="login-form">
                <h1>Sign in.</h1>
                <form>
                    <h4>Email</h4>
                    <textarea type="email" placeholder="Email" />
                    <h4>Password</h4>
                    <textarea type="password" placeholder="Password" />
                    <button id="signin-btn" type="submit">Sign In</button>
                </form>

                <h5>Don't have an account? <a href="/signup"><u>Sign up</u></a></h5>
            </div>
        </div>
    )
}

export default Login