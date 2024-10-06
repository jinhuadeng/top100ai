import React from 'react'
import { ExternalLink } from 'lucide-react'

const Banner: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white py-3 px-4 flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-lg font-semibold">
          Discover the power of AI with our premium courses!
        </p>
        <a
          href="https://www.example.com/ai-courses"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-600 px-4 py-2 rounded-full font-bold flex items-center hover:bg-blue-100 transition-colors duration-200"
        >
          Learn More
          <ExternalLink className="ml-2" size={18} />
        </a>
      </div>
    </div>
  )
}

export default Banner