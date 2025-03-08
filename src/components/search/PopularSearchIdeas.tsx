import Link from 'next/link';
import { Search } from 'lucide-react';

// Popular search categories based on gallery content
const popularSearches = [
  {
    id: 1,
    title: 'Little Beauty',
    query: 'littlebeauty'
  },
  {
    id: 2,
    title: 'Abstract Art',
    query: 'abstractart'
  },
  {
    id: 3,
    title: 'Artistic Expression',
    query: 'artisticexpression'
  },
  {
    id: 4,
    title: 'Dance',
    query: 'dance'
  },
  {
    id: 5,
    title: 'Modern Art',
    query: 'modernart'
  },
  {
    id: 6,
    title: 'Natural Beauty',
    query: 'naturalbeauty'
  }
];

const PopularSearchIdeas = () => {
  return (
    <div className="py-8 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-xl font-semibold text-center mb-6">Get inspired with popular ideas</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {popularSearches.map((item) => (
            <Link 
              href={`/search?q=${item.query}`} 
              key={item.id}
              className="group"
            >
              <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center text-center h-full shadow-sm hover:shadow-md transition-all hover:bg-red-50">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-3">
                  <Search size={18} className="text-red-500" />
                </div>
                <span className="font-medium text-gray-800">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <span className="text-sm text-gray-500">Popular now:</span>
          {['Happiness', 'Portrait', 'Creativity', 'Innocence', 'Artistic', 'Joy'].map((tag, index) => (
            <Link 
              href={`/search?q=${tag.toLowerCase()}`} 
              key={index}
              className="text-sm text-gray-700 hover:text-red-500 hover:underline transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularSearchIdeas; 