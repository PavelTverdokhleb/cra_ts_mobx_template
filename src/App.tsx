import React from 'react'
import MainPage from './MainPage'
import './App.scss'

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <code>React ESLint Boilerplate</code>
        <MainPage />
      </header>
    </div>
  )
}
