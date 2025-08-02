import ProductDetails from '@/components/products/ProductDetails';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  // En una aplicación real, aquí harías una llamada a la API
  const product = {
    id: params.id,
    name: 'Smartphone Pro',
    price: 699,
    category: 'Electrónicos',
    image: '/images/smartphone.jpg',
    description: 'El último smartphone con características avanzadas y diseño premium.',
    features: [
      'Pantalla OLED de 6.1 pulgadas',
      'Cámara triple de 48MP',
      'Batería de larga duración',
      'Resistente al agua IP68',
      '256GB de almacenamiento'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 128
  };

  return (
    <div>
      <nav className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <a href="/products" className="hover:text-gray-700">
              Productos
            </a>
          </li>
          <li>/</li>
          <li className="text-gray-900">{product.name}</li>
        </ol>
      </nav>
      
      <ProductDetails product={product} />
    </div>
  );
}
