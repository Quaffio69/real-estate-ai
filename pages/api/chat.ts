import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { message } = req.body

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful real estate AI assistant. Provide detailed and accurate information about properties, market trends, and real estate advice."
        },
        {
          role: "user",
          content: message
        }
      ],
    })

    const reply = completion.choices[0]?.message?.content || 'Sorry, I could not process your request.'
    
    res.status(200).json({ message: reply })
  } catch (error) {
    console.error('Error in chat API:', error)
    res.status(500).json({ message: 'Error processing your request' })
  }
} 