import { useState, ChangeEvent, FormEvent, FocusEvent } from 'react';
import '../styles/form.css';
import { loginValidate } from '../utils/validation';

interface LoginFormState {
  email: string;
  password: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function LoginForm() {
  const [form, setForm] = useState<LoginFormState>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = loginValidate(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};
    Object.entries(form).forEach(([name, value]) => {
      const error = loginValidate(name, value);
      if (error) newErrors[name] = error;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Login successful!');
      const data={
        email:form.email,
        password:form.password
      }
      console.log("login data",data)
      setForm({
        email: '',
        password: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{textAlign:"center"}}>Login</h2>
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && <span className="error">{errors.email}</span>}

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.password && <span className="error">{errors.password}</span>}

      <button type="submit">Login</button>
    </form>
  );
}
