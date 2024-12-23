import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-100">
      <Header isFixed={true} />
      
      <main className="flex-grow container mx-auto px-4 py-8 pt-[180px]">
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 hover:opacity-70 transition-opacity"
        >
          ← Назад
        </button>

        <div className="max-w-md mx-auto text-center">
          <h1 className="text-3xl mb-8">Личный кабинет</h1>
          
          <h2 className="mb-8">Войти/зарегистрироваться</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-300"
              required
            />
            
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border border-gray-300"
              required
            />

            <button 
              type="submit"
              className="w-full bg-black text-white py-4 hover:bg-gray-900 transition-colors"
            >
              Войти
            </button>

            <button 
              type="button"
              onClick={() => navigate('/register')}
              className="w-full py-4 border border-black hover:bg-gray-100 transition-colors"
            >
              Зарегистрироваться
            </button>

            <div className="text-center">
              <button 
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-gray-500 hover:text-black transition-colors"
              >
                Забыли пароль?
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AuthPage; 