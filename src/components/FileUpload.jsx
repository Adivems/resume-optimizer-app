import React from 'react';
import { useDropzone } from 'react-dropzone';
import { FileUp } from 'lucide-react';

export default function FileUpload({ onFileSelect }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'application/pdf': ['.pdf'] },
    maxFiles: 1,
    onDrop: acceptedFiles => {
      if (acceptedFiles?.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    }
  });

  return (
    <div {...getRootProps()} 
      className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors 
        ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
    >
      <input {...getInputProps()} />
      <FileUp className="mx-auto h-12 w-12 text-gray-400" />
      <p className="mt-2 text-sm text-gray-600">
        {isDragActive ? 'Drop your resume here' : 'Drag and drop your resume PDF, or click to select'}
      </p>
    </div>
  );
}