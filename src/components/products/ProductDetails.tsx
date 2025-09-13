import Button from '@/components/ui/Button';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  features: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
}

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Imagen del producto */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-lg shadow-md"
          onError={(e) => {
            e.currentTarget.src = '/images/placeholder.jpg';
          }}
        />
      </div>
      
      {/* Información del producto */}
      <div className="space-y-6">
        <div>
          <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">
            {product.name}
          </h1>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-lg ${
                    i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  ⭐
                </span>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {product.rating} ({product.reviews} reseñas)
            </span>
          </div>
        </div>
        
        <div>
          <span className="text-3xl font-bold text-green-600">
            ${product.price}
          </span>
          <div className="mt-2">
            {product.inStock ? (
              <span className="text-green-600 text-sm">✅ En stock</span>
            ) : (
              <span className="text-red-600 text-sm">❌ Agotado</span>
            )}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Descripción
          </h3>
          <p className="text-gray-600">{product.description}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Características
          </h3>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex space-x-4">
          <Button
            disabled={!product.inStock}
            className="flex-1"
            onClick={() => console.log('Added to cart:', product.id)}
          >
            {product.inStock ? 'Agregar al Carrito' : 'Agotado'}
          </Button>
          <Button
            variant="secondary"
            onClick={() => console.log('Added to favorites:', product.id)}
          >
            ❤️ Favoritos
          </Button>
        </div>
      </div>
    </div>
  );
}
