import ProductCard from '@/components/products/ProductCard';

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: 'Smartphone Pro',
      price: 699,
      category: 'Electrónicos',
      image: '/images/smartphone.jpg',
      description: 'El último smartphone con características avanzadas'
    },
    {
      id: 2,
      name: 'Laptop Gaming',
      price: 1299,
      category: 'Computadoras',
      image: '/images/laptop.jpg',
      description: 'Laptop potente para gaming y trabajo profesional'
    },
    {
      id: 3,
      name: 'Auriculares Bluetooth',
      price: 199,
      category: 'Audio',
      image: '/images/headphones.jpg',
      description: 'Auriculares inalámbricos con cancelación de ruido'
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Productos</h1>
        <p className="text-gray-600">
          Descubre nuestra amplia gama de productos de alta calidad
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filtros */}
        <aside className="w-full md:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Filtros</h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoría
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="">Todas las categorías</option>
                <option value="electronics">Electrónicos</option>
                <option value="computers">Computadoras</option>
                <option value="audio">Audio</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Precio máximo
              </label>
              <input
                type="range"
                min="0"
                max="2000"
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>$0</span>
                <span>$2000</span>
              </div>
            </div>
          </div>
        </aside>
        
        {/* Lista de productos */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
