import React, { useState } from 'react'
import { Search } from 'lucide-react'
import Header from './components/Header'
import Banner from './components/Banner'
import WebsiteCard from './components/WebsiteCard'
import { websites } from './data/websites'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredWebsites = websites.filter(website =>
    website.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100">
      <Banner />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Search AI websites..."
            className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredWebsites.map((website) => (
            <WebsiteCard key={website.id} website={website} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App