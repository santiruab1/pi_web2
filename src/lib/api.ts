const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

interface RequestOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
}

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  private async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    if (options.body) {
      config.body = JSON.stringify(options.body);
    }

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Métodos HTTP
  async get<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET', headers });
  }

  async post<T>(endpoint: string, body: any, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, { method: 'POST', body, headers });
  }

  async put<T>(endpoint: string, body: any, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, { method: 'PUT', body, headers });
  }

  async delete<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE', headers });
  }
}

// Instancia por defecto
export const apiClient = new ApiClient();

// Funciones específicas para endpoints
export const api = {
  // Usuarios
  users: {
    getAll: () => apiClient.get('/users'),
    getById: (id: string) => apiClient.get(`/users/${id}`),
    create: (userData: any) => apiClient.post('/users', userData),
    update: (id: string, userData: any) => apiClient.put(`/users/${id}`, userData),
    delete: (id: string) => apiClient.delete(`/users/${id}`),
  },
  
  // Productos
  products: {
    getAll: () => apiClient.get('/products'),
    getById: (id: string) => apiClient.get(`/products/${id}`),
    create: (productData: any) => apiClient.post('/products', productData),
    update: (id: string, productData: any) => apiClient.put(`/products/${id}`, productData),
    delete: (id: string) => apiClient.delete(`/products/${id}`),
  },
  
  // Autenticación
  auth: {
    login: (credentials: { email: string; password: string }) => 
      apiClient.post('/auth/login', credentials),
    register: (userData: any) => apiClient.post('/auth/register', userData),
    logout: () => apiClient.post('/auth/logout', {}),
    refreshToken: () => apiClient.post('/auth/refresh', {}),
  },
};

export default apiClient;
