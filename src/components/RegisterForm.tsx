import { useState, ChangeEvent, FormEvent, FocusEvent } from 'react';
import '../styles/form.css';
import { registerValidate } from '../utils/validation';

interface FormState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function RegisterForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = registerValidate(name, value, form);
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
      const error = registerValidate(name, value, form);
      if (error) newErrors[name] = error;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Registered successfully!');
      const data={
        name: form.name,
        email: form.email,
        password: form.password
      }
      console.log("Registration data",data);
      setForm({
        name:'',
        email: '',
        password: '',
        confirmPassword:''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{textAlign:'center'}}>Register</h2>
      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.name && <span className="error">{errors.name}</span>}

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
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.password && <span className="error">{errors.password}</span>}

      <input
        name="confirmPassword"
        placeholder="Confirm Password"
        type="password"
        value={form.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

      <button type="submit">Register</button>
    </form>
  );
}
