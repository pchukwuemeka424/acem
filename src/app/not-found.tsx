'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="mb-8">
        <h1 className="text-6xl md:text-8xl font-bold text-blue-600 mb-2">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" passHref>
          <Button 
            leftIcon={<ArrowLeft className="w-4 h-4" />}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Back to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}