import { useState } from 'react'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async (content: string) => {
    try {
      setLoading(true)
      // Add user message
      const userMessage: ChatMessage = { role: 'user', content }
      setMessages(prev => [...prev, userMessage])

      // Make API call to ChatGPT
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: content }),
      })

      const data = await response.json()
      
      // Add assistant message
      const assistantMessage: ChatMessage = { role: 'assistant', content: data.message }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setLoading(false)
    }
  }

  return { messages, sendMessage, loading }
} 