const API_URL = process.env.REACT_APP_API_URL;

export const api = {
  async getProducts() {
    const response = await fetch(`${API_URL}/api/products`);
    return response.json();
  },
  
  async getProduct(id: string) {
    const response = await fetch(`${API_URL}/api/products/${id}`);
    return response.json();
  },
  
  async addToCart(productId: string) {
    const response = await fetch(`${API_URL}/api/cart`, {
      method: 'POST',
      body: JSON.stringify({ productId }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  }
}; 