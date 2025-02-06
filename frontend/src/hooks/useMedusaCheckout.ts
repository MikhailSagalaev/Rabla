import { useMedusaCart } from '../contexts/MedusaContext';

export const useMedusaCheckout = () => {
  const { data: cart } = useMedusaCart();

  const handlePayment = async (session: any) => {
    // Логика оплаты
  };

  return { handlePayment };
}; 