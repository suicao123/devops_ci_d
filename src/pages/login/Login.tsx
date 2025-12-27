import "../../styles/Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Please sign in to continue</p>

        <div className="login-field">
          <label>Username</label>
          <input type="text" placeholder="Enter your username" />
        </div>

        <div className="login-field">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <button className="login-button">Sign In</button>
      </div>
    </div>
  );
};

export default Login;
