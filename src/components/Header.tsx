import React from 'react'
import { Cpu } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex items-center">
        <Cpu className="text-blue-600 mr-3" size={32} />
        <h1 className="text-2xl font-bold text-gray-800">Top 100 AI Websites</h1>
      </div>
    </header>
  )
}

export default Header