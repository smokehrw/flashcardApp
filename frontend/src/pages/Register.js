import './Login.css'


const Register = () => {
    return (
        <div className="login-page">
            <div className="login-form">
                <h1>Create a new Account.</h1>
                <form>
                    <h4>Email</h4>
                    <textarea type="email" placeholder="Email" />
                    <h4>Password</h4>
                    <textarea type="password" placeholder="Password" />
                    <button id="signin-btn" type="submit">Sign Up</button>
                </form>

                <h5>Already have an account? <a href="/login"><u>Sign in</u></a></h5>
            </div>
        </div>
    )
}

export default Register