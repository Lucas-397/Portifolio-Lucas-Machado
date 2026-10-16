import type { ReactNode } from 'react'
import PageHeader from './components/header/PageHeader'

interface AppProps{
  children: ReactNode
}

function App({children}:AppProps) {
  return (
    <>
      <PageHeader/>
      <main className="main-content">
        {children}
      </main>
    </>
  )
}

export default App
