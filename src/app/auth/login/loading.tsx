export default function LoginLoading() {
  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mx-auto w-3/4"></div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-10 bg-gray-300 rounded"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-10 bg-gray-300 rounded"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-10 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}
