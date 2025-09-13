export default function AnalyticsLoading() {
  return (
    <div>
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded mb-6 w-1/4"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-300 rounded mb-4 w-1/3"></div>
            <div className="h-64 bg-gray-300 rounded"></div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-300 rounded mb-4 w-1/3"></div>
            <div className="h-64 bg-gray-300 rounded"></div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-300 rounded mb-4 w-1/3"></div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-300 rounded mb-4 w-1/3"></div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/6"></div>
                </div>
                <div className="h-2 bg-gray-300 rounded-full"></div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/6"></div>
                </div>
                <div className="h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
