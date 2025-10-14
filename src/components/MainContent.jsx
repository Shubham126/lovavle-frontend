import { useState, useRef } from 'react';

function MainContent({ onGenerate, isGenerating }) {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showImageInput, setShowImageInput] = useState(false);
  const fileInputRef = useRef(null);

  const handleGenerate = () => {
    if (prompt.trim()) {
      onGenerate(prompt, imageUrl || null);
      setPrompt('');
      setImageUrl('');
      setShowImageInput(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="border-b border-slate-800 p-4 flex items-center justify-between">
        <button className="p-2 hover:bg-slate-900 rounded">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold text-center mb-4 text-slate-100">Welcome to Open Lovable</h1>
          <p className="text-slate-400 text-center mb-12">Transform any website into React apps with AI</p>

          <div className="relative mb-6">
            {imageUrl && (
              <div className="mb-4 relative inline-block">
                <img
                  src={imageUrl}
                  alt="Preview"
                  className="max-w-xs max-h-48 rounded-lg border border-slate-700"
                />
                <button
                  onClick={() => setImageUrl('')}
                  className="absolute -top-2 -right-2 bg-amber-600 hover:bg-amber-700 text-white rounded-full p-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="How can Open Lovable help you today?"
              rows={1}
              disabled={isGenerating}
              className="w-full bg-slate-900 text-white px-6 py-4 pr-32 rounded-xl border border-slate-700 focus:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-600 transition-all duration-200 resize-none placeholder-slate-500 disabled:opacity-50"
              style={{ minHeight: '60px' }}
            />

            <div className="absolute right-3 bottom-3 flex items-center space-x-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="p-2 text-slate-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-slate-800"
                title="Upload image"
                disabled={isGenerating}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => setShowImageInput(!showImageInput)}
                className="p-2 text-slate-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-slate-800"
                title="Add image URL"
                disabled={isGenerating}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </button>

              <button
                type="button"
                className="p-2 text-slate-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-slate-800"
                title="Voice input"
                disabled={isGenerating}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>

              <button
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
                className="px-4 py-2 bg-slate-200 text-slate-900 font-medium rounded-lg hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isGenerating ? 'Generating...' : 'Generate'}
              </button>
            </div>
          </div>

          {showImageInput && (
            <div className="mb-6 p-4 bg-slate-900 rounded-lg border border-slate-700">
              <label className="block text-sm text-slate-400 mb-2">Image URL:</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="flex-1 bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-700 focus:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-600"
                />
                <button
                  onClick={() => setShowImageInput(false)}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                >
                  Add
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button
              onClick={() => setPrompt('Build A Todo App In React Using Tailwind')}
              disabled={isGenerating}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 rounded-full border border-slate-700 transition-all duration-200 text-sm text-slate-300 disabled:opacity-50"
            >
              Build A Todo App In React Using Tailwind
            </button>
            <button
              onClick={() => setPrompt('Create A Cookie Consent Form Using Tailwind')}
              disabled={isGenerating}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 rounded-full border border-slate-700 transition-all duration-200 text-sm text-slate-300 disabled:opacity-50"
            >
              Create A Cookie Consent Form Using Tailwind
            </button>
            <button
              onClick={() => setPrompt('How Do I Center A Div?')}
              disabled={isGenerating}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 rounded-full border border-slate-700 transition-all duration-200 text-sm text-slate-300 disabled:opacity-50"
            >
              How Do I Center A Div?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;