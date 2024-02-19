import React from 'react';
import FileUpload from './component/FileUpload';

function App() {
  const handleFilesAdded = (files) => {
    console.log(files);
    // Process the files here (e.g., prepare for upload)
  };

  return (
    <div className="App min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Upload Your Documents</h1>
      <p className="text-md mb-2 text-gray-700">Drag and drop your files here or click to select files</p>
      <FileUpload onFilesAdded={handleFilesAdded} />
      <footer className="mt-8 text-gray-600">
        Powered by <a href="/" className="text-blue-500 hover:text-blue-700">DocuChatPlatform</a>
      </footer>
    </div>
  );
}

export default App;
