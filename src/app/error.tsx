'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error occurred:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
        Something went wrong
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={reset}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
        >
          Try again
        </Button>
        <Button
          onClick={() => window.location.href = '/'}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-all"
        >
          Go to homepage
        </Button>
      </div>
    </div>
  );
}