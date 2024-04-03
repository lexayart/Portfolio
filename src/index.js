import React from 'react'
import ReactDOM from 'react-dom/client'
import Routeur from './components/Router'
import './style.scss'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Routeur />
    <SpeedInsights />
    <Analytics />
  </React.StrictMode>,
)
