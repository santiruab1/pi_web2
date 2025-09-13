import Link from 'next/link';

export default function Sidebar() {
  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/dashboard/analytics', label: 'Análisis', icon: '📈' },
    { href: '/dashboard/settings', label: 'Configuración', icon: '⚙️' },
    { href: '/products', label: 'Productos', icon: '📦' },
    { href: '/auth/login', label: 'Cerrar Sesión', icon: '🚪' },
  ];

  return (
    <aside className="w-64 bg-white shadow-md min-h-screen">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Menú</h2>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
