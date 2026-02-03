"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import excitedGif from "../../public/excitedGif.gif"
import potteryPic from '../../public/potteryPic.jpg'
import topGolf from '../../public/topGolf.jpg'
import dinner from '../../public/dinner.jpg'

const ItineraryPage = () => {
  const router = useRouter()
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [confirmationMessage, setConfirmationMessage] = useState('')

  const handleConfirmDate = async () => {
    setIsLoading(true)
    try {
      // Send server-side notification
      const response = await fetch('/api/confirm-date', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          status: 'confirmed',
        }),
      })

      if (response.ok) {
        // Navigate to save-the-date page instead of showing message
        router.push('/save-the-date')
      }
    } catch (error) {
      console.error('Error confirming date:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const cards = [
    { title: 'Pottery Painting 🎨', description: 'We\'ll each put our own spin on a piece of pottery from Paint the Town while at home watching a movie of your choice. Snacks are 100% included.', src: potteryPic.src },
    { title: 'Dinner 🍽️', description: 'Dinner for tonight will be at Din Tai Fung at 7:00PM. Hope you\'re ready for some mf soup dumpings.', src: dinner.src },
    { title: 'Top Golf 🏌️', description: 'We\'ll be finishing the night showing off our insane golf skills and it totally won\'t be a competition.', src: topGolf.src },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-6 gap-12 bg-[#f0a6ca] font-inter">
      <h1 className="text-6xl font-bold animate-bounce font-playfair">Valentine Itinerary</h1>

      <div className="w-full max-w-4xl h-80 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={excitedGif.src}
          alt="Valentine GIF"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full max-w-4xl space-y-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex gap-6 items-center ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div className="shrink-0 w-40 h-40 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={card.src}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-3">{card.title}</h2>
              <p className="text-lg text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleConfirmDate}
        disabled={isLoading}
        className={`px-8 py-4 text-lg font-bold rounded-lg transition-colors ${
          isLoading
            ? 'bg-gray-500 text-white cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
      >
        {isLoading ? 'Confirming...' : 'Confirm Date'}
      </button>

      {confirmationMessage && (
        <div className={`text-center text-xl font-bold p-4 rounded-lg ${
          isConfirmed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {confirmationMessage}
        </div>
      )}
    </div>
  )
}

export default ItineraryPage
