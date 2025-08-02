export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Mi App</h3>
            <p className="text-gray-400 text-sm">
              Una aplicación moderna construida con Next.js y TypeScript.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/products" className="hover:text-white">Catálogo</a></li>
              <li><a href="/products" className="hover:text-white">Ofertas</a></li>
              <li><a href="/products" className="hover:text-white">Nuevos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Acerca de</a></li>
              <li><a href="#" className="hover:text-white">Contacto</a></li>
              <li><a href="#" className="hover:text-white">Carrera</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Ayuda</a></li>
              <li><a href="#" className="hover:text-white">Términos</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Mi App. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
