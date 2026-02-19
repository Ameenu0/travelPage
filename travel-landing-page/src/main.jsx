import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/navbar.jsx'
import Navbar from './components/navbar.jsx'
import Hero from './components/Hero.jsx'
import Cards from './components/cards.jsx'
import Journey from './components/Journey.jsx'
import Discover from './components/Discover.jsx'
import Explore from './components/Explore.jsx'
import Wonder from './components/Wonder.jsx'
import Newsletter from './components/Newsletter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar /> 
    <Hero />
    <Cards />
    <Journey />
    <Wonder />
    <Discover />
    <Explore />
    <Newsletter />
  </StrictMode>,
)
