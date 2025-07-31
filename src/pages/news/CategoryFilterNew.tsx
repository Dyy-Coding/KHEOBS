// components/CategoryFilterNew.tsx
import React from 'react';

interface Props {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const CategoryFilterNew: React.FC<Props> = ({ categories, selected, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {['all', ...categories].map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selected === category
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilterNew;
