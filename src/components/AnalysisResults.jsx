import React from 'react';
import { BarChart2 } from 'lucide-react';

export default function AnalysisResults({ results }) {
  if (!results) return null;

  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900 flex items-center">
          <BarChart2 className="h-6 w-6 text-gray-400 mr-2" />
          Analysis Results
        </h2>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-md">
          <h3 className="text-sm font-medium text-gray-900">Matching Keywords</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {results.matching.map((keyword, index) => (
              <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                {keyword}
              </span>
            ))}
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-md">
          <h3 className="text-sm font-medium text-gray-900">Missing Keywords</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {results.missing.map((keyword, index) => (
              <span key={index} className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}