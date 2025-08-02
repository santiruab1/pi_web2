export default function ProductLoading() {
  return (
    <div>
      <nav className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <div className="animate-pulse h-4 bg-gray-300 rounded w-16"></div>
          </li>
          <li>/</li>
          <li>
            <div className="animate-pulse h-4 bg-gray-300 rounded w-24"></div>
          </li>
        </ol>
      </nav>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-300 rounded-lg"></div>
        </div>
        
        <div className="space-y-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-6"></div>
            <div className="h-12 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
