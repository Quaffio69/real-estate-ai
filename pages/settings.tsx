import { useState } from 'react'
import Layout from '../components/Layout'

export default function Settings() {
  const [apiKey, setApiKey] = useState('')
  const [saved, setSaved] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem('openai_api_key', apiKey)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <Layout title="Settings">
      <div className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-text mb-8">API Settings</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="apiKey" className="block text-text font-medium mb-2">
              OpenAI API Key
            </label>
            <input
              type="password"
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              placeholder="sk-..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Save API Key
          </button>
          
          {saved && (
            <p className="text-primary text-center">API key saved successfully!</p>
          )}
        </form>
      </div>
    </Layout>
  )
} 