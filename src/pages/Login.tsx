
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='container'>
      <LoginForm />
      <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
    </div>
  );
}
