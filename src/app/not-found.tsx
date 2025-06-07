import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="mb-8 text-gray-600 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you were looking for. It might have been removed, 
          renamed, or didn&apos;t exist in the first place.
        </p>
        <Link 
          href="/" 
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}