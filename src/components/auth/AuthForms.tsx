import { useState } from 'react';
import {login, signup} from "@/lib/api"
import { useAuth } from '@/context/AuthContext';



type LoginFormProps = {
  setShowLoginModal?: (show: boolean) => void;
}
export const LoginForm = ({setShowLoginModal}:LoginFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const {setUser} = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try{
      const res = await login({username: formData.email, password: formData.password});
      console.log('Login successful:', res.user);
      setUser(res.user)
      setShowLoginModal?.(false);
    }
    catch (error){
      console.error('Login failed:', error);
      
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
      >
        Log in
      </button>
    </form>
  );
};

type SignupFormProps = {
  setShowSignupModal?: (show: boolean) => void; }

export const SignupForm = ({setShowSignupModal}:SignupFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  });
  const {setUser} = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await signup(formData);
      console.log('Signup successful:', res);
      const loginRes = await login({username: formData.email, password: formData.password});
      console.log('Sign up and Login successful:', loginRes.user);
      setUser(loginRes.user)
      setShowSignupModal?.(false);
    }
    catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Create a password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
      >
        Continue
      </button>
    </form>
  );
}; 