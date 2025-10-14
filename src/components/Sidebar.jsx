function Sidebar({ chats, onNewChat, onSelectChat, onBackToHome, currentChatId }) {
  return (
    <div className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col">
      <div className="p-4 border-b border-slate-800">
        <div 
          onClick={onBackToHome}
          className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
          title="Back to Home"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-800 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">OL</span>
          </div>
          <span className="font-semibold text-slate-200">Open Lovable</span>
        </div>
      </div>

      <div className="p-4">
        <button
          onClick={onNewChat}
          className="w-full flex items-center space-x-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span className="text-sm">New Chat</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat)}
            className={`text-sm py-2 px-2 rounded cursor-pointer transition-colors mb-1 truncate ${
              currentChatId === chat.id
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:bg-slate-900'
            }`}
          >
            {chat.prompt}
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800 p-4 space-y-3">
        <div className="text-sm text-slate-400">
          <div className="font-semibold mb-2">Feedback? DM us!</div>
          <button className="flex items-center space-x-2 text-slate-400 hover:text-slate-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs">Contact us via email</span>
          </button>
        </div>

        <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center text-xs">1148</div>
            <span className="text-xs text-slate-400 truncate">user@example.com</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-amber-600">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span className="text-xs font-semibold">Low balance!</span>
        </div>

        <button className="w-full py-2 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold text-sm transition-colors text-slate-100">
          Get More Credits
        </button>
      </div>
    </div>
  );
}

export default Sidebar;