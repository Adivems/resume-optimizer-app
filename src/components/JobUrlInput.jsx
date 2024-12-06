import React from 'react';
import { Link2 } from 'lucide-react';

export default function JobUrlInput({ value, onChange, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block text-sm font-medium text-gray-700">
        LinkedIn Job URL
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Link2 className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="url"
            className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md pl-10 text-sm border-gray-300"
            placeholder="https://www.linkedin.com/jobs/view/..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Analyze
        </button>
      </div>
    </form>
  );
}