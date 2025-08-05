import RegisterForm from '../components/RegisterForm';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='container'>
      <RegisterForm />
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}
