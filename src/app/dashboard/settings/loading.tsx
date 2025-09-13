export default function SettingsLoading() {
  return (
    <div>
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded mb-6 w-1/3"></div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-300 rounded mb-4 w-1/4"></div>
            <div className="space-y-4">
              <div>
                <div className="h-4 bg-gray-300 rounded mb-1 w-1/6"></div>
                <div className="h-10 bg-gray-300 rounded"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-300 rounded mb-1 w-1/6"></div>
                <div className="h-10 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-300 rounded mb-4 w-1/4"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                <div className="h-6 w-6 bg-gray-300 rounded"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                <div className="h-6 w-6 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
