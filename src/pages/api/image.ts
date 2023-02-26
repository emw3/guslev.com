// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

type Data = {
  description?: string;
  url?: string;
  error?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  try {
    const prompTextResponse = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'Generate a prompt for a DALL-E image',
      temperature: 1,
      max_tokens: 200,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })

    const generatedText = prompTextResponse?.data?.choices[0]?.text?.trim()
    const imageResponse = await openai.createImage({
      prompt: generatedText || 'un oso drogandose',
      n: 1,
      size: '512x512',
    })

    res.status(200).json({ description: generatedText, url: imageResponse.data.data[0].url })

  } catch (err) {
    res.status(500).json({ error: err })
  }
}
