import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md"
          onError={(e) => {
            e.currentTarget.src = '/images/placeholder.jpg';
          }}
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <span className="text-lg font-bold text-green-600">
            ${product.price}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex space-x-2 pt-2">
          <Link href={`/products/${product.id}`} className="flex-1">
            <Button variant="primary" className="w-full">
              Ver Detalles
            </Button>
          </Link>
          <Button
            variant="secondary"
            onClick={() => console.log('Added to cart:', product.id)}
          >
            🛒
          </Button>
        </div>
      </div>
    </Card>
  );
}
