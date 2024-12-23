import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-100 overflow-x-hidden">
      <Header isFixed={true} />
      
      <main className="flex-grow container mx-auto px-4 py-8 pt-[180px]">
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 hover:opacity-70 transition-opacity"
        >
          ← Назад
        </button>

        <div className="max-w-md mx-auto text-center">
          <h1 className="text-3xl mb-8">Регистрация</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300"
              required
            />
            
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300"
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Подтвердите пароль"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300"
              required
            />

            <button 
              type="submit"
              className="w-full bg-black text-white py-4 hover:bg-gray-900 transition-colors"
            >
              Зарегистрироваться
            </button>

            <div className="text-center">
              <button 
                type="button"
                onClick={() => navigate('/login')}
                className="text-gray-500 hover:text-black transition-colors"
              >
                Уже есть аккаунт? Войти
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RegisterPage; 