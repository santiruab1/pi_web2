export default function AnalyticsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Análisis</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Visitantes</h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-500">Gráfico de visitantes</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Ventas por Mes</h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-500">Gráfico de ventas</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Top Productos</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Producto A</span>
              <span className="font-semibold">125 ventas</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Producto B</span>
              <span className="font-semibold">98 ventas</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Producto C</span>
              <span className="font-semibold">87 ventas</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Métricas Clave</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Tasa de conversión</span>
                <span className="text-sm font-semibold">3.4%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '34%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Retención de usuarios</span>
                <span className="text-sm font-semibold">68%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '68%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
