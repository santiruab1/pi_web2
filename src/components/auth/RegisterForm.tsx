'use client';

import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    console.log('Register attempt:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Nombre"
          type="text"
          placeholder="Juan"
          value={formData.firstName}
          onChange={(e) => handleChange(e)}
          required
          error={errors.firstName}
          id="firstName"
        />
        
        <Input
          label="Apellido"
          type="text"
          placeholder="Pérez"
          value={formData.lastName}
          onChange={(e) => handleChange(e)}
          required
          error={errors.lastName}
          id="lastName"
        />
      </div>
      
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
      
      <Input
        label="Confirmar Contraseña"
        type="password"
        placeholder="Confirma tu contraseña"
        value={formData.confirmPassword}
        onChange={(e) => handleChange(e)}
        required
        error={errors.confirmPassword}
        id="confirmPassword"
      />
      
      <div className="flex items-center">
        <input
          type="checkbox"
          className="rounded border-gray-300"
          required
          title="Acepto los términos y condiciones"
        />
        <span className="ml-2 text-sm text-gray-600">
          Acepto los{' '}
          <a href="#" className="text-blue-600 hover:text-blue-500">
            términos y condiciones
          </a>
        </span>
      </div>
      
      <Button type="submit" className="w-full">
        Crear Cuenta
      </Button>
      
      <p className="text-center text-sm text-gray-600">
        ¿Ya tienes cuenta?{' '}
        <a href="/auth/login" className="text-blue-600 hover:text-blue-500">
          Inicia sesión aquí
        </a>
      </p>
    </form>
  );
}
