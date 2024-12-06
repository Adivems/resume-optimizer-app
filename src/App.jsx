import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import JobUrlInput from './components/JobUrlInput';
import AnalysisResults from './components/AnalysisResults';
import { BarChart2 } from 'lucide-react';

export default function App() {
  const [jobUrl, setJobUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [results, setResults] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    // For now, just show some mock results when a file is selected
    setResults({
      matching: ['Product Strategy', 'Agile', 'Roadmap'],
      missing: ['SQL', 'Data Analytics']
    });
  };

  const handleUrlSubmit = (url) => {
    // This will be connected to the backend later
    console.log('Analyzing URL:', url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Resume Optimizer
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Optimize your resume for ATS and track your applications
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Resume Upload Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <FileUpload onFileSelect={handleFileSelect} />
              {selectedFile && (
                <div className="mt-4 text-sm text-gray-600">
                  Selected file: {selectedFile.name}
                </div>
              )}
            </div>
          </div>

          {/* Job URL Section */}
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-8">
              <JobUrlInput
                value={jobUrl}
                onChange={setJobUrl}
                onSubmit={handleUrlSubmit}
              />

              <div className="mt-6 p-4 bg-gray-50 rounded-md">
                <h3 className="text-sm font-medium text-gray-900 flex items-center">
                  <BarChart2 className="h-5 w-5 text-gray-400 mr-2" />
                  Salary Filter Active
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Only showing positions with salary > $200,000
                </p>
              </div>
            </div>
          </div>
        </div>

        <AnalysisResults results={results} />
      </div>
    </div>
  );
}