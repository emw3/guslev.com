import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function DALLEImage() {
  const [imageURL, setImageURL] = useState('')
  const [imageDescription, setImageDescription] = useState('')

  const handleGenerateImage = async () => {
    const response = await fetch('/api/image')

    const image = await response.json()
    console.log('image', image)
    setImageURL(image.url)
    setImageDescription(image.description)
  }

  useEffect(() => {
    handleGenerateImage()
  }, [])

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative w-56 h-56">
        {imageURL ? (
          <Image
            width={100}
            height={100}
            layout="fill"
            src={imageURL}
            alt="Generated DALL-E Image"
          />
        ) : (
          <div className="w-full h-full bg-gray-600 animate-pulse"></div>
        )}
      </div>
      {imageDescription ? (
        <div className="text-zinc-800 dark:text-slate-200 text-xs">
          <span className="font-light">{imageDescription}</span>
          <span className="font-extralight italic">- made using GPT-3 & DALL·E</span>
        </div>
      ) : (
        <div className="w-full h-4 bg-gray-600 animate-pulse"></div>
      )}
    </div>
  )
}
