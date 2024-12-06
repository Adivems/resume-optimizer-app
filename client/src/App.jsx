import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { DocumentArrowUpIcon, LinkIcon, ChartBarIcon } from '@heroicons/react/24/outline';

function App() {
  const [jobUrl, setJobUrl] = useState('');
  const [analysis, setAnalysis] = useState(null);
  
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/pdf': ['.pdf']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      // Handle PDF upload
      console.log(acceptedFiles);
    }
  });

  const handleUrlSubmit = async (e) => {
    e.preventDefault();
    // Handle job URL submission
    console.log(jobUrl);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Resume Optimizer
          </h1>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Optimize your resume for ATS and track your applications
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Resume Upload Section */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-8">
              <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <input {...getInputProps()} />
                <DocumentArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  Drag and drop your resume PDF, or click to select
                </p>
              </div>
            </div>
          </div>

          {/* Job URL Section */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-8">
              <form onSubmit={handleUrlSubmit}>
                <label htmlFor="jobUrl" className="block text-sm font-medium text-gray-700">
                  LinkedIn Job URL
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <div className="relative flex items-stretch flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LinkIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      type="url"
                      id="jobUrl"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md pl-10 sm:text-sm border-gray-300"
                      placeholder="https://www.linkedin.com/jobs/view/..."
                      value={jobUrl}
                      onChange={(e) => setJobUrl(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Analyze
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Analysis Section (will be shown after processing) */}
        {analysis && (
          <div className="mt-8 bg-white rounded-lg shadow">
            <div className="px-6 py-8">
              <h2 className="text-lg font-medium text-gray-900 flex items-center">
                <ChartBarIcon className="h-6 w-6 text-gray-400 mr-2" />
                Analysis Results
              </h2>
              {/* Analysis content will go here */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;