'use client';

import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de validación y envío
    console.log('Login attempt:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Email"
        type="email"
        placeholder="tu@email.com"
        value={formData.email}
        onChange={(e) => handleChange(e)}
        required
        error={errors.email}
        id="email"
      />
      
      <Input
        label="Contraseña"
        type="password"
        placeholder="Tu contraseña"
        value={formData.password}
        onChange={(e) => handleChange(e)}
        required
        error={errors.password}
        id="password"
      />
      
      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="rounded border-gray-300"
            title="Recordarme"
          />
          <span className="ml-2 text-sm text-gray-600">Recordarme</span>
        </label>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
          ¿Olvidaste tu contraseña?
        </a>
      </div>
      
      <Button type="submit" className="w-full">
        Iniciar Sesión
      </Button>
      
      <p className="text-center text-sm text-gray-600">
        ¿No tienes cuenta?{' '}
        <a href="/auth/register" className="text-blue-600 hover:text-blue-500">
          Regístrate aquí
        </a>
      </p>
    </form>
  );
}
