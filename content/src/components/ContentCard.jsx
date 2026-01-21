import React from 'react';
import '../index.css';

function ContentCard({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="bg-gradient-to-r from-green-400 to-teal-500 h-2"></div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {title || 'Default Title'}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description || 'Default description for this card component.'}
        </p>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <span className="text-xs text-teal-600 font-semibold">
            📦 Loaded via Module Federation 
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
