import RegisterForm from '@/components/auth/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Crear Cuenta</h1>
        <p className="mt-2 text-gray-600">
          Regístrate para comenzar a usar la aplicación
        </p>
      </div>
      <RegisterForm />
    </div>
  );
}
