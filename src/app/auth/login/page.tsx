import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Iniciar Sesión</h1>
        <p className="mt-2 text-gray-600">
          Ingresa a tu cuenta para continuar
        </p>
      </div>
      <LoginForm />
    </div>
  );
}
