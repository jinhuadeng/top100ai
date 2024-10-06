import React from 'react'
import { ExternalLink } from 'lucide-react'
import { Website } from '../types'

interface WebsiteCardProps {
  website: Website
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({ website }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={website.image} alt={website.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{website.name}</h2>
        <p className="text-gray-600 text-sm mb-4">{website.description}</p>
        <a
          href={website.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          Visit Site
          <ExternalLink className="ml-1" size={16} />
        </a>
      </div>
    </div>
  )
}

export default WebsiteCard