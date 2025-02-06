import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      "cart.title": "Корзина",
      "checkout.title": "Оформление заказа",
      "product.price": "Цена",
      // ... остальные переводы
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "ru"
});

export default i18n; 