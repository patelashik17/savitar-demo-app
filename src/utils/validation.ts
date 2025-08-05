export const loginValidate = (name: string, value: string): string => {
    switch (name) {
      case 'email':
        return !/^\S+@\S+\.\S+$/.test(value) ? 'Please enter valid email' : '';
      case 'password':
         return value.trim() === '' ? 'Password is required' :
             value.length < 6 ? 'Password must be at least 6 characters' : '';
      default:
        return '';
    }
};

 export const registerValidate = (name: string, value: string, form: {password: string}): string => {
    switch (name) {
      case 'name':
        return value.trim() === '' ? 'Full name is required' : '';
      case 'email':
        return !/^\S+@\S+\.\S+$/.test(value) ? 'Please enter valid email' : '';
      case 'password':
         return value.trim() === '' ? 'Password is required' :
             value.length < 6 ? 'Password must be at least 6 characters' : '';
      case 'confirmPassword':
        return value !== form.password ? 'Passwords do not match' : '';
      default:
        return '';
    }
  };