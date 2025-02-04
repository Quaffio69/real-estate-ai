import { useState } from 'react'
import Layout from '../components/Layout'
import ChatMessage from '../components/ChatMessage'
import { useChat } from '../hooks/useChat'

export default function Demo() {
  const [message, setMessage] = useState('')
  const { messages, sendMessage, loading } = useChat()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      sendMessage(message)
      setMessage('')
    }
  }

  return (
    <Layout title="AI Chat Demo">
      <div className="flex flex-col h-[calc(100vh-5rem)] max-w-5xl mx-auto">
        {/* Chat Header */}
        <div className="bg-white border-b border-[#dcfce7] p-4 rounded-t-2xl">
          <h1 className="text-2xl font-bold text-[#1a365d]">Real Estate AI Assistant</h1>
          <p className="text-[#4a5568]">Ask me anything about properties and real estate</p>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto bg-[#f0fdf4] p-4 space-y-4">
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}
          {loading && (
            <div className="flex items-center space-x-2 text-[#4a5568]">
              <div className="w-2 h-2 bg-[#22c55e] rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-[#22c55e] rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-[#22c55e] rounded-full animate-bounce delay-200" />
            </div>
          )}
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSubmit} className="bg-white border-t border-[#dcfce7] p-4 rounded-b-2xl">
          <div className="flex space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 rounded-xl border border-[#dcfce7] focus:outline-none focus:ring-2 focus:ring-[#22c55e]/20 focus:border-[#22c55e] transition-all"
            />
            <button
              type="submit"
              disabled={loading || !message.trim()}
              className="px-6 py-3 bg-[#22c55e] text-white rounded-xl font-semibold hover:bg-[#16a34a] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
} 