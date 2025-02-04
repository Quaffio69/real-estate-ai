interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface Props {
  message: ChatMessage
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-[#22c55e] text-white'
            : 'bg-white text-[#1a365d]'
        }`}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  )
} 