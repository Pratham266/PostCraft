import React from 'react';

const LoadingSpinner = ({ message = "Generating AI-powered posts..." }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
        <div className="flex flex-col items-center space-y-4">
          {/* Animated spinner */}
          <div className="relative">
            <div className="w-16 h-16 border-4 border-purple-200 rounded-full animate-spin border-t-purple-600"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-purple-600 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Loading message */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">AI Generation in Progress</h3>
            <p className="text-sm text-gray-600">{message}</p>
          </div>
          
          {/* Progress steps */}
          <div className="w-full space-y-2">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Step 1: Generating text content...</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span>Step 2: Creating media assets...</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <span>Step 3: Finalizing posts...</span>
            </div>
          </div>
          
          {/* Time estimate */}
          <div className="text-xs text-gray-500">
            This may take 30-60 seconds depending on content complexity
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
