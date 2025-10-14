import './styles/globals.css';
import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import CodeOutput from './components/CodeOutput';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGetStarted = () => {
    setShowLanding(false);
  };

  const handleBackToHome = () => {
    setShowLanding(true);
    setCurrentChat(null);
  };

  const handleNewChat = () => {
    setCurrentChat(null);
  };

  const handleSelectChat = (chat) => {
    setCurrentChat(chat);
  };

  const handleGenerate = async (prompt, imageUrl) => {
    setIsGenerating(true);
    
    // Create a new chat
    const newChat = {
      id: Date.now(),
      prompt: prompt,
      imageUrl: imageUrl,
      code: null,
    };

    try {
      // Call backend API
      const response = await fetch('http://localhost:8000/api/generate-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt,
          imageUrl: imageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate code');
      }

      const data = await response.json();
      newChat.code = data.code;
      
      setChats(prev => [newChat, ...prev]);
      setCurrentChat(newChat);
    } catch (error) {
      console.error('Error generating code:', error);
      newChat.code = `// Error: ${error.message}\n// Please check your backend connection and try again.`;
      setChats(prev => [newChat, ...prev]);
      setCurrentChat(newChat);
    } finally {
      setIsGenerating(false);
    }
  };

  if (showLanding) {
    return <LandingPage onGetStarted={handleGetStarted} />;
  }

  return (
    <div className="flex h-screen bg-slate-950 text-white">
      <Sidebar
        chats={chats}
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
        onBackToHome={handleBackToHome}
        currentChatId={currentChat?.id}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        {currentChat ? (
          <div className="flex-1 overflow-y-auto p-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-slate-900 rounded-lg p-6 border border-slate-800">
                <h2 className="text-xl font-semibold mb-2 text-slate-100">Prompt</h2>
                <p className="text-slate-300">{currentChat.prompt}</p>
                {currentChat.imageUrl && (
                  <img
                    src={currentChat.imageUrl}
                    alt="Reference"
                    className="mt-4 max-w-md rounded-lg border border-slate-700"
                  />
                )}
              </div>
              {currentChat.code && <CodeOutput code={currentChat.code} />}
            </div>
          </div>
        ) : (
          <MainContent onGenerate={handleGenerate} isGenerating={isGenerating} />
        )}
      </div>
    </div>
  );
}

export default App;