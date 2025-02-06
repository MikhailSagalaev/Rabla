import { render, screen, fireEvent } from '@testing-library/react';
import CheckoutPage from '../CheckoutPage';

describe('CheckoutPage', () => {
  test('shows validation errors on empty submit', async () => {
    render(<CheckoutPage />);
    
    fireEvent.click(screen.getByText('Оформить заказ'));
    
    expect(await screen.findByText('Обязательное поле')).toBeInTheDocument();
    expect(screen.getAllByText('Обязательное поле').length).toBeGreaterThan(3);
  });

  test('validates phone format', async () => {
    render(<CheckoutPage />);
    
    fireEvent.input(screen.getByPlaceholderText('КОНТАКТНЫЙ НОМЕР ТЕЛЕФОНА'), {
      target: { value: 'invalid-phone' }
    });
    
    fireEvent.click(screen.getByText('Оформить заказ'));
    
    expect(await screen.findByText('Некорректный номер телефона')).toBeInTheDocument();
  });
}); 