export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Usuarios</h2>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
          <p className="text-gray-600 text-sm">Total de usuarios registrados</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Productos</h2>
          <p className="text-3xl font-bold text-green-600">567</p>
          <p className="text-gray-600 text-sm">Productos en catálogo</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Ventas</h2>
          <p className="text-3xl font-bold text-purple-600">$12,345</p>
          <p className="text-gray-600 text-sm">Ventas del mes</p>
        </div>
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Actividad Reciente</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="font-medium">Nuevo usuario registrado</p>
            <p className="text-gray-600 text-sm">Hace 2 minutos</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <p className="font-medium">Producto actualizado</p>
            <p className="text-gray-600 text-sm">Hace 15 minutos</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <p className="font-medium">Nueva venta realizada</p>
            <p className="text-gray-600 text-sm">Hace 1 hora</p>
          </div>
        </div>
      </div>
    </div>
  );
}
