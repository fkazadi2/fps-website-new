import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="max-w-[1800px] mx-auto px-8">
        <nav className="flex items-center space-x-2 text-sm">
          {/* Accueil */}
          <Link 
            href="/" 
            className="flex items-center text-gray-500 hover:text-[#035fa9] transition-colors"
          >
            <HomeIcon className="h-4 w-4 mr-1" />
            <span>Accueil</span>
          </Link>
          
          {/* Items du fil d'Ariane */}
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-gray-400 mx-2" />
              {item.href && index < items.length - 1 ? (
                <Link 
                  href={item.href}
                  className="text-gray-500 hover:text-[#035fa9] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#035fa9] font-semibold">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
} 