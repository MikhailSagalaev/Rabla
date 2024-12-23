import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

const ForgotPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email });
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
          <h1 className="text-3xl mb-8">Восстановление пароля</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-300"
              required
            />

            <button 
              type="submit"
              className="w-full bg-black text-white py-4 hover:bg-gray-900 transition-colors"
            >
              Восстановить пароль
            </button>

            <div className="text-center">
              <button 
                type="button"
                onClick={() => navigate('/login')}
                className="text-gray-500 hover:text-black transition-colors"
              >
                Вернуться к входу
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ForgotPasswordPage; 