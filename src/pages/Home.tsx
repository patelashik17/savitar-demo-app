import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Savitar App</h1>
      <p>Please login or sign up to continue</p>
      <div className="home-buttons">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button>Sign Up</button></Link>
      </div>
    </div>
  );
}
